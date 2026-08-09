// ============================================================
// Contenido del sitio — Servicios Generales Nedian S.A.C.
// ============================================================

export const CONTACT = {
  phone: '+51 958 206 591',
  phoneHref: '+51958206591',
  whatsapp:
    'https://wa.me/51958206591?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20construcci%C3%B3n',
  email: 'nediansac@gmail.com',
  address: 'Jr Arica SN Huanca Sancos, Ayacucho, Perú',
  hours: 'Lunes a Viernes · 8:00 am – 6:00 pm',
}

export const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#equipo', label: 'Equipo' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contacto', label: 'Contacto' },
]

// Stats del bloque "Nosotros" (diseño de referencia: 3 columnas)
export const STATS = [
  { value: 12, suffix: '+', label: 'Años de experiencia' },
  { value: 80, suffix: '+', label: 'Proyectos ejecutados' },
  { value: 11, suffix: '', label: 'Provincias atendidas' },
]

// Foto grande del bloque Nosotros (foto real de obra, cartel NEDIAN visible)
export const ABOUT_IMG = 'assets/about.jpg'

// Fotos reales de la columna izquierda de servicios
export const SERVICES_PHOTOS = ['assets/svc-1.jpg', 'assets/svc-2.jpg', 'assets/svc-3.jpg']

// Certificaciones ISO del sistema integrado de gestión (badges del hero)
export const CERTS = [
  { iso: 'ISO 9001', label: 'Calidad' },
  { iso: 'ISO 45001', label: 'Seguridad y salud' },
  { iso: 'ISO 14001', label: 'Medio ambiente' },
  { iso: 'ISO 37001', label: 'Antisoborno' },
]

export const HERO_AVATARS = [
  { initials: 'NP' },
  { initials: 'AH' },
  { initials: 'EH' },
  { initials: 'DH' },
]

export const REVIEWS = [
  { score: '4.9/5', count: '(25+ reseñas)', stars: 5, platform: 'Google' },
  { score: '4.8/5', count: '(40+ reseñas)', stars: 5, platform: 'Facebook' },
]

export const SERVICES = [
  {
    tag: '01',
    title: 'Construcción de edificaciones',
    text: 'Viviendas, centros educativos, locales institucionales y obras de albañilería con los más altos estándares de calidad y seguridad.',
    cta: 'Explora nuestros diseños de vivienda',
    icon: 'building',
  },
  {
    tag: '02',
    title: 'Infraestructura vial',
    text: 'Carreteras, puentes y caminos vecinales que conectan a las comunidades de la sierra y dinamizan la economía local.',
    cta: 'Ver portafolio de obras viales',
    icon: 'road',
  },
  {
    tag: '03',
    title: 'Obras hidráulicas y saneamiento',
    text: 'Canales de riego, reservorios, redes de agua potable y alcantarillado para llevar servicios básicos a las comunidades.',
    cta: 'Ver proyectos de saneamiento',
    icon: 'droplet',
  },
  {
    tag: '04',
    title: 'Movimiento de tierras',
    text: 'Excavaciones, nivelaciones, rellenos y corte de taludes con maquinaria pesada operada por personal experto.',
    cta: 'Conoce cómo trabajamos',
    icon: 'truck',
  },
  {
    tag: '05',
    title: 'Remodelación y mantenimiento',
    text: 'Mejoramiento, reparación y mantenimiento de infraestructura pública y privada, con acabados de calidad.',
    cta: 'Solicita un presupuesto',
    icon: 'wrench',
  },
  {
    tag: '06',
    title: 'Consultoría y supervisión',
    text: 'Expedientes técnicos, gestión de proyectos y supervisión de obra con ingenieros colegiados y habilitados.',
    cta: 'Agenda una inspección',
    icon: 'clipboard',
  },
]

export const TEAM = [
  {
    name: 'Ing. Nesias Pagan',
    role: 'Gerente General',
    bio: 'Ingeniero civil colegiado con más de 15 años liderando obras públicas y privadas en la región.',
    initials: 'NP',
  },
  {
    name: 'Eldelberto Huarcaya',
    role: 'Ingeniero Residente',
    bio: 'Responsable de la ejecución técnica de proyectos y del control de calidad en cada etapa de obra.',
    initials: 'EH',
  },
  {
    name: 'Angel Huarcaya',
    role: 'Maestro de Obra',
    bio: 'Obrero calificado con experiencia en construcción en altura, adobe reforzado y albañilería.',
    initials: 'AH',
  }
]

