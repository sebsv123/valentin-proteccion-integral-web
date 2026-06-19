"use client";

import { useEffect, useMemo, useRef, useState, type PointerEvent } from 'react';
import { BadgeCheck, FileCheck2, MessageCircle, ShieldCheck } from 'lucide-react';
import * as THREE from 'three';
import styles from './iberia-journey-section.module.css';

type LonLat = [number, number];
type GeoPolygon = LonLat[][];
type IberiaFeature = {
  id?: string;
  properties: {
    name: string;
    adm0_a3: string;
    iso_a3: string;
  };
  geometry: {
    type: 'Polygon' | 'MultiPolygon';
    coordinates: GeoPolygon | GeoPolygon[];
  };
};
type IberiaGeoJson = {
  type: 'FeatureCollection';
  features: IberiaFeature[];
};
type ProjectedCountry = {
  code: string;
  name: string;
  rings: THREE.Vector2[][];
  svgPath: string;
};
type ExpeditionRowState = 'pending' | 'active' | 'done';
type ExpeditionState = {
  state: string;
  micro: string;
  rows: ExpeditionRowState[];
  final: boolean;
  icon: typeof MessageCircle;
};

const STEP_ROTATIONS = [
  { x: -0.57, y: -0.18, z: -0.015 },
  { x: -0.575, y: -0.155, z: 0.005 },
  { x: -0.562, y: -0.125, z: 0.012 },
  { x: -0.578, y: -0.1, z: -0.008 },
];

const ARRIVAL_NODE = { left: '58.6%', top: '41.2%' };

const ROUTE_SEGMENTS = [
  { d: 'M 52 407 C 110 389, 153 379, 196 367', pulse: { x: 123, y: 382 } },
  { d: 'M 196 367 C 270 348, 332 333, 398 320', pulse: { x: 287, y: 347 } },
  { d: 'M 398 320 C 457 308, 505 302, 548 299', pulse: { x: 462, y: 310 } },
  { d: 'M 548 299 C 565 298, 579 295, 592 288', pulse: { x: 572, y: 296 } },
] as const;

const EXPEDIENTE_STATES = [
  {
    state: 'Pendiente de revisión',
    micro: '',
    rows: ['pending', 'pending', 'pending', 'pending'] as ExpeditionRowState[],
    final: false,
    icon: MessageCircle,
  },
  {
    state: 'Trámite identificado',
    micro: '',
    rows: ['active', 'pending', 'pending', 'pending'] as ExpeditionRowState[],
    final: false,
    icon: MessageCircle,
  },
  {
    state: 'Requisitos revisados',
    micro: 'Cobertura · copagos · carencias · documentación',
    rows: ['done', 'active', 'pending', 'pending'] as ExpeditionRowState[],
    final: false,
    icon: BadgeCheck,
  },
  {
    state: 'Modalidad seleccionada',
    micro: '',
    rows: ['done', 'done', 'active', 'pending'] as ExpeditionRowState[],
    final: false,
    icon: ShieldCheck,
  },
  {
    state: 'Documentación lista',
    micro: '',
    rows: ['done', 'done', 'done', 'done'] as ExpeditionRowState[],
    final: true,
    icon: FileCheck2,
  },
] as const;

function canUseWebGL() {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl'));
  } catch {
    return false;
  }
}

function polygonCoordinates(feature: IberiaFeature): GeoPolygon[] {
  if (feature.geometry.type === 'Polygon') return [feature.geometry.coordinates as GeoPolygon];
  return feature.geometry.coordinates as GeoPolygon[];
}

function signedArea(points: THREE.Vector2[]) {
  let area = 0;

  for (let index = 0; index < points.length - 1; index += 1) {
    const current = points[index];
    const next = points[index + 1];
    area += current.x * next.y - next.x * current.y;
  }

  return area / 2;
}

function ringToSvgPath(rings: THREE.Vector2[][]) {
  return rings
    .map((ring) => {
      const commands = ring.map((point, index) => {
        const x = 500 + point.x * 125;
        const y = 350 - point.y * 125;
        return `${index === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`;
      });

      return `${commands.join(' ')} Z`;
    })
    .join(' ');
}

