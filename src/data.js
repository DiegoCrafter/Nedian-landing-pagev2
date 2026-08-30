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
  { href: '#/obras', label: 'Obras' },
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

// Misión, visión y valores del bloque Nosotros
export const MVV = [
  {
    icon: 'clipboard',
    title: 'Misión',
    text: 'Ejecutar proyectos de arquitectura y obra civil, públicos y privados, satisfaciendo las necesidades de nuestros clientes antes, durante y después de la obra, con estándares de calidad y plazos cumplidos.',
  },
  {
    icon: 'award',
    title: 'Visión',
    text: 'Ser la empresa constructora líder de Ayacucho, reconocida por la calidad de sus obras, la transparencia de su gestión y su aporte al desarrollo de las comunidades.',
  },
  {
    icon: 'shield',
    title: 'Valores',
    text: 'Integridad, calidad, seguridad, compromiso con la comunidad y respeto por el medio ambiente guían cada decisión y cada obra que ejecutamos.',
  },
]

// Fotos reales de la columna izquierda de servicios
export const SERVICES_PHOTOS = ['assets/svc-1.jpg', 'assets/svc-2.jpg', 'assets/svc-3.jpg']

// Certificaciones ISO del sistema integrado de gestión (badges del hero)
export const CERTS = [
  {
    iso: 'ISO 9001',
    label: 'Calidad',
    img: 'assets/certs/iso-9001.svg',
    desc: 'Sistema de gestión de calidad que asegura procesos estandarizados y mejora continua en cada proyecto.',
  },
  {
    iso: 'ISO 45001',
    label: 'Seguridad y salud',
    img: 'assets/certs/iso-45001.svg',
    desc: 'Gestión de seguridad y salud ocupacional que protege a nuestro equipo en cada frente de obra.',
  },
  {
    iso: 'ISO 14001',
    label: 'Medio ambiente',
    img: 'assets/certs/iso-14001.svg',
    desc: 'Gestión ambiental responsable que minimiza el impacto de nuestras obras en la sierra.',
  },
  {
    iso: 'ISO 37001',
    label: 'Antisoborno',
    img: 'assets/certs/iso-37001.svg',
    desc: 'Sistema antisoborno que garantiza transparencia e integridad en todas nuestras contrataciones.',
  },
]

