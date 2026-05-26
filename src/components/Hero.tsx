import { ArrowRight, Star, Shield, Clock, MapPin, Users } from 'lucide-react'
import { HERO_STATS, WHATSAPP_LINK } from '../data/constants'

const statIcons = {
  star: Star,
  shield: Shield,
  clock: Clock,
  map: MapPin,
}

export default function Hero() {
  return (
    <section className="relative bg-navy-800 overflow-hidden pt-24 pb-0">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-lime-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/3 rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-lime-500/20 border border-lime-500/30 text-lime-400 text-sm font-medium px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
              Servicio técnico especializado
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Reparamos tus{' '}
              <span className="text-lime-400">electrodomésticos</span>{' '}
              a domicilio
            </h1>

            <p className="text-lg text-blue-100/80 max-w-lg leading-relaxed">
              Técnicos certificados, diagnóstico inmediato y garantía por escrito.
              Reparamos lavadoras, refrigeradoras, microondas y más en menos de 24 horas.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-600 text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg shadow-lime-500/25"
              >
                Solicitar Servicio
                <ArrowRight className="w-5 h-5" />
              </a>
              <button
                onClick={() => document.querySelector('#servicios')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-full transition-colors"
              >
                Ver servicios
              </button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <div className="absolute -inset-4 bg-lime-500/20 rounded-full blur-2xl" />
              <img
                src="/hero-bozatech.png"
                alt="Bozatech - Servicio técnico de electrodomésticos"
                className="relative w-full max-w-md lg:max-w-lg object-contain drop-shadow-2xl rounded-3xl"
              />
            </div>

            <div className="absolute top-8 -right-2 sm:-right-4 lg:-right-10 bg-white rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl shadow-navy-900/25 border border-gray-100">
              <div className="w-9 h-9 bg-lime-500/15 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-lime-600" />
              </div>
              <div>
                <p className="text-gray-500 text-xs font-semibold">Garantía</p>
                <p className="text-navy-800 text-sm font-bold">1 año</p>
              </div>
            </div>

            <div className="absolute bottom-16 left-0 lg:-left-4 bg-white rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl shadow-navy-900/25 border border-gray-100">
              <div className="w-9 h-9 bg-lime-500/15 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-lime-600" />
              </div>
              <div>
                <p className="text-navy-800 text-xs font-semibold">+500 clientes</p>
                <p className="text-gray-500 text-xs">satisfechos</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 lg:mt-16 pb-16">
          {HERO_STATS.map((stat) => {
            const Icon = statIcons[stat.icon as keyof typeof statIcons]
            return (
              <div
                key={stat.label}
                className="bg-white/15 backdrop-blur-md border border-white/25 shadow-lg shadow-navy-900/20 rounded-2xl p-4 lg:p-5 flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-lime-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-lime-400" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg leading-tight">{stat.value}</p>
                  <p className="text-blue-200/70 text-xs">{stat.label}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
