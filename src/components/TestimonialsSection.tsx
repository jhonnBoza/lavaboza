import { useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { TESTIMONIALS } from '../data/constants'

function getVisibleCount() {
  if (typeof window === 'undefined') return 1
  if (window.innerWidth >= 1024) return 3
  if (window.innerWidth >= 640) return 2
  return 1
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [visibleCount, setVisibleCount] = useState(getVisibleCount)

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount())
      setCurrent(0)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const maxPage = Math.ceil(TESTIMONIALS.length / visibleCount) - 1
  const prev = () => setCurrent((c) => Math.max(0, c - 1))
  const next = () => setCurrent((c) => Math.min(maxPage, c + 1))
  const visible = TESTIMONIALS.slice(current * visibleCount, current * visibleCount + visibleCount)

  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <span className="inline-block text-lime-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Testimonios
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-800 mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-gray-500 max-w-xl">
              Más de 500 familias en el Perú confían en Bozatech para reparar sus electrodomésticos.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-gray-50 rounded-2xl px-5 py-4 border border-gray-100">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <div>
              <p className="font-bold text-navy-800">4.9 en Google</p>
              <p className="text-gray-500 text-sm">+120 reseñas verificadas</p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {visible.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 relative"
            >
              <Quote className="w-8 h-8 text-lime-200 absolute top-4 right-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{testimonial.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-navy-800 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-navy-800 text-sm">{testimonial.name}</p>
                  <p className="text-gray-400 text-xs">{testimonial.location} · {testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            disabled={current === 0}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <div className="flex gap-2">
            {[...Array(maxPage + 1)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === current ? 'bg-lime-500' : 'bg-gray-200'
                }`}
                aria-label={`Página ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            disabled={current >= maxPage}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  )
}