// Obras ejecutadas — vista "Obras" al estilo blog con artículo por obra
export const OBRAS = [
  {
    tag: '01',
    icon: 'building',
    tipo: 'Infraestructura educativa y cultural',
    title:
      'Mejoramiento de capacidades educativas y culturales en los anexos de Colcabamba y Asca',
    distrito: 'Sacsamarca',
    provincia: 'Huanca Sancos',
    img: 'assets/obras/o01-1.jpg',
    gallery: ['assets/obras/o01-1.jpg', 'assets/obras/o01-2.jpg', 'assets/obras/o01-3.jpg'],
    body: [
      'El proyecto tuvo como objetivo mejorar las condiciones de aprendizaje y vida cultural en los anexos de Colcabamba y Asca, en el distrito de Sacsamarca. Se intervinieron ambientes existentes y se construyeron espacios nuevos, adecuados al clima y a las costumbres de la zona.',
      'El equipo de Nedian S.A.C. trabajó junto a la comunidad desde la etapa de campo: levantamiento de información, replanteo y ejecución de las partidas de estructura, arquitectura e instalaciones. La mano de obra local fue priorizada, generando empleo directo durante toda la obra.',
      'Hoy los anexos cuentan con espacios dignos para la educación y la cultura, fortaleciendo la permanencia de niños y jóvenes en la zona y el arraigo de las familias altoandinas.',
    ],
  },
  {
    tag: '02',
    icon: 'pin',
    tipo: 'Espacios públicos',
    title: 'Creación de parque en la comunidad de San José de Huarcaya',
    distrito: 'Santiago de Lucanamarca',
    provincia: 'Huancasancos',
    img: 'assets/obras/o02-1.jpg',
    gallery: ['assets/obras/o02-1.jpg', 'assets/obras/o02-2.jpg', 'assets/obras/o02-3.jpg'],
    body: [
      'La comunidad de San José de Huarcaya, en Santiago de Lucanamarca, recibió un nuevo parque diseñado como punto de encuentro vecinal: áreas verdes, veredas, bancas e iluminación para el uso diario y las festividades locales.',
      'El proceso incluyó el mejoramiento del terreno, la instalación de mobiliario urbano y el sembrado de áreas verdes adaptadas a la altura. Todo el trabajo se ejecutó con personal de la propia zona, bajo supervisión de ingenieros colegiados.',
      'El parque se convirtió en el corazón social de la comunidad: un espacio seguro donde las familias comparten y los niños juegan cerca de casa.',
    ],
  },
  {
    tag: '03',
    icon: 'award',
    tipo: 'Losa deportiva multiusos',
    title:
      'Mejoramiento y acondicionamiento de la losa deportiva multiusos en la localidad de San Pedro de Palco',
    distrito: 'San Pedro de Palco',
    provincia: 'Lucanas',
    img: 'assets/obras/o03-1.jpg',
    gallery: ['assets/obras/o03-1.jpg', 'assets/obras/o03-2.jpg', 'assets/obras/o03-3.jpg'],
    body: [
      'En San Pedro de Palco se mejoró y acondicionó la losa deportiva multiusos de la localidad: nivelación de la superficie, pintura de demarcaciones y mantenimiento integral para el uso deportivo de niños, jóvenes y adultos.',
      'Los trabajos se realizaron minimizando la afectación al entorno y priorizando materiales de duración comprobada en la altura. La losa quedó lista para campeonatos locales, actividades escolares y eventos de la comunidad.',
      'Contar con una losa en condiciones es clave para la vida saludable y la integración de los pueblos de Lucanas.',
    ],
  },
  {
    tag: '04',
    icon: 'award',
    tipo: 'Losa deportiva sintética',
    title:
      'Mejoramiento y ampliación de la losa deportiva sintética multiusos en la localidad de Santiago de Lucanamarca',
    distrito: 'Santiago de Lucanamarca',
    provincia: 'Huancasancos',
    img: 'assets/obras/o04-1.jpg',
    gallery: ['assets/obras/o04-1.jpg', 'assets/obras/o04-2.jpg', 'assets/obras/o04-3.jpg'],
    body: [
      'La localidad de Santiago de Lucanamarca mejoró y amplió su losa deportiva sintética multiusos, una de las más utilizadas de la provincia. El proyecto consideró el mejoramiento del campo sintético y su ampliación para recibir más disciplinas deportivas.',
      'Se ejecutaron las partidas de movimiento de tierras, mejoramiento de la base, instalación del césped sintético, demarcación y cerco perimétrico, con supervisión constante de calidad en cada etapa.',
      'El resultado es un espacio deportivo moderno que beneficia a deportistas y a las instituciones educativas de la zona.',
    ],
  },
  {
    tag: '05',
    icon: 'star',
    tipo: 'Parque infantil',
    title:
      'Servicio de elaboración e instalación de juegos infantiles — creación de parque infantil en el centro poblado de Santa Rosa',
    distrito: 'Santa Rosa',
    provincia: 'La Mar',
    img: 'assets/obras/o05-1.jpg',
    gallery: ['assets/obras/o05-1.jpg', 'assets/obras/o05-2.jpg', 'assets/obras/o05-3.jpg'],
    body: [
      'En el centro poblado de Santa Rosa, provincia de La Mar, se elaboraron e instalaron juegos infantiles como parte de la creación de un parque para los más pequeños: resbaladeras, columpios, sube y baja y pisos de seguridad.',
      'Los juegos fueron fabricados con materiales resistentes y de bajo mantenimiento, y se instalaron sobre superficies amortiguadas que protegen a los niños en caso de caídas.',
      'Este parque infantil ofrece a las familias de Santa Rosa un espacio seguro y alegre para la recreación de los niños del pueblo.',
    ],
  },
  {
    tag: '06',
    icon: 'award',
    tipo: 'Infraestructura deportiva',
    title:
      'Mejoramiento del servicio de práctica deportiva y/o recreativa en el centro poblado de Piriato',
    distrito: 'Samugari',
    provincia: 'La Mar',
    img: 'assets/obras/o06-1.jpg',
    gallery: ['assets/obras/o06-1.jpg', 'assets/obras/o06-2.jpg', 'assets/obras/o06-3.jpg', 'assets/obras/o06-4.jpg'],
    body: [
      'En el centro poblado de Piriato, distrito de Samugari, se mejoró el servicio de práctica deportiva y recreativa de la comunidad. Las obras incluyeron el mejoramiento de la superficie de juego, graderías y áreas complementarias.',
      'La ejecución consideró la participación de los beneficiarios y el cuidado del entorno natural de la selva alta, siguiendo las normas de seguridad en obra de nuestra empresa.',
      'Piriato cuenta ahora con un espacio deportivo digno para el deporte, la recreación y las actividades de integración comunal.',
    ],
  },
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
    role: 'Supervisor general',
    bio: 'Responsable de la ejecución técnica de proyectos y del control de calidad en cada etapa de obra.',
    initials: 'EH',
  },
  {
    name: 'Angel Huarcaya',
    role: 'Jefe de maquinarias',
    bio: 'Obrero calificado con experiencia en construcción en altura, adobe reforzado y albañilería.',
    initials: 'AH',
  }
]

export const OFFICE_INFO = [
  {
    icon: 'pin',
    title: 'Oficina Huanca Sancos',
    lines: ['Jr. Arica SN', 'Ayacucho – Huanca Sancos, Perú'],
  },
  {
    icon: 'pin',
    title: 'Oficina Huamanga',
    lines: ['Jr. Huaraz, Carmen Alto', 'Ayacucho – Huamanga, Perú'],
  },
  {
    icon: 'phone',
    title: 'Teléfono / WhatsApp',
    lines: ['+51 958206591', 'Respondemos el mismo día'],
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
    a: 'Trabajamos obras públicas y privadas: edificaciones, infraestructura vial, obras hidráulicas y saneamiento, movimiento de tierras, remodelación y consultoría, en toda Ayacucho.',
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
