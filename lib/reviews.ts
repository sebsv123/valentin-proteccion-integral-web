export type ReviewItem = {
  name: string;
  avatar: string;   // iniciales del nombre
  date: string;     // texto tal como aparece en Google
  text: string;
  rating: 5;
};

export const GOOGLE_REVIEWS: ReviewItem[] = [
  {
    name: "Salvador Bass",
    avatar: "SB",
    date: "hace una hora",
    text: "No es un agente - es una amiga aye sientes en familia y estar tranquilo por su experiencia y te da lo que necesitas para estar cubiertos y Además está a la disposición cada ves que uno la llama para cualquier cosilla Gracias Doña Rosa por si excelente atención .",
    rating: 5
  },
  {
    name: "Sebastian Sifontes",
    avatar: "SS",
    date: "hace 15 horas",
    text: "Excelente servicio. Estoy tranquilo con Rosa como mi agente, siempre está cuando más la necesito con mi seguro de salud!!",
    rating: 5
  },
  {
    name: "Ivan Benitez3",
    avatar: "IB",
    date: "hace una hora",
    text: "Excelente gestión profesional. Rosa Valentín marca la diferencia en el sector de seguros al priorizar la rapidez y la atención directa. Su capacidad para entender las necesidades familiares y ofrecer soluciones de protección desde el primer día es excepcional.",
    rating: 5
  },
  {
    name: "Miriam Narvaez",
    avatar: "MN",
    date: "hace 2 horas",
    text: "Excelente Profesional, muy competente, amable.",
    rating: 5
  },
  {
    name: "patrizia di rosa",
    avatar: "PR",
    date: "hace 3 horas",
    text: "Rosa es muy profesional...siempre cercana y atenta ante cualquier necesidad, consulta o duda que se tenga en todo lo que concierne a la póliza contratada. Recomendada al 💯",
    rating: 5
  },
  {
    name: "Miguel Angel Valentin Gonzales",
    avatar: "MV",
    date: "hace 3 horas",
    text: "Solicite informacion y me despejo todas las dudas que tenia sobre la poliza, muy profesional.",
    rating: 5
  },
  {
    name: "Yenifer",
    avatar: "Y",
    date: "hace 4 horas",
    text: "Rosa es una profesional, responsable y dedicada e inspira mucha confianza. Ha sido una experiencia muy satisfactoria y la recomiendo, Mucho éxito!",
    rating: 5
  },
  {
    name: "joaquin gomes",
    avatar: "JG",
    date: "hace 4 horas",
    text: "Confiable y siempre resolviendo mis dudas y gestiones en mis pólizas de seguros contratadas. Los mejores Precios en pólizas. Recomendable 100%. Mil gracias 👏🏻👏🏻👏🏻👏🏻",
    rating: 5
  },
  {
    name: "Jesus Navarro",
    avatar: "JN",
    date: "hace 4 horas",
    text: "Excelente servicio! pude contratar el seguro de manera rápida y a mejor precio. Muchas gracias!",
    rating: 5
  },
  {
    name: "Masia Group",
    avatar: "MG",
    date: "hace 4 horas",
    text: "Excelente servicio, muchas gracias",
    rating: 5
  },
  {
    name: "JHON EDISON",
    avatar: "JE",
    date: "hace 5 horas",
    text: "Realmente a sido una experiencia muy satisfecha y a gusto. Éxito......",
    rating: 5
  },
  {
    name: "Alfonso Gonzalez",
    avatar: "AG",
    date: "hace 5 horas",
    text: "Rosa Valentín, Persona muy competente , dedicada, responsable en su entorno laboral. Realmente a sido una experiencia muy satisfecha y a gusto. Éxito......",
    rating: 5
  },
  {
    name: "Laura Hernandez",
    avatar: "LH",
    date: "hace 5 horas",
    text: "Muy confiable, buenos resultados",
    rating: 5
  },
  {
    name: "ALVARO VALENTIN",
    avatar: "AV",
    date: "hace 5 horas",
    text: "Excelente Atención recomendada al 100%",
    rating: 5
  },
  {
    name: "Cristo Guadarrama Pimienta",
    avatar: "CP",
    date: "hace 5 horas",
    text: "Excelente servicio. Los trámites son sencillos, no hay complicaciones y el trato al cliente es muy profesional",
    rating: 5
  },
  {
    name: "Juan Luis Lora Licea",
    avatar: "JL",
    date: "hace 5 horas",
    text: "Una excelente profesional siempre dispuesta a buscar la mejor opción, el trato con el cliente es espectacular la recomiendo al 100%",
    rating: 5
  },
  {
    name: "La Tafeña Restaurante",
    avatar: "LT",
    date: "hace 5 horas",
    text: "Desde el primer momento Rosa siempre se implicó en todo momento, el trato es cercano y está dispuesta en todo momento a resolver tus dudas y a asesorarte en lo que necesites en lo que a seguros se refiere.",
    rating: 5
  },
  {
    name: "Alfonso Linares",
    avatar: "AL",
    date: "hace 5 horas",
    text: "Muy buena asesora, recomiendo al 100%.",
    rating: 5
  },
  {
    name: "Roxana Martínez Valentin",
    avatar: "RM",
    date: "hace 15 horas",
    text: "La atención de Rosa es de otro mundo!! Desde el 2016 es mi agente exclusiva de seguros. Las 24 horas del día siempre atiende cualquier duda o situación que se me presente referente a mi póliza.",
    rating: 5
  }
];

export const REVIEWS_CONFIG = {
  totalCount: 23,
  rating: 5.0,
  profileUrl: "https://search.google.com/local/reviews?placeid=ChIJM_JBwmqbQQ0R-9vVnwTsuRA",
  writeReviewUrl: "https://search.google.com/local/writereview?placeid=ChIJM_JBwmqbQQ0R-9vVnwTsuRA",
  mapsUrl: "https://maps.app.goo.gl/tu-enlace-directo" // Este se recomienda actualizarlo manualmente por el usuario si tiene un link corto preferido
};
