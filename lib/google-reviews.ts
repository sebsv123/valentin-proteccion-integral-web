export type GoogleReview = {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url?: string;
};

export const googleReviews: GoogleReview[] = [
  {
    author_name: "Olivia O'Donell",
    rating: 5,
    text: 'La mejor atención en todo momento! Siempre agradecidos!',
    relative_time_description: 'Hace 1 mes',
    profile_photo_url: 'https://lh3.googleusercontent.com/a/ACg8ocL41jahZMOkRxSI-DULFyuecOA4iLVHURDwon937SZPeYvCcek=s128-c0x00000000-cc-rp-mo',
  },
  {
    author_name: 'Miguel Veloso',
    rating: 5,
    text: 'Rosa es una persona realmente preocupada por conseguir las mejores opciones para sus clientes.\n\nEs una tranquilidad contar con alguien que resuelve cuando uno lo necesita!',
    relative_time_description: 'Hace 1 mes',
    profile_photo_url: 'https://lh3.googleusercontent.com/a-/ALV-UjUQarOEFiMzU6rUORKEJIkGHRe8StoYwRuoKksRwMUtUteZl13fiA=s128-c0x00000000-cc-rp-mo-ba3',
  },
  {
    author_name: 'The League Store',
    rating: 5,
    text: '',
    relative_time_description: 'Hace 1 mes',
    profile_photo_url: 'https://lh3.googleusercontent.com/a-/ALV-UjV38njs7zuCn_qGPCLjkJrHs8F3RtAdPMKD1J6u0xiwvB7WiulR=s128-c0x00000000-cc-rp-mo',
  },
  {
    author_name: 'Juan Jurado',
    rating: 5,
    text: 'Decidí contactarles hace una semana para que me orientasen ya que el banco me la tenía liada con seguros que no necesitaba. Trato amable y transparente, se nota que quieren ayudar a las perso as ante tanta desinformación. Mi familia y yo estamos tranquilos teniendo nuestro seguro de salud y vida en sus manos, muchas gracias!! 🙏🏻',
    relative_time_description: 'Hace 1 mes',
    profile_photo_url: 'https://lh3.googleusercontent.com/a/ACg8ocLO3Uep2fkk-xYj89tI7_Ju77UgDqjmpAymvVe12GkHXv24fQ=s128-c0x00000000-cc-rp-mo',
  },
  {
    author_name: 'Jacqueline Cababie',
    rating: 5,
    text: 'Rosa ha mostrado ser muy diligente y siempre está pendiente de sus asegurados. Está disponible ante cualquier inquietud y abierta a sugerencias. Se maneja de manera muy profesional. Si buscas a alguien con esas características pregunta por R O S A',
    relative_time_description: 'Hace 1 mes',
    profile_photo_url: 'https://lh3.googleusercontent.com/a-/ALV-UjX801_-HSrp_EMpWLtvUYpnihzDPPOa9T0h2RlG0ELzMp0n6xmVRQ=s128-c0x00000000-cc-rp-mo-ba3',
  },
];

export const googleReviewsSummary = {
  rating: 5,
  user_ratings_total: 62,
  allReviewsUrl: 'https://search.google.com/local/reviews?placeid=ChIJM_JBwmqbQQ0R-9vVnwTsuRA',
};
