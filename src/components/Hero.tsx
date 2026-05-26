import { ArrowRight, Star, Shield, Clock, MapPin, Users } from 'lucide-react'
import { HERO_STATS, WHATSAPP_LINK, WARRANTY_PERIOD } from '../data/constants'

const statIcons = {
  star: Star,
  shield: Shield,
  clock: Clock,
  map: MapPin,
}

function HeroBadge({
  icon: Icon,
  title,
  subtitle,
  subtitleClass = 'text-gray-500',
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  subtitle: string
  subtitleClass?: string
}) {
  return (
    <div className="bg-white rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3 flex items-center gap-2.5 sm:gap-3 shadow-xl shadow-navy-900/25 border border-gray-100 flex-1 min-w-0">
      <div className="w-8 h-8 sm:w-9 sm:h-9 bg-lime-500/15 rounded-xl flex items-center justify-center flex-shrink-0">
        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-lime-600" />
      </div>
      <div className="min-w-0">
        <p className="text-gray-500 text-[11px] sm:text-xs font-semibold truncate">{title}</p>
        <p className={`text-sm font-bold truncate ${subtitleClass}`}>{subtitle}</p>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative bg-navy-800 overflow-hidden pt-20 sm:pt-24 pb-0">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none hidden sm:block" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/3 rounded-full pointer-events-none hidden lg:block" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-5 sm:space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-lime-500/20 border border-lime-500/30 text-lime-400 text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
              Servicio técnico especializado
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Reparamos tus{' '}
              <span className="text-lime-400">electrodomésticos</span>{' '}
              a domicilio
            </h1>

            <p className="text-base sm:text-lg text-blue-100/80 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Técnicos certificados, diagnóstico inmediato, venta de repuestos y garantía por escrito.
              Reparamos lavadoras, refrigeradoras, microondas y más con atención las 24 horas.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-1 sm:pt-2 justify-center lg:justify-start">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-lime-500 hover:bg-lime-600 text-white font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all hover:scale-105 shadow-lg shadow-lime-500/25 w-full sm:w-auto touch-manipulation"
              >
                Solicitar Servicio
                <ArrowRight className="w-5 h-5" />
              </a>
              <button
                onClick={() => document.querySelector('#servicios')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full transition-colors w-full sm:w-auto touch-manipulation"
              >
                Ver servicios
              </button>
            </div>
          </div>

          <div className="relative flex flex-col items-center lg:items-end w-full">
            <div className="relative animate-float w-full max-w-[260px] sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto lg:mx-0">
              <div className="absolute -inset-4 bg-lime-500/20 rounded-full blur-2xl" />
              <img
                src="/hero-bozatech.png"
                alt="Bozatech - Servicio técnico de electrodomésticos"
                className="relative w-full object-contain drop-shadow-2xl rounded-2xl sm:rounded-3xl"
              />
            </div>

            <div className="flex gap-2 sm:gap-3 mt-4 w-full max-w-[260px] sm:max-w-sm md:max-w-md lg:hidden">
              <HeroBadge icon={Shield} title="Garantía" subtitle={WARRANTY_PERIOD} subtitleClass="text-navy-800" />
              <HeroBadge icon={Users} title="+500 clientes" subtitle="satisfechos" />
            </div>

            <div className="hidden lg:block absolute top-8 -right-10">
              <HeroBadge icon={Shield} title="Garantía" subtitle={WARRANTY_PERIOD} subtitleClass="text-navy-800" />
            </div>

            <div className="hidden lg:block absolute bottom-16 -left-4">
              <HeroBadge icon={Users} title="+500 clientes" subtitle="satisfechos" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-12 lg:mt-16 pb-12 sm:pb-16">
          {HERO_STATS.map((stat) => {
            const Icon = statIcons[stat.icon as keyof typeof statIcons]
            return (
              <div
                key={stat.label}
                className="bg-white/15 backdrop-blur-md border border-white/25 shadow-lg shadow-navy-900/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 flex items-center gap-2 sm:gap-3"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-lime-500/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-lime-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-white font-bold text-base sm:text-lg leading-tight">{stat.value}</p>
                  <p className="text-blue-200/70 text-[10px] sm:text-xs leading-snug">{stat.label}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
