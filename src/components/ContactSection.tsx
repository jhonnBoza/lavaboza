import { Phone, Mail, MapPin, Clock, MessageCircle, ExternalLink } from 'lucide-react'
import { PHONE, PHONE_LINK, EMAIL, WHATSAPP_LINK, COVERAGE_AREAS, COUNTRY } from '../data/constants'

const MAPS_LINK = 'https://www.google.com/maps/search/?api=1&query=Peru'

export default function ContactSection() {
  return (
    <section id="contacto" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block text-lime-600 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3">
            Contacto
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-800 mb-3 sm:mb-4 px-2">
            ¿Necesitas reparar un electrodoméstico?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base px-2">
            Contáctanos hoy y un técnico certificado visitará tu domicilio en menos de 24 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {[
            { icon: Phone, label: 'Teléfono', value: PHONE, href: `tel:+${PHONE_LINK}` },
            { icon: MessageCircle, label: 'WhatsApp', value: 'Escríbenos ahora', href: WHATSAPP_LINK },
            { icon: Mail, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}`, breakAll: true },
            { icon: Clock, label: 'Horario', value: 'Lun-Sáb 8:00-18:00', href: undefined },
          ].map((item) => (
            <div key={item.label} className="bg-gray-50 rounded-2xl p-5 sm:p-6 border border-gray-100 text-center">
              <div className="w-11 h-11 sm:w-12 sm:h-12 bg-lime-500/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-lime-600" />
              </div>
              <p className="text-gray-500 text-sm mb-1">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className={`font-semibold text-navy-800 hover:text-lime-600 transition-colors text-sm touch-manipulation ${item.breakAll ? 'break-all' : ''}`}
                >
                  {item.value}
                </a>
              ) : (
                <p className="font-semibold text-navy-800 text-sm">{item.value}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mb-10 sm:mb-12 rounded-2xl sm:rounded-3xl overflow-hidden border border-navy-700/30 shadow-xl shadow-navy-900/10">
          <div className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 px-4 sm:px-8 py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-lime-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-lime-400" />
              </div>
              <div className="min-w-0">
                <h3 className="text-base sm:text-lg font-bold text-white leading-tight">{COUNTRY} — Cobertura nacional</h3>
                <p className="text-blue-200/70 text-xs sm:text-sm">Servicio a domicilio en todo el país</p>
              </div>
            </div>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-lime-400 hover:text-lime-300 transition-colors touch-manipulation flex-shrink-0"
            >
              Abrir en Google Maps
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="relative bg-navy-900">
            <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none z-10" />
            <iframe
              title="Cobertura Bozatech en Perú"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-81.35%2C-18.35%2C-68.65%2C-0.03&layer=mapnik&marker=-12.0464%2C-77.0428"
              className="relative z-0 w-full h-[240px] sm:h-[360px] lg:h-[460px] border-0 grayscale-[20%] contrast-[1.05]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="bg-gray-50 px-4 sm:px-8 py-5 sm:py-6 border-t border-gray-100">
            <p className="text-sm font-semibold text-navy-800 mb-3 sm:mb-4">Principales ciudades atendidas</p>
            <div className="grid grid-cols-1 min-[400px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3">
              {COVERAGE_AREAS.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2.5 bg-white rounded-xl px-3 sm:px-3.5 py-2.5 border border-gray-100 shadow-sm"
                >
                  <span className="w-2 h-2 bg-lime-500 rounded-full flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-700 font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-lime-500 to-lime-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-5 sm:gap-6 text-center lg:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-2">
              ¿Listo para reparar tu electrodoméstico?
            </h3>
            <p className="text-lime-100 text-sm sm:text-base">
              Escríbenos por WhatsApp y te respondemos en minutos. Sin compromiso.
            </p>
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-white text-lime-600 font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full hover:scale-105 transition-transform shadow-lg flex-shrink-0 w-full sm:w-auto touch-manipulation"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