function projectGeoJson(data: IberiaGeoJson) {
  const allCoordinates = data.features.flatMap((feature) =>
    polygonCoordinates(feature).flatMap((polygon) => polygon.flatMap((ring) => ring)),
  );
  const meanLatitude =
    allCoordinates.reduce((sum, coordinate) => sum + coordinate[1], 0) / allCoordinates.length;
  const longitudeScale = Math.cos((meanLatitude * Math.PI) / 180);
  const projected = allCoordinates.map(([lon, lat]) => [lon * longitudeScale, lat] as const);
  const xs = projected.map(([x]) => x);
  const ys = projected.map(([, y]) => y);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const centerX = (minX + maxX) / 2;
  const centerY = (minY + maxY) / 2;
  const scale = 4.46 / Math.max(maxX - minX, maxY - minY);

  return data.features.map((feature) => {
    const polygon = polygonCoordinates(feature)[0];
    const rings = polygon.map((ring) =>
      ring.map(([lon, lat]) => new THREE.Vector2((lon * longitudeScale - centerX) * scale, (lat - centerY) * scale)),
    );
    const code = feature.properties.adm0_a3 || feature.properties.iso_a3 || feature.id || feature.properties.name;

    return {
      code,
      name: feature.properties.name,
      rings,
      svgPath: ringToSvgPath(rings),
    };
  });
}

function createCountryGeometry(country: ProjectedCountry, depth: number) {
  const [outerRing, ...holeRings] = country.rings;
  const outer = signedArea(outerRing) < 0 ? [...outerRing].reverse() : outerRing;
  const shape = new THREE.Shape(outer);

  for (const holeRing of holeRings) {
    const hole = signedArea(holeRing) > 0 ? [...holeRing].reverse() : holeRing;
    shape.holes.push(new THREE.Path(hole));
  }

  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: true,
    bevelSize: 0.005,
    bevelThickness: 0.005,
    bevelSegments: 2,
  });
  geometry.translate(0, 0, -depth / 2);
  geometry.computeVertexNormals();

  return geometry;
}