export const OFFICE_INFO = [
  {
    icon: 'pin',
    title: 'Oficina',
    lines: ['Jr. Arica SN', 'Ayacucho – Huanca Sancos, Perú'],
  },
  {
    icon: 'phone',
    title: 'Teléfono / WhatsApp',
    lines: ['+51 966 123 456', 'Respondemos el mismo día'],
  },
  {
    icon: 'mail',
    title: 'Correo',
    lines: ['nediansac@gmail.com'],
  },
  {
    icon: 'clock',
    title: 'Horario de atención',
    lines: ['Lunes a Sábado', '8:00 am – 6:00 pm'],
  },
]

export const TESTIMONIALS = [
  {
    quote:
      'Ejecutaron el mejoramiento de nuestro camino vecinal en tiempo récord y con un trabajo impecable. Cumplieron todo lo prometido, desde el expediente hasta la recepción de obra.',
    name: 'Ing. Marco Pérez',
    role: 'Responsable de Infraestructura – Municipalidad de Huanta',
    initials: 'MP',
  },
  {
    quote:
      'Trabajar con Nedian fue una experiencia excelente. Son una empresa seria, con maquinaria propia y un equipo que conoce la sierra como nadie. Nuestro reservorio quedó perfecto.',
    name: 'Rosa Cárdenas',
    role: 'Alcaldesa distrital – Lucanas',
    initials: 'RC',
  },
  {
    quote:
      'La nueva infraestructura de nuestra institución educativa es un orgullo para todo el distrito. Entrega puntual, acabados de calidad y muy buen trato con la comunidad.',
    name: 'Prof. Jorge Gutiérrez',
    role: 'Director de I.E. – Vilcas Huamán',
    initials: 'JG',
  },
]

export const FAQS = [
  {
    q: '¿Qué tipos de proyectos ejecutan?',
    a: 'Trabajamos obras públicas y privadas: edificaciones, infraestructura vial, obras hidráulicas y saneamiento, movimiento de tierras, remodelación y consultoría, en toda la sierra de Ayacucho.',
  },
  {
    q: '¿Cómo manejan las condiciones climáticas de altura durante la obra?',
    a: 'Programamos los cronogramas considerando la estación de lluvias, usamos materiales adaptados a la geografía andina y protegemos los frentes de trabajo para no detener la obra en temporada de lluvias.',
  },
  {
    q: '¿Con qué garantías y certificaciones cuentan?',
    a: 'Contamos con RUC y SUNAT al día, registro SENCICO, seguro SCTR vigente y otorgamos garantía de obra escrita. Nuestro equipo técnico está conformado por ingenieros colegiados y habilitados.',
  },
  {
    q: '¿Cuánto tiempo toma construir mi proyecto?',
    a: 'El plazo depende del tipo y tamaño de obra. En la consultoría inicial evaluamos el terreno y te entregamos un cronograma detallado y realista, ajustado a los plazos de la entidad o del cliente privado.',
  },
  {
    q: '¿Atienden proyectos fuera de Ayacucho?',
    a: 'Sí. Hemos ejecutado obras en 11 provincias de la región y evaluamos proyectos en otras regiones del país. Escríbenos y coordinamos una visita técnica sin compromiso.',
  },
  {
    q: '¿Cómo solicito una cotización gratuita?',
    a: 'Contáctanos por WhatsApp, teléfono o el formulario del sitio. Un especialista se comunicará contigo el mismo día, visitaremos el terreno si es necesario y recibirás tu presupuesto sin costo ni compromiso.',
  },
]

export const TRUST_ITEMS = [
  { icon: 'file', label: 'RUC y SUNAT al día' },
  { icon: 'award', label: 'Registro SENCICO' },
  { icon: 'shield', label: 'Seguro SCTR vigente' },
  { icon: 'check', label: 'Garantía de obra escrita' },
]
