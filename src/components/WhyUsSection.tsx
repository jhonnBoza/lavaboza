import { useEffect, useRef, useState } from 'react'
import {
  BadgeCheck,
  FileCheck,
  Search,
  Package,
  Home,
  Receipt,
} from 'lucide-react'
import { WHY_US, STATS_BANNER } from '../data/constants'
import { useCountUp } from '../hooks/useCountUp'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'badge-check': BadgeCheck,
  'file-check': FileCheck,
  search: Search,
  package: Package,
  home: Home,
  receipt: Receipt,
}

function AnimatedStat({
  prefix,
  end,
  suffix,
  label,
  active,
}: {
  prefix: string
  end: number
  suffix: string
  label: string
  active: boolean
}) {
  const count = useCountUp({ end, active })

  return (
    <div className="text-center">
      <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-lime-400 mb-1 tabular-nums">
        {prefix}{count}{suffix}
      </p>
      <p className="text-blue-200/70 text-sm">{label}</p>
    </div>
  )
}

export default function WhyUsSection() {
  const statsRef = useRef<HTMLDivElement>(null)
  const [statsVisible, setStatsVisible] = useState(false)

  useEffect(() => {
    const node = statsRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="por-que" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block text-lime-600 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3">
            ¿Por qué elegirnos?
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-800 mb-3 sm:mb-4 px-2">
            La confianza de más de 500 familias en el Perú
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base px-2">
            Somos especialistas en reparación de electrodomésticos con años de experiencia y compromiso con la calidad.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {WHY_US.map((item) => {
            const Icon = iconMap[item.icon]
            return (
              <div
                key={item.title}
                className="group relative bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-lime-400 to-lime-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                <div className="w-12 h-12 bg-navy-800 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-lime-400" />
                </div>
                <h3 className="text-lg font-bold text-navy-800 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>

        <div
          ref={statsRef}
          className="bg-navy-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8"
        >
          {STATS_BANNER.map((stat) => (
            <AnimatedStat key={stat.label} {...stat} active={statsVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}
