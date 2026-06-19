"use client";

import dynamic from 'next/dynamic';
import { ArrowRight } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { iberiaJourneySteps } from './iberia-journey-data';
import { IberiaJourneyStep } from './iberia-journey-step';
import styles from './iberia-journey-section.module.css';

const Iberia3DMap = dynamic(
  () => import('./iberia-3d-map').then((module) => module.Iberia3DMap),
  {
    ssr: false,
    loading: () => <div className={styles.mapPlaceholder} aria-hidden="true" />,
  },
);

export function IberiaJourneySection({ contactHref }: { contactHref: string }) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const activeStepRef = useRef(0);
  const scrollFrameRef = useRef<number | null>(null);
  const headerObserverRef = useRef<ResizeObserver | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [highlightStep, setHighlightStep] = useState<number | null>(null);
  const [mapReady, setMapReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const visualStep = highlightStep ?? activeStep;

  const setStepRef = useCallback(
    (index: number) => (node: HTMLDivElement | null) => {
      stepRefs.current[index] = node;
    },
    [],
  );

  useEffect(() => {
    activeStepRef.current = activeStep;
  }, [activeStep]);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return undefined;

    const applyHeaderOffset = () => {
      const header = document.querySelector('header');
      const headerHeight = header ? Math.round(header.getBoundingClientRect().height) : 0;
      section.style.setProperty('--foreigners-header-offset', `${headerHeight}px`);
    };

    applyHeaderOffset();
    headerObserverRef.current?.disconnect();

    const header = document.querySelector('header');
    if (header) {
      headerObserverRef.current = new ResizeObserver(applyHeaderOffset);
      headerObserverRef.current.observe(header);
    }

    window.addEventListener('resize', applyHeaderOffset);

    const ensureMapReady = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      if (rect.top < viewportHeight + 420 && rect.bottom > -420) {
        setMapReady(true);
      }
    };

    ensureMapReady();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setMapReady(true);
      },
      { rootMargin: '650px 0px 650px 0px', threshold: 0.01 },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', applyHeaderOffset);
      headerObserverRef.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)');
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener('change', update);

    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setActiveStep(0);
      setHighlightStep(null);
      return undefined;
    }

    const section = sectionRef.current;
    const nodes = stepRefs.current.filter((node): node is HTMLDivElement => Boolean(node));

    if (!section || nodes.length === 0) return undefined;

    const syncActiveStep = () => {
      const sectionRect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (sectionRect.bottom <= 0 || sectionRect.top >= viewportHeight) return;

      const activationLine = viewportHeight * 0.48;
      let candidateIndex = activeStepRef.current;
      let candidateDistance = Infinity;
      let currentDistance = Infinity;

      nodes.forEach((node, index) => {
        const rect = node.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const distance = Math.abs(center - activationLine);

        if (index === activeStepRef.current) currentDistance = distance;
        if (distance < candidateDistance) {
          candidateDistance = distance;
          candidateIndex = index;
        }
      });

      if (candidateIndex !== activeStepRef.current && candidateDistance + 80 < currentDistance) {
        activeStepRef.current = candidateIndex;
        setActiveStep(candidateIndex);
      }
    };

    const scheduleSync = () => {
      if (scrollFrameRef.current) cancelAnimationFrame(scrollFrameRef.current);
      scrollFrameRef.current = requestAnimationFrame(() => {
        scrollFrameRef.current = null;
        syncActiveStep();
      });
    };

    scheduleSync();
    window.addEventListener('scroll', scheduleSync, { passive: true });
    window.addEventListener('resize', scheduleSync);

    return () => {
      window.removeEventListener('scroll', scheduleSync);
      window.removeEventListener('resize', scheduleSync);
      if (scrollFrameRef.current) cancelAnimationFrame(scrollFrameRef.current);
    };
  }, [isMobile, mapReady]);

  const progressLine = `${Math.min(100, ((visualStep + 1) / iberiaJourneySteps.length) * 100)}%`;

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      data-foreigners-section="iberia_journey"
      aria-labelledby="iberia-journey-title"
    >
      <div className="container-shell">
        <div className={styles.grid}>
          <div className={styles.visualColumn}>
            <div className={styles.visualSticky}>
              {mapReady ? (
                <Iberia3DMap activeStep={activeStep} emphasisStep={visualStep} />
              ) : (
                <div className={styles.mapPlaceholder} aria-hidden="true" />
              )}
            </div>
          </div>

          <div className={styles.copyColumn}>
            <div className={styles.intro}>
              <p className="kicker">TU LLEGADA A ESPAÑA</p>
              <h2 id="iberia-journey-title" className="section-title">
                Del primer requisito a tu póliza, contigo en cada paso
              </h2>
              <p className="section-copy">
                Revisamos tu trámite, comprobamos la documentación y te ayudamos a elegir la modalidad adecuada hasta que recibes la póliza.
              </p>
            </div>

            <div className={styles.steps} aria-label="Etapas de acompañamiento">
              <span className={styles.stepsTrack} aria-hidden="true">
                <span className={styles.stepsTrackBase} />
                <span className={styles.stepsTrackProgress} style={{ height: progressLine }} />
              </span>
              {iberiaJourneySteps.map((step, index) => (
                <div key={step.number} ref={setStepRef(index)} className={styles.stepZone}>
                  <IberiaJourneyStep
                    step={step}
                    active={visualStep === index}
                    index={index}
                    onHighlight={setHighlightStep}
                    onActivate={(selected) => {
                      activeStepRef.current = selected;
                      setActiveStep(selected);
                      setHighlightStep(selected);
                    }}
                  />
                </div>
              ))}
            </div>

            <a
              href="#elige"
              className={styles.cta}
            >
              Revisar mi situación <ArrowRight className="h-4 w-4" />
            </a>
            <p className={styles.trustLine}>Con pasaporte · Atención desde España · Seguimiento hasta la documentación</p>
          </div>
        </div>
      </div>
    </section>
  );
}
