export const VISIT_COST = 50
export const PHONE = '+51 942 341 214'
export const PHONE_LINK = '51942341214'
export const WHATSAPP_LINK = `https://wa.me/${PHONE_LINK}?text=Hola%2C%20necesito%20un%20servicio%20t%C3%A9cnico%20para%20mi%20electrodom%C3%A9stico.`
export const EMAIL = 'bozagerardo906@gmail.com'
export const COUNTRY = 'Perú'
export const BUSINESS_HOURS = 'Atención las 24 horas'
export const WARRANTY_PERIOD = '90 días'

/** Centro geográfico de Perú — cobertura nacional en mapa */
export const MAP_CENTER = { lat: -9.19, lng: -75.015 }
export const MAP_ZOOM = 5
export const MAPS_LINK = `https://www.google.com/maps/@${MAP_CENTER.lat},${MAP_CENTER.lng},${MAP_ZOOM}z`
export const MAP_EMBED_SRC = `https://maps.google.com/maps?q=${MAP_CENTER.lat},${MAP_CENTER.lng}&hl=es&z=${MAP_ZOOM}&output=embed`

export const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: '¿Por qué nosotros?', href: '#por-que' },
  { label: 'Marcas', href: '#marcas' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
]

export const HERO_STATS = [
  { icon: 'star', value: '4.9★', label: 'Calificación promedio' },
  { icon: 'shield', value: WARRANTY_PERIOD, label: 'Garantía en reparaciones' },
  { icon: 'clock', value: '24h', label: 'Atención continua' },
  { icon: 'map', value: 'Todo', label: 'El Perú' },
]

export const SERVICES = [
  { title: 'Lavadoras', tagline: 'Automáticas y semiautomáticas', image: '/services/lavadoras.jpg' },
  { title: 'Refrigeradoras', tagline: 'Enfriamiento y compresores', image: '/services/refrigeradoras.jpg' },
  { title: 'Congeladoras', tagline: 'Verticales y horizontales', image: '/services/congeladoras.jpg' },
  { title: 'Microondas', tagline: 'Placa, magnetrón y puerta', image: '/services/microondas.jpg' },
  { title: 'Licuadoras', tagline: 'Motor, aspas y base', image: '/services/licuadoras.jpg' },
  { title: 'Ollas Arroceras', tagline: 'Resistencia y panel digital', image: '/services/ollas-arroceras.jpg' },
  { title: 'Ollas a Presión', tagline: 'Válvulas y sellos', image: '/services/ollas-presion.jpg' },
  { title: 'Jarras Hervidoras', tagline: 'Base y apagado automático', image: '/services/jarras-hervidoras.jpg' },
  { title: 'Cocinas', tagline: 'Hornos y encimeras', image: '/services/cocinas.jpg' },
  { title: 'Venta de Repuestos', tagline: 'Todo tipo de repuestos', image: '/services/repuestos.jpg' },
  { title: 'Electrodomésticos', tagline: 'Diagnóstico y mantenimiento', image: '/services/electrodomesticos.jpg' },
]

export const WHY_US = [
  {
    title: 'Técnicos certificados',
    description: 'Profesionales con experiencia comprobada en reparación de electrodomésticos.',
    icon: 'badge-check',
  },
  {
    title: 'Garantía por escrito',
    description: `Reparaciones con garantía de ${WARRANTY_PERIOD} por la falla reparada. No cubre daños por mal uso del equipo.`,
    icon: 'file-check',
  },
  {
    title: 'Diagnóstico inmediato',
    description: 'Evaluamos el problema en el momento y te damos un presupuesto claro.',
    icon: 'search',
  },
  {
    title: 'Repuestos originales',
    description: 'Venta de todo tipo de repuestos e instalación con calidad garantizada para cada marca.',
    icon: 'package',
  },
  {
    title: 'Atención a domicilio',
    description: 'Vamos hasta tu hogar en todo el Perú sin costo de traslado en zona urbana.',
    icon: 'home',
  },
  {
    title: 'Precios transparentes',
    description: 'Sin sorpresas. Conoces el costo antes de autorizar la reparación.',
    icon: 'receipt',
  },
]

