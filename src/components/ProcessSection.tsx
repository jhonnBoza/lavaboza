import { MessageCircle, Search, Wrench, CircleCheck } from 'lucide-react'
import { PROCESS_STEPS, WHATSAPP_LINK } from '../data/constants'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'message-circle': MessageCircle,
  search: Search,
  wrench: Wrench,
  'circle-check': CircleCheck,
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export default function ProcessSection() {
  return (
    <section id="proceso" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-50 text-navy-700 font-medium text-sm px-4 py-1.5 rounded-full mb-4">
            Simple y transparente
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-800 mb-3 sm:mb-4">
            Proceso de Atención
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base px-2">
            Trabajamos con un proceso claro, rápido y sin sorpresas. Sabemos que tu tiempo es valioso
            y actuamos con esa prioridad.
          </p>
        </div>

        <div className="relative">
          <div
            className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-0.5 bg-lime-500/70"
            aria-hidden
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6">
            {PROCESS_STEPS.map((step) => {
              const Icon = iconMap[step.icon]
              const isGreen = step.variant === 'green'

              return (
                <div key={step.step} className="flex flex-col items-center">
                  <div className="flex flex-col items-center mb-6">
                    <div
                      className={`relative z-10 w-14 h-14 rounded-full flex items-center justify-center shadow-md ${
                        isGreen ? 'bg-lime-500' : 'bg-navy-800'
                      }`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span
                      className={`mt-2 text-sm font-bold ${
                        isGreen ? 'text-lime-600' : 'text-navy-800'
                      }`}
                    >
                      {step.step}
                    </span>
                  </div>

                  <div className="w-full bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                    <span
                      className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${
                        step.tagVariant === 'green'
                          ? 'bg-lime-50 text-lime-700'
                          : 'bg-blue-50 text-navy-700'
                      }`}
                    >
                      {step.tag}
                    </span>
                    <h3 className="text-lg font-bold text-navy-800 mb-2">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="text-center mt-10 sm:mt-14 px-2">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-lime-500 hover:bg-lime-600 text-white font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full transition-colors shadow-lg shadow-lime-500/25 w-full sm:w-auto touch-manipulation"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Iniciar el proceso ahora
          </a>
        </div>
      </div>
    </section>
  )
}
