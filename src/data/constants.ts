export const VISIT_COST = 50
export const PHONE = '+51 942 341 214'
export const PHONE_LINK = '51942341214'
export const WHATSAPP_LINK = `https://wa.me/${PHONE_LINK}?text=Hola%2C%20necesito%20un%20servicio%20t%C3%A9cnico%20para%20mi%20electrodom%C3%A9stico.`
export const EMAIL = 'contacto@bozatech.pe'
export const COUNTRY = 'Perú'

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
  { icon: 'shield', value: '1 año', label: 'Garantía en reparaciones' },
  { icon: 'clock', value: '<24h', label: 'Tiempo de respuesta' },
  { icon: 'map', value: 'Todo', label: 'El Perú' },
]

export const SERVICES = [
  { title: 'Lavadoras', tagline: 'Automáticas y semiautomáticas', icon: 'washing-machine' },
  { title: 'Refrigeradoras', tagline: 'Enfriamiento y compresores', icon: 'refrigerator' },
  { title: 'Congeladoras', tagline: 'Verticales y horizontales', icon: 'snowflake' },
  { title: 'Microondas', tagline: 'Placa, magnetrón y puerta', icon: 'microwave' },
  { title: 'Licuadoras', tagline: 'Motor, aspas y base', icon: 'blender' },
  { title: 'Ollas Arroceras', tagline: 'Resistencia y panel digital', icon: 'cooking-pot' },
  { title: 'Ollas a Presión', tagline: 'Válvulas y sellos', icon: 'gauge' },
  { title: 'Jarras Hervidoras', tagline: 'Base y apagado automático', icon: 'coffee' },
  { title: 'Cocinas', tagline: 'Hornos y encimeras', icon: 'flame' },
  { title: 'Electrodomésticos', tagline: 'Diagnóstico y mantenimiento', icon: 'plug' },
]

export const WHY_US = [
  {
    title: 'Técnicos certificados',
    description: 'Profesionales con experiencia comprobada en reparación de electrodomésticos.',
    icon: 'badge-check',
  },
  {
    title: 'Garantía por escrito',
    description: 'Todas nuestras reparaciones incluyen garantía de 1 año por escrito.',
    icon: 'file-check',
  },
  {
    title: 'Diagnóstico inmediato',
    description: 'Evaluamos el problema en el momento y te damos un presupuesto claro.',
    icon: 'search',
  },
  {
    title: 'Repuestos originales',
    description: 'Utilizamos repuestos de calidad y originales para cada marca.',
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
      'Verificamos que el equipo funcione perfectamente. Te entregamos garantía por escrito y quedamos disponibles para cualquier seguimiento.',
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
    answer: 'Todas nuestras reparaciones incluyen garantía por escrito de 1 año. Si el mismo problema se repite dentro del periodo de garantía, lo solucionamos sin costo adicional.',
  },
  {
    question: '¿Trabajan los fines de semana?',
    answer: 'Sí, atendemos de lunes a sábado de 8:00 a 18:00 y domingos de 9:00 a 14:00 con cita previa. Para emergencias, contáctanos por WhatsApp.',
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
  'Electrodomésticos',
]