export const STATS_BANNER = [
  { prefix: '+', end: 500, suffix: '', label: 'Clientes satisfechos' },
  { prefix: '', end: 10, suffix: '+', label: 'Años de experiencia' },
  { prefix: '', end: 98, suffix: '%', label: 'Reparaciones exitosas' },
  { prefix: '', end: 24, suffix: 'h', label: 'Tiempo de respuesta' },
]

export const BRANDS = [
  {
    category: 'Lavadoras',
    brands: ['Samsung', 'LG', 'Whirlpool', 'Mabe', 'Indurama', 'GE'],
  },
  {
    category: 'Refrigeradoras',
    brands: ['Samsung', 'LG', 'Indurama', 'Mabe', 'Whirlpool', 'Hisense'],
  },
  {
    category: 'Microondas',
    brands: ['Samsung', 'LG', 'Panasonic', 'Whirlpool', 'Mabe', 'Daewoo'],
  },
  {
    category: 'Licuadoras',
    brands: ['Oster', 'Black+Decker', 'Hamilton Beach', 'Philips', 'KitchenAid', 'Braun'],
  },
  {
    category: 'Ollas Arroceras',
    brands: ['Oster', 'Black+Decker', 'Panasonic', 'Recco', 'Midea', 'Imaco'],
  },
  {
    category: 'Congeladoras',
    brands: ['Indurama', 'Mabe', 'Samsung', 'LG', 'Whirlpool', 'Hisense'],
  },
]

export const ALL_BRANDS = [
  'Samsung',
  'LG',
  'Whirlpool',
  'Mabe',
  'Indurama',
  'GE',
  'Hisense',
  'Panasonic',
  'Daewoo',
  'Oster',
  'Black+Decker',
  'Hamilton Beach',
  'Philips',
  'KitchenAid',
  'Braun',
  'Midea',
  'Imaco',
  'Recco',
]

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Contacto',
    tag: 'Respuesta inmediata',
    tagVariant: 'green' as const,
    variant: 'green' as const,
    description:
      'Escríbenos por WhatsApp o llámanos. Cuéntanos qué electrodoméstico tiene el problema y agendamos tu visita técnica.',
    icon: 'message-circle',
  },
  {
    step: '02',
    title: 'Diagnóstico',
    tag: 'Presupuesto sin compromiso',
    tagVariant: 'blue' as const,
    variant: 'navy' as const,
    description:
      'Un técnico certificado visita tu domicilio, inspecciona el equipo y te da un presupuesto claro antes de iniciar cualquier trabajo.',
    icon: 'search',
  },
  {
    step: '03',
    title: 'Reparación',
    tag: 'Reparación en tu hogar',
    tagVariant: 'green' as const,
    variant: 'green' as const,
    description:
      'Con tu aprobación, realizamos la reparación en el sitio usando repuestos de calidad. La mayoría de reparaciones se terminan el mismo día.',
    icon: 'wrench',
  },
  {
    step: '04',
    title: 'Entrega y Garantía',
    tag: 'Garantía incluida',
    tagVariant: 'blue' as const,
    variant: 'navy' as const,
    description:
      `Verificamos que el equipo funcione correctamente. Entregamos garantía por escrito de ${WARRANTY_PERIOD} por la falla reparada, sin cubrir mal uso.`,
    icon: 'circle-check',
  },
]

