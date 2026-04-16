export type FAQLocal = { q: string; a: string };

export type DatosLocales = {
  poblacion: string;
  hospitalMasCercano: string;
  perfilPrincipal: string;
  curiosidadLocal: string;
};

export type Zona = {
  slug: string;
  nombre: string;
  nombreCorto: string;
  provincia: string;
  cp: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSubtitle: string;
  intro: string;
  porQueElegirNos: string;
  datosLocales: DatosLocales;
  perfilResidente: string;
  faqsLocales: FAQLocal[];
  segurosDestacados: string[];
  zonasCercanas: string[];
  whatsappMessage: string;
  keywords?: string[]; // Para la Ronda 2
};

export const zonas: Zona[] = [
  {
    slug: 'boadilla-del-monte',
    nombre: 'Boadilla del Monte',
    nombreCorto: 'Boadilla',
    provincia: 'Madrid',
    cp: '28660',
    metaTitle: 'Asesores de Seguros en Boadilla del Monte · Consulta Gratis',
    metaDescription: 'Asesores de seguros en Boadilla del Monte con +10 años de experiencia. Salud, vida, mascotas, dental y más. Sin letra pequeña. Consulta gratuita.',
    h1: 'Asesores de Seguros en Boadilla del Monte',
    heroSubtitle: '+10 años · +1.200 familias protegidas · Consulta gratuita y sin compromiso',
    intro: 'Somos asesores de seguros independientes con sede en Boadilla del Monte. Llevamos más de 10 años ayudando a familias y autónomos del municipio a elegir el seguro que realmente necesitan, sin letra pequeña y sin presión comercial. Comparamos entre las mejores compañías del mercado para encontrar la opción que encaja con tu situación real.',
    porQueElegirNos: 'Boadilla del Monte es uno de los municipios con mayor calidad de vida de España, pero eso no significa que los seguros sean más sencillos de entender. Las familias de Boadilla suelen tener perfiles muy distintos: desde autónomos que necesitan proteger su negocio y sus ingresos, hasta familias con niños que priorizan un buen seguro de salud con pediatría sin esperas. También hay un perfil senior creciente que busca cobertura completa con hospitalización y libre elección médica.\n\nEn Boadilla del Monte no hay hospital propio. El centro hospitalario de referencia es el Hospital Universitario Puerta de Hierro en Majadahonda, a unos 10 minutos. Esto hace que tener un seguro de salud privado sea especialmente valioso para los residentes: elimina listas de espera para especialistas, pruebas diagnósticas y urgencias sin necesidad de desplazarte al hospital público.\n\nA diferencia de los comparadores automáticos o los agentes ligados a una sola compañía, nosotros somos independientes. Eso significa que comparamos entre más de 20 aseguradoras y te recomendamos lo que de verdad necesitas, no lo que más comisión da. Atendemos de forma presencial en Boadilla del Monte y por videollamada o teléfono para quien prefiera no desplazarse.',
    datosLocales: {
      poblacion: '52.000 habitantes',
      hospitalMasCercano: 'Hospital Universitario Puerta de Hierro (Majadahonda, ~10 min)',
      perfilPrincipal: 'Familias de nivel adquisitivo medio-alto, autónomos y profesionales liberales',
      curiosidadLocal: 'Boadilla del Monte tiene una de las rentas per cápita más altas de España y es conocida por su entorno residencial y calidad de vida en el noroeste de Madrid',
    },
    perfilResidente: 'Familias con hijos, autónomos, profesionales liberales y un perfil senior creciente. Alto nivel adquisitivo. Prioridad en salud, vida y mascotas.',
    faqsLocales: [
      {
        q: '¿Hay asesores de seguros en Boadilla del Monte?',
        a: 'Sí. Valentín Protección Integral tiene su sede en Boadilla del Monte y lleva más de 10 años asesorando a familias y autónomos del municipio. Atendemos de forma presencial y también por videollamada o teléfono para mayor comodidad.',
      },
      {
        q: '¿Cuánto cuesta un seguro de salud en Boadilla del Monte?',
        a: 'El precio de un seguro de salud en Boadilla del Monte varía entre 30€ y 120€/mes según la edad, las coberturas y la compañía. En nuestra consulta gratuita comparamos las mejores opciones del mercado para tu perfil concreto sin coste ni compromiso.',
      },
      {
        q: '¿Puedo contratar un seguro sin desplazarme en Boadilla del Monte?',
        a: 'Sí. Toda la asesoría y contratación se puede hacer por videollamada, teléfono o WhatsApp. No es necesario ir a ninguna oficina. Te acompañamos en todo el proceso desde casa.',
      },
      {
        q: '¿Qué seguros necesita una familia en Boadilla del Monte?',
        a: 'Las familias de Boadilla suelen priorizar seguro de salud (sin listas de espera y con pediatría), seguro de vida (especialmente con hipoteca), seguro para mascotas y seguro dental. Te ayudamos a entender qué cubre cada uno y cuál tiene más sentido para tu situación.',
      },
      {
        q: '¿Es obligatorio el seguro de perro en Boadilla del Monte?',
        a: 'Sí. La Ley de Bienestar Animal de 2023 obliga a todos los propietarios de perros en España, incluido Boadilla del Monte, a tener un seguro de responsabilidad civil. Te asesoramos para elegir la cobertura adecuada desde 5€/mes.',
      },
    ],
    segurosDestacados: ['salud', 'vida', 'mascotas', 'dental'],
    zonasCercanas: ['las-rozas', 'majadahonda', 'pozuelo-de-alarcon', 'madrid'],
    whatsappMessage: 'Hola, soy de Boadilla del Monte y quiero una consulta gratuita sobre seguros.',
    keywords: ['asesores seguros boadilla del monte', 'seguros boadilla del monte', 'seguro salud boadilla', 'correduría seguros boadilla'],
  },
  {
    slug: 'las-rozas',
    nombre: 'Las Rozas de Madrid',
    nombreCorto: 'Las Rozas',
    provincia: 'Madrid',
    cp: '28230',
    metaTitle: 'Asesores de Seguros en Las Rozas de Madrid · Consulta Gratis',
    metaDescription: 'Asesores de seguros en Las Rozas de Madrid. +10 años de experiencia en salud, vida, mascotas y más. Asesoramiento personalizado sin compromiso.',
    h1: 'Asesores de Seguros en Las Rozas de Madrid',
    heroSubtitle: '+10 años · +1.200 familias protegidas · Consulta gratuita y sin compromiso',
    intro: 'Atendemos a familias, autónomos y empresas de Las Rozas de Madrid con asesoramiento independiente en seguros. Comparamos las mejores opciones del mercado para que tomes la decisión correcta sin complicaciones, sin letra pequeña y sin presión.',
    porQueElegirNos: 'Las Rozas de Madrid ha crecido hasta convertirse en uno de los municipios más dinámicos del noroeste metropolitano, con más de 100.000 habitantes y una alta concentración de empresas, autónomos y familias jóvenes. Este perfil mixto genera necesidades muy diversas en materia de seguros: desde autónomos que necesitan proteger sus ingresos con un seguro de accidentes o protección jurídica, hasta familias que buscan un seguro de salud completo con acceso rápido a especialistas.\n\nEl municipio cuenta con el Hospital Universitario HM Montepríncipe como referencia privada cercana, pero las esperas en la sanidad pública para especialistas pueden superar los 60 días. Un seguro de salud privado elimina esas esperas y da acceso a consultas en 24-48h en la mayoría de casos.\n\nLas Rozas también tiene uno de los mayores polígonos empresariales del noroeste de Madrid — Las Rozas Business Park — lo que hace que el seguro para pymes y autónomos sea una de las coberturas más demandadas en la zona. Somos independientes y atendemos tanto de forma presencial como por videollamada.',
    datosLocales: {
      poblacion: '100.000 habitantes',
      hospitalMasCercano: 'Hospital HM Montepríncipe (Boadilla, ~12 min) y Hospital Puerta de Hierro (Majadahonda, ~15 min)',
      perfilPrincipal: 'Familias jóvenes, autónomos, directivos y pymes del polígono empresarial',
      curiosidadLocal: 'Las Rozas alberga las oficinas centrales de varias multinacionales y es uno de los municipios con mayor crecimiento de autónomos del noroeste de Madrid',
    },
    perfilResidente: 'Familias jóvenes con hijos, autónomos, directivos de empresa y pymes. Perfil diverso. Alta demanda de salud, vida, accidentes y seguros de negocio.',
    faqsLocales: [
      {
        q: '¿Hay asesores de seguros independientes en Las Rozas de Madrid?',
        a: 'Sí. Desde Boadilla del Monte atendemos a clientes de Las Rozas de Madrid tanto de forma presencial como por videollamada o teléfono. Somos independientes: comparamos entre más de 20 compañías sin ataduras.',
      },
      {
        q: '¿Qué seguro necesita un autónomo en Las Rozas?',
        a: 'Los autónomos en Las Rozas suelen necesitar como mínimo un seguro de accidentes (que cubre incapacidad temporal), un seguro de responsabilidad civil profesional y, si tienen empleados, un seguro de vida colectivo. Te ayudamos a priorizar según tu actividad y presupuesto.',
      },
      {
        q: '¿Puedo cambiar de seguro de salud en Las Rozas sin perder coberturas?',
        a: 'Sí. Se puede cambiar de compañía respetando los períodos de carencia ya cumplidos. Te acompañamos para que la transición sea sin sorpresas y sin perder ninguna cobertura contratada.',
      },
      {
        q: '¿Cuánto cuesta un seguro de vida en Las Rozas?',
        a: 'Un seguro de vida en Las Rozas puede costar desde 15€/mes para un perfil joven sin deuda hipotecaria, hasta 80€/mes para coberturas más amplias con incapacidad incluida. El precio depende de la edad, el capital asegurado y si hay hipoteca. Te calculamos tu precio real sin compromiso.',
      },
      {
        q: '¿Qué seguro necesita una pyme en Las Rozas Business Park?',
        a: 'Una pyme en Las Rozas necesita como mínimo seguro multirriesgo de negocio (continente, contenido y RC), seguro de vida para socios clave y, dependiendo de la actividad, RC profesional. Te asesoramos sin coste para encontrar la cobertura adecuada a tu sector.',
      },
    ],
    segurosDestacados: ['salud', 'vida', 'accidentes', 'negocio'],
    zonasCercanas: ['boadilla-del-monte', 'majadahonda', 'madrid'],
    whatsappMessage: 'Hola, soy de Las Rozas y quiero una consulta gratuita sobre seguros.',
    keywords: ['asesores seguros las rozas', 'seguros las rozas de madrid', 'seguro salud las rozas', 'correduría seguros las rozas'],
  },
  {
    slug: 'majadahonda',
    nombre: 'Majadahonda',
    nombreCorto: 'Majadahonda',
    provincia: 'Madrid',
    cp: '28220',
    metaTitle: 'Asesores de Seguros en Majadahonda · Consulta Gratis',
    metaDescription: 'Asesores de seguros en Majadahonda con +10 años de experiencia. Salud, vida, mascotas, dental y más. Primera consulta gratuita y sin compromiso.',
    h1: 'Asesores de Seguros en Majadahonda',
    heroSubtitle: '+10 años · +1.200 familias protegidas · Consulta gratuita y sin compromiso',
    intro: 'Asesoramos a particulares, familias y autónomos de Majadahonda en la contratación de seguros de salud, vida, mascotas, dental, viaje y más. Somos independientes: comparamos entre más de 20 compañías sin ataduras a ninguna, para que siempre te llevemos la mejor opción real.',
    porQueElegirNos: 'Majadahonda es una ciudad con un perfil demográfico muy particular: alta concentración de profesionales sanitarios, directivos y familias de nivel medio-alto. El hecho de que el Hospital Universitario Puerta de Hierro tenga su sede en Majadahonda convierte a este municipio en uno de los más concienciados con la salud de toda la Comunidad de Madrid. Sin embargo, la sanidad pública para especialistas sigue teniendo listas de espera significativas incluso en esta zona.\n\nEl perfil profesional de Majadahonda hace que la demanda de seguros de salud completos, seguros de vida con capitalización y protección jurídica sea especialmente alta. Muchos autónomos y profesionales liberales de la zona necesitan además un seguro de responsabilidad civil profesional que proteja su actividad.\n\nAtendemos en Majadahonda de forma presencial y por videollamada. Nuestra sede está en Boadilla del Monte, a menos de 10 minutos, por lo que la atención presencial es completamente accesible para cualquier residente.',
    datosLocales: {
      poblacion: '75.000 habitantes',
      hospitalMasCercano: 'Hospital Universitario Puerta de Hierro (en el propio municipio)',
      perfilPrincipal: 'Profesionales sanitarios, directivos, familias de nivel medio-alto y autónomos liberales',
      curiosidadLocal: 'Majadahonda alberga el Hospital Universitario Puerta de Hierro, uno de los más grandes y especializados de la Comunidad de Madrid, lo que convierte al municipio en referencia sanitaria del noroeste',
    },
    perfilResidente: 'Profesionales liberales, sanitarios, directivos y familias de nivel adquisitivo medio-alto. Alta demanda de salud completa, vida y protección jurídica.',
    faqsLocales: [
      {
        q: '¿Merece la pena un seguro de salud privado en Majadahonda teniendo el Puerta de Hierro?',
        a: 'Sí. El Hospital Puerta de Hierro es público y sujeto a las listas de espera de la Comunidad de Madrid, que pueden superar los 60 días para especialistas. Un seguro privado da acceso a consultas en 24-48h, pruebas diagnósticas rápidas y hospitalización sin esperas en centros privados de primer nivel.',
      },
      {
        q: '¿Qué seguro necesita un profesional liberal en Majadahonda?',
        a: 'Los profesionales liberales en Majadahonda (médicos, abogados, consultores) suelen necesitar RC profesional, seguro de salud, accidentes e incapacidad. También es habitual el seguro de vida si hay hipoteca o cargas familiares. Te asesoramos para cubrir exactamente lo que necesitas sin pagar de más.',
      },
      {
        q: '¿Puedo contratar un seguro dental para toda la familia en Majadahonda?',
        a: 'Sí. Tenemos opciones de seguro dental familiar desde 8€/mes por persona, con acceso a clínicas dentales en Majadahonda y alrededores. Cubrimos revisiones, limpiezas, empastes y ortodoncia según la modalidad elegida.',
      },
      {
        q: '¿Hay alguna correduría de seguros con sede en Majadahonda?',
        a: 'Atendemos a clientes de Majadahonda desde nuestra sede en Boadilla del Monte, a menos de 10 minutos. También ofrecemos atención completa por videollamada o teléfono. Somos independientes y comparamos entre más de 20 compañías.',
      },
      {
        q: '¿Quanto cuesta un seguro de mascotas en Majadahonda?',
        a: 'Un seguro de responsabilidad civil para perro en Majadahonda puede costar desde 5€/mes. Las opciones con cobertura veterinaria incluida oscilan entre 20€ y 60€/mes según la raza, edad y coberturas. La RC es obligatoria por ley desde 2023 para todos los propietarios de perros.',
      },
    ],
    segurosDestacados: ['salud', 'vida', 'dental', 'proteccion-juridica'],
    zonasCercanas: ['boadilla-del-monte', 'las-rozas', 'pozuelo-de-alarcon'],
    whatsappMessage: 'Hola, soy de Majadahonda y quiero una consulta gratuita sobre seguros.',
    keywords: ['asesores seguros majadahonda', 'seguros majadahonda madrid', 'seguro salud majadahonda', 'correduría seguros majadahonda'],
  },
  {
    slug: 'pozuelo-de-alarcon',
    nombre: 'Pozuelo de Alarcón',
    nombreCorto: 'Pozuelo',
    provincia: 'Madrid',
    cp: '28223',
    metaTitle: 'Asesores de Seguros en Pozuelo de Alarcón · Consulta Gratis',
    metaDescription: 'Asesores de seguros en Pozuelo de Alarcón. Salud, vida, mascotas, dental y más. +10 años de experiencia. Consulta gratuita y sin compromiso.',
    h1: 'Asesores de Seguros en Pozuelo de Alarcón',
    heroSubtitle: '+10 años · +1.200 familias protegidas · Consulta gratuita y sin compromiso',
    intro: 'Ayudamos a familias y profesionales de Pozuelo de Alarcón a elegir seguros con criterio. Analizamos tu situación real, comparamos entre más de 20 compañías y te recomendamos la opción más adecuada sin presión ni letra pequeña.',
    porQueElegirNos: 'Pozuelo de Alarcón es, junto a Boadilla del Monte, uno de los municipios con mayor renta per cápita de España. Ese perfil se traduce en unas necesidades de protección más amplias: familias con hipotecas de capital elevado que necesitan seguros de vida bien dimensionados, ejecutivos con necesidad de salud premium con libre elección y reembolso, y autónomos con facturaciones altas que deben proteger su actividad y sus ingresos.\n\nEl perfil de residente en Pozuelo también incluye muchas familias con varias mascotas, coches de alta gama y bienes que justifican coberturas más completas. No se trata de pagar más por lo mismo — se trata de pagar lo justo por una cobertura que realmente responda cuando se necesita.\n\nSomos asesores independientes: no trabajamos para ninguna compañía. Comparamos el mercado completo y te explicamos cada opción sin tecnicismos, para que decidas con información real. Atendemos en Pozuelo por videollamada o presencialmente desde nuestra sede en Boadilla del Monte, a menos de 15 minutos.',
    datosLocales: {
      poblacion: '90.000 habitantes',
      hospitalMasCercano: 'Hospital Universitario Puerta de Hierro (Majadahonda, ~12 min) y Clínica Ruber Internacional (Madrid, ~20 min)',
      perfilPrincipal: 'Ejecutivos, profesionales de alto nivel, familias de renta alta y autónomos con facturación elevada',
      curiosidadLocal: 'Pozuelo de Alarcón tiene la renta per cápita más alta de España junto a Boadilla del Monte, lo que la convierte en una de las zonas con mayor demanda de seguros de salud premium y coberturas amplias',
    },
    perfilResidente: 'Ejecutivos, directivos, profesionales liberales y familias de alto poder adquisitivo. Alta demanda de salud premium, vida, reembolso y protección jurídica.',
    faqsLocales: [
      {
        q: '¿Qué seguro de salud con reembolso es mejor en Pozuelo de Alarcón?',
        a: 'Los seguros de salud con reembolso permiten acudir a cualquier médico del mundo y recuperar parte del coste. Son especialmente valorados en Pozuelo por perfiles que viajan frecuentemente o quieren total libertad de elección. Te comparamos las mejores opciones del mercado con y sin reembolso para que elijas con criterio real.',
      },
      {
        q: '¿Cómo dimensionar bien un seguro de vida en Pozuelo de Alarcón?',
        a: 'Con hipotecas de capital elevado y un nivel de vida que mantener, en Pozuelo es habitual necesitar capitales asegurados de 300.000€ o más. La regla general es cubrir entre 3 y 5 veces los ingresos anuales o el capital pendiente de la hipoteca. Te calculamos la cobertura exacta sin compromiso.',
      },
      {
        q: '¿Hay asesores de seguros independientes cerca de Pozuelo de Alarcón?',
        a: 'Nuestra sede está en Boadilla del Monte, a menos de 15 minutos de Pozuelo. Atendemos también por videollamada o teléfono. Somos completamente independientes: comparamos entre más de 20 compañías sin preferencias.',
      },
      {
        q: '¿Qué seguro para autónomo se recomienda en Pozuelo?',
        a: 'Los autónomos en Pozuelo suelen necesitar RC profesional, seguro de salud, accidentes e incapacidad temporal. Si tienen empleados, también convenio colectivo y vida colectivo. Te asesoramos para cubrir exactamente lo que necesitas según tu sector y facturación.',
      },
      {
        q: '¿Cuánto ahorro contratando el seguro de hipoteca fuera del banco en Pozuelo?',
        a: 'El ahorro medio al contratar el seguro de vida vinculado a hipoteca fuera del banco está entre el 30% y el 60% del precio bancario, manteniendo las mismas o mejores coberturas. Con hipotecas de capital alto como las habituales en Pozuelo, ese ahorro puede ser de miles de euros a lo largo del préstamo.',
      },
    ],
    segurosDestacados: ['salud', 'vida', 'proteccion-juridica', 'accidentes'],
    zonasCercanas: ['madrid', 'majadahonda', 'boadilla-del-monte'],
    whatsappMessage: 'Hola, soy de Pozuelo de Alarcón y quiero una consulta gratuita sobre seguros.',
    keywords: ['asesores seguros pozuelo alarcon', 'seguros pozuelo de alarcon', 'seguro salud pozuelo', 'correduría seguros pozuelo'],
  },
  {
    slug: 'madrid',
    nombre: 'Madrid',
    nombreCorto: 'Madrid',
    provincia: 'Madrid',
    cp: '28001',
    metaTitle: 'Asesores de Seguros en Madrid · +10 Años · Consulta Gratis',
    metaDescription: 'Asesores de seguros independientes en Madrid. +10 años, +1.200 familias protegidas. Salud, vida, mascotas, dental y más. Primera consulta gratuita.',
    h1: 'Asesores de Seguros en Madrid',
    heroSubtitle: '+10 años · +1.200 familias protegidas · Consulta gratuita y sin compromiso',
    intro: 'Somos asesores de seguros independientes con más de 10 años de experiencia ayudando a particulares, familias y autónomos en Madrid a elegir el seguro adecuado. Comparamos entre más de 20 compañías sin ataduras y te explicamos cada opción con claridad, sin letra pequeña y sin presión.',
    porQueElegirNos: 'Madrid tiene más de 3,3 millones de habitantes y una de las mayores demandas de seguros de salud privados de España. Las listas de espera en la sanidad pública madrileña para especialistas superan los 67 días de media, lo que hace que cada vez más familias opten por complementar o sustituir la sanidad pública con un seguro privado.\n\nEn Madrid la oferta es enorme — hay decenas de compañías aseguradoras y miles de productos distintos. El problema no es encontrar un seguro, sino encontrar el correcto para tu situación. Ahí es donde entramos nosotros: analizamos tu perfil, tus necesidades reales y tu presupuesto, y te presentamos las opciones que de verdad tienen sentido para ti.\n\nSomos mediadores independientes registrados en la DGS (Dirección General de Seguros), lo que significa que nuestra obligación legal es velar por tus intereses, no por los de la compañía. Atendemos en Madrid y en toda la Comunidad por videollamada, teléfono o WhatsApp. Sin coste, sin compromiso.',
    datosLocales: {
      poblacion: '3,3 millones de habitantes',
      hospitalMasCercano: 'Red hospitalaria completa — Hospital La Paz, Hospital 12 de Octubre, Hospital Gregorio Marañón entre los principales',
      perfilPrincipal: 'Perfil muy diverso: familias, autónomos, jóvenes profesionales, seniors, extranjeros con visado',
      curiosidadLocal: 'Las listas de espera en la sanidad pública de Madrid para especialistas superan los 67 días de media, lo que convierte a la ciudad en el mayor mercado de seguros de salud privados de España',
    },
    perfilResidente: 'Perfil muy diverso. Alta demanda en todos los ramos. Especialmente salud, vida, mascotas, viaje y protección jurídica.',
    faqsLocales: [
      {
        q: '¿Quanto cuesta un seguro de salud en Madrid?',
        a: 'El precio de un seguro de salud en Madrid varía entre 30€ y 150€/mes según la edad, las coberturas, la modalidad (con o sin copago, con o sin hospitalización) y la compañía. En nuestra consulta gratuita comparamos las mejores opciones del mercado para tu perfil exacto.',
      },
      {
        q: '¿Cuál es la mejor correduría de seguros independiente en Madrid?',
        a: 'La mejor correduría es la que te da asesoramiento real, compara entre compañías sin intereses y te acompaña antes y después de contratar. Valentín Protección Integral lleva más de 10 años haciéndolo para familias y autónomos de Madrid y el noroeste de la Comunidad.',
      },
      {
        q: '¿Es mejor contratar un seguro con un asesor o directamente con la compañía?',
        a: 'Con un asesor independiente siempre es mejor: accedes a las mismas coberturas y precios (o mejores), pero con alguien que compara el mercado por ti y defiende tus intereses si hay un siniestro. La compañía directa solo te vende su propio producto.',
      },
      {
        q: '¿Qué seguros son obligatorios en Madrid?',
        a: 'En Madrid son obligatorios el seguro de responsabilidad civil para vehículos, el seguro de responsabilidad civil para perros (desde 2023) y determinados seguros de RC profesional según el sector. El seguro de hogar no es obligatorio por ley, pero sí lo exigen la mayoría de hipotecas.',
      },
      {
        q: '¿Puedo contratar un seguro de salud para extranjeros en Madrid?',
        a: 'Sí. Disponemos de opciones de seguro de salud específicas para extranjeros residentes en Madrid, incluyendo modalidades válidas para visados de larga duración y permisos de residencia. Te asesoramos según tu situación migratoria y necesidades concretas.',
      },
    ],
    segurosDestacados: ['salud', 'vida', 'mascotas', 'viaje'],
    zonasCercanas: ['boadilla-del-monte', 'las-rozas', 'majadahonda', 'pozuelo-de-alarcon'],
    whatsappMessage: 'Hola, soy de Madrid y quiero una consulta gratuita sobre seguros.',
    keywords: ['asesores de seguros madrid', 'correduría seguros independiente madrid', 'seguro salud madrid', 'consulta seguros gratis madrid'],
  },
];

export const getZona = (slug: string) => zonas.find((z) => z.slug === slug);