export function Iberia3DMap({ activeStep, emphasisStep }: { activeStep: number; emphasisStep: number }) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const groupRef = useRef<THREE.Group | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null);
  const frameRef = useRef<number | null>(null);
  const [geoJson, setGeoJson] = useState<IberiaGeoJson | null>(null);
  const [webglAvailable, setWebglAvailable] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const projectedCountries = useMemo(() => (geoJson ? projectGeoJson(geoJson) : []), [geoJson]);
  const currentStep = Math.max(0, activeStep);
  const highlightedStep = emphasisStep ?? currentStep;
  const expeditionStage = Math.min(currentStep + 1, EXPEDIENTE_STATES.length - 1);
  const expeditionState = EXPEDIENTE_STATES[expeditionStage];
  const ExpeditionIcon = expeditionState.icon;

  useEffect(() => {
    let cancelled = false;

    setWebglAvailable(canUseWebGL());

    fetch('/data/iberia.geojson')
      .then((response) => {
        if (!response.ok) throw new Error(`Unable to load iberia.geojson: ${response.status}`);
        return response.json() as Promise<IberiaGeoJson>;
      })
      .then((data) => {
        if (!cancelled) setGeoJson(data);
      })
      .catch(() => {
        if (!cancelled) setGeoJson(null);
      });

    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener('change', update);

    return () => {
      cancelled = true;
      media.removeEventListener('change', update);
    };
  }, []);

  useEffect(() => {
    const mount = mountRef.current;

    if (!mount || !webglAvailable || projectedCountries.length === 0) return undefined;

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.OrthographicCamera(-3.25, 3.25, 2.45, -2.45, 0.1, 20);
    camera.position.set(0, 0, 7);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.domElement.setAttribute('aria-hidden', 'true');
    renderer.domElement.tabIndex = -1;
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    const baseRotation = STEP_ROTATIONS[0];
    group.rotation.set(baseRotation.x, baseRotation.y, baseRotation.z);
    group.scale.set(0.96, 0.96, 0.96);
    group.position.set(0.03, 0.14, 0);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.58);
    const keyLight = new THREE.DirectionalLight(0xf9f1df, 1.92);
    keyLight.position.set(-2.6, 3.4, 4.8);
    const fillLight = new THREE.DirectionalLight(0x8ba0b7, 0.44);
    fillLight.position.set(3, -2, 4);
    scene.add(ambientLight, keyLight, fillLight);

    const spainMaterial = new THREE.MeshStandardMaterial({
      color: 0xe0c79a,
      roughness: 0.7,
      metalness: 0.05,
    });
    const portugalMaterial = new THREE.MeshStandardMaterial({
      color: 0x7f90a0,
      roughness: 0.92,
      metalness: 0.015,
    });
    const edgeMaterial = new THREE.LineBasicMaterial({
      color: 0xf8fafc,
      transparent: true,
      opacity: 0.14,
    });

    const geometries: THREE.BufferGeometry[] = [];
    const edgeGeometries: THREE.BufferGeometry[] = [];

    for (const country of projectedCountries) {
      const geometry = createCountryGeometry(country, country.code === 'ESP' ? 0.09 : 0.068);
      const mesh = new THREE.Mesh(geometry, country.code === 'ESP' ? spainMaterial : portugalMaterial);
      const edgeGeometry = new THREE.EdgesGeometry(geometry, 24);
      const edges = new THREE.LineSegments(edgeGeometry, edgeMaterial);
      mesh.renderOrder = country.code === 'ESP' ? 2 : 1;
      edges.renderOrder = 3;
      group.add(mesh, edges);
      geometries.push(geometry);
      edgeGeometries.push(edgeGeometry);
    }

    scene.add(group);
    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;
    groupRef.current = group;

    const render = () => renderer.render(scene, camera);
    render();

    const resizeObserver = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      renderer.setSize(width, height);
      camera.updateProjectionMatrix();
      render();
    });
    resizeObserver.observe(mount);

    return () => {
      resizeObserver.disconnect();
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      mount.removeChild(renderer.domElement);
      geometries.forEach((geometry) => geometry.dispose());
      edgeGeometries.forEach((geometry) => geometry.dispose());
      spainMaterial.dispose();
      portugalMaterial.dispose();
      edgeMaterial.dispose();
      renderer.dispose();
      scene.clear();
      sceneRef.current = null;
      cameraRef.current = null;
      rendererRef.current = null;
      groupRef.current = null;
    };
  }, [projectedCountries, webglAvailable]);

  useEffect(() => {
    const renderer = rendererRef.current;
    const scene = sceneRef.current;
    const camera = cameraRef.current;
    const group = groupRef.current;

    if (!renderer || !scene || !camera || !group) return;

    const target = reducedMotion ? STEP_ROTATIONS[0] : STEP_ROTATIONS[currentStep] ?? STEP_ROTATIONS[0];
    const start = { x: group.rotation.x, y: group.rotation.y, z: group.rotation.z };
    const startedAt = performance.now();
    const duration = reducedMotion ? 0 : 720;

    const animate = (time: number) => {
      const progress = duration === 0 ? 1 : Math.min(1, (time - startedAt) / duration);
      const eased =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      group.rotation.x = start.x + (target.x - start.x) * eased;
      group.rotation.y = start.y + (target.y - start.y) * eased;
      group.rotation.z = start.z + (target.z - start.z) * eased;
      renderer.render(scene, camera);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(animate);
  }, [currentStep, reducedMotion]);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const renderer = rendererRef.current;
    const scene = sceneRef.current;
    const camera = cameraRef.current;
    const group = groupRef.current;

    if (!renderer || !scene || !camera || !group || reducedMotion || event.pointerType !== 'mouse') return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    const target = STEP_ROTATIONS[currentStep] ?? STEP_ROTATIONS[0];
    group.rotation.x = target.x + y * 0.016;
    group.rotation.y = target.y + x * 0.02;
    renderer.render(scene, camera);
  };

  const handlePointerLeave = () => {
    const renderer = rendererRef.current;
    const scene = sceneRef.current;
    const camera = cameraRef.current;
    const group = groupRef.current;

    if (!renderer || !scene || !camera || !group) return;

    const target = STEP_ROTATIONS[currentStep] ?? STEP_ROTATIONS[0];
    group.rotation.set(target.x, target.y, target.z);
    renderer.render(scene, camera);
  };

  return (
    <div
      className={styles.mapShell}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      role="img"
      aria-label="Recorrido de acompañamiento desde la identificación del trámite hasta la emisión de la póliza y la documentación."
    >
      <div className={styles.mapDecor} aria-hidden="true">
        <div className={styles.mapGlow} />
        <div ref={mountRef} className={styles.canvasMount}>
          {(!webglAvailable || projectedCountries.length === 0) && projectedCountries.length > 0 ? (
            <svg className={styles.mapFallback} viewBox="0 0 1000 700" role="presentation">
              {projectedCountries.map((country) => (
                <path
                  key={country.code}
                  d={country.svgPath}
                  className={country.code === 'ESP' ? styles.spainFallback : styles.portugalFallback}
                />
              ))}
            </svg>
          ) : null}
        </div>
        <div className={styles.routeLayer}>
          <svg viewBox="0 0 1000 700" preserveAspectRatio="none">
            <defs>
              <linearGradient id="iberia-atlantic-route" x1="0" y1="0.5" x2="1" y2="0.5">
                <stop offset="0%" stopColor="#d8bc81" stopOpacity="0.12" />
                <stop offset="34%" stopColor="#d8bc81" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#f4d58b" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            {ROUTE_SEGMENTS.map((segment, index) => {
              const routeIndex = Math.min(highlightedStep, ROUTE_SEGMENTS.length - 1);
              const className =
                index < routeIndex
                  ? `${styles.routeSegment} ${styles.routeSegmentDone}`
                  : index === routeIndex
                    ? `${styles.routeSegment} ${styles.routeSegmentActive}`
                    : `${styles.routeSegment} ${styles.routeSegmentFuture}`;

              return <path key={segment.d} className={className} d={segment.d} />;
            })}
            <circle
              key={highlightedStep}
              className={`${styles.routePulse} ${styles.routePulseActive}`}
              cx={ROUTE_SEGMENTS[Math.min(highlightedStep, ROUTE_SEGMENTS.length - 1)].pulse.x}
              cy={ROUTE_SEGMENTS[Math.min(highlightedStep, ROUTE_SEGMENTS.length - 1)].pulse.y}
              r="5"
            />
          </svg>
        </div>
        <div className={`${styles.spainHalo} ${highlightedStep !== currentStep ? styles.spainHaloMuted : ''}`} />
        <div className={styles.arrivalNodeLayer}>
          <span className={`${styles.arrivalNode} ${highlightedStep !== currentStep ? styles.arrivalNodeMuted : ''}`} style={{ left: ARRIVAL_NODE.left, top: ARRIVAL_NODE.top }}>
            <span className={styles.arrivalNodeCore} />
          </span>
          <span
            className={`${styles.arrivalBadge} ${highlightedStep !== currentStep ? styles.arrivalBadgeMuted : ''}`}
            style={{ left: '60.2%', top: '48.8%' }}
          >
            <span className={styles.arrivalBadgeLabel}>Llegada a España</span>
            <span className={styles.arrivalBadgeSub}>Comienza tu acompañamiento</span>
          </span>
          <svg className={styles.arrivalLink} viewBox="0 0 1000 700" preserveAspectRatio="none">
            <path d="M 578 293 C 592 300, 603 309, 618 323" />
          </svg>
        </div>
      </div>
      <div className={styles.expeditionCard}>
        <div className={styles.expeditionTitleRow}>
          <span className={styles.expeditionTitle}>Tu expediente</span>
          <span className={`${styles.mapStatusIcon} ${expeditionState.final ? styles.mapStatusIconFinal : ''}`}>
            <ExpeditionIcon className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
        <div className={styles.expeditionStatus}>{expeditionState.state}</div>
        {expeditionState.micro ? <div className={styles.expeditionMicro}>{expeditionState.micro}</div> : null}
        <div className={styles.expeditionRows}>
          {['Trámite', 'Requisitos', 'Modalidad', 'Documentación'].map((label, index) => {
            const rowState = expeditionState.rows[index];
            const isDone = rowState === 'done';
            const isActive = rowState === 'active';
            return (
              <div
                key={label}
                className={`${styles.expeditionRow} ${
                  isDone ? styles.expeditionRowDone : isActive ? styles.expeditionRowActive : styles.expeditionRowPending
                }`}
              >
                <span
                  className={`${styles.expeditionRowBadge} ${
                    isDone ? styles.expeditionRowBadgeDone : isActive ? styles.expeditionRowBadgeActive : ''
                  }`}
                >
                  {isDone ? '✓' : String(index + 1)}
                </span>
                <span className={styles.expeditionRowLabel}>{label}</span>
              </div>
            );
          })}
        </div>
        <div className={`${styles.expeditionFinal} ${expeditionState.final ? '' : styles.expeditionFinalMuted}`}>
          <FileCheck2 className="h-4 w-4" aria-hidden="true" />
          Póliza y certificado preparados
        </div>
      </div>
    </div>
  );
}