export const TESTIMONIALS = [
  {
    name: 'María González',
    location: 'Miraflores, Lima',
    rating: 5,
    text: 'Excelente servicio. Repararon mi lavadora Samsung en menos de 2 horas. El técnico fue muy profesional y me explicó todo el proceso.',
    date: 'Hace 2 semanas',
  },
  {
    name: 'Carlos Mendoza',
    location: 'San Isidro, Lima',
    rating: 5,
    text: 'Mi refrigeradora no enfriaba y pensé que tendría que comprar una nueva. Bozatech la reparó por una fracción del costo. Muy recomendados.',
    date: 'Hace 1 mes',
  },
  {
    name: 'Ana Rodríguez',
    location: 'Surco, Lima',
    rating: 5,
    text: 'Llegaron puntualmente, diagnosticaron el microondas al instante y lo dejaron funcionando perfecto. La garantía por escrito me da mucha confianza.',
    date: 'Hace 3 semanas',
  },
  {
    name: 'Luis Herrera',
    location: 'Trujillo',
    rating: 5,
    text: 'Tercera vez que uso Bozatech. Siempre puntuales, precios justos y reparaciones que duran. No cambio de servicio técnico.',
    date: 'Hace 1 semana',
  },
  {
    name: 'Patricia Vega',
    location: 'Arequipa',
    rating: 4,
    text: 'Repararon mi olla arrocera Oster que dejó de funcionar. El técnico trajo el repuesto y la dejó como nueva. Muy satisfecha con el servicio.',
    date: 'Hace 2 meses',
  },
  {
    name: 'Roberto Salinas',
    location: 'Cusco',
    rating: 5,
    text: 'Servicio rápido y eficiente. Mi congeladora volvió a funcionar el mismo día. El precio fue muy razonable comparado con otros técnicos.',
    date: 'Hace 3 semanas',
  },
]

export const FAQ_ITEMS = [
  {
    question: '¿Cuánto cuesta el servicio a domicilio?',
    answer: 'El diagnóstico a domicilio tiene un costo que se descuenta del total si autorizas la reparación. El precio final depende del electrodoméstico y la falla. Siempre te damos un presupuesto antes de iniciar.',
  },
  {
    question: '¿Qué garantía ofrecen en las reparaciones?',
    answer: `Las reparaciones incluyen garantía por escrito de ${WARRANTY_PERIOD} sobre la falla corregida y el repuesto instalado. No aplica si el equipo se daña por mal uso, golpes, sobrecarga o manipulación indebida.`,
  },
  {
    question: '¿Cuál es su horario de atención?',
    answer: 'Atendemos las 24 horas, los 7 días de la semana. Escríbenos por WhatsApp o llámanos en cualquier momento y coordinamos tu servicio.',
  },
  {
    question: '¿Venden repuestos para electrodomésticos?',
    answer: 'Sí, vendemos todo tipo de repuestos originales y compatibles para lavadoras, refrigeradoras, microondas, licuadoras y más. Consulta disponibilidad por WhatsApp indicando marca y modelo.',
  },
  {
    question: '¿Reparan todas las marcas de electrodomésticos?',
    answer: 'Sí, trabajamos con todas las marcas principales: Samsung, LG, Whirlpool, Mabe, Indurama, Oster, Panasonic y muchas más. Nuestros técnicos están capacitados para cada marca.',
  },
  {
    question: '¿Cuánto demora la visita técnica?',
    answer: 'Generalmente coordinamos la visita en menos de 24 horas. En casos urgentes, intentamos atenderte el mismo día según disponibilidad de técnicos en tu zona.',
  },
  {
    question: '¿Cobran por el diagnóstico?',
    answer: 'La visita técnica a domicilio tiene un costo de S/ 50, que incluye el diagnóstico. Este monto se descuenta del total si autorizas la reparación con nosotros.',
  },
  {
    question: '¿Qué zonas del Perú cubren?',
    answer: 'Atendemos en todo el Perú: Lima, Arequipa, Trujillo, Chiclayo, Piura, Cusco, Iquitos, Huancayo, Tacna, Cajamarca y más ciudades. Contáctanos por WhatsApp para confirmar disponibilidad en tu zona.',
  },
  {
    question: '¿Qué formas de pago aceptan?',
    answer: 'Aceptamos efectivo, transferencia bancaria y pagos con tarjeta de débito/crédito. El pago se realiza al finalizar la reparación, una vez que verifiques que todo funciona correctamente.',
  },
]

export const COVERAGE_AREAS = [
  'Lima Metropolitana',
  'Arequipa',
  'Trujillo',
  'Chiclayo',
  'Piura',
  'Cusco',
  'Iquitos',
  'Huancayo',
  'Tacna',
  'Cajamarca',
  'Ica',
  'Todo el Perú',
]

export const FOOTER_SERVICES = [
  'Lavadoras',
  'Refrigeradoras',
  'Congeladoras',
  'Microondas',
  'Licuadoras',
  'Ollas Arroceras',
  'Cocinas',
  'Venta de repuestos',
  'Electrodomésticos',
]
