import { ArrowRight } from 'lucide-react'
import { SERVICES, WHATSAPP_LINK } from '../data/constants'

export default function ServicesSection() {
  return (
    <section id="servicios" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block text-lime-600 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3">
            Nuestros Servicios
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-800 mb-3 sm:mb-4 px-2">
            Reparamos todo tipo de electrodomésticos
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base px-2">
            Servicio técnico, venta de repuestos y atención las 24 horas en todo el Perú.
          </p>
        </div>

        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {SERVICES.map((service) => (
            <a
              key={service.title}
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:border-lime-200 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden bg-gray-100">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              </div>

              <div className="flex flex-col flex-1 p-4 sm:p-5">
                <h3 className="text-base font-bold text-navy-800 mb-1">{service.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-4 line-clamp-1">{service.tagline}</p>
                <span className="mt-auto inline-flex items-center gap-1 text-lime-600 font-semibold text-sm group-hover:gap-2 transition-all">
                  Solicitar
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
