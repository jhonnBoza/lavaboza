import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FAQ_ITEMS } from '../data/constants'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block text-lime-600 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3">
            Preguntas Frecuentes
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-800 mb-3 sm:mb-4">
            Resolvemos tus dudas
          </h2>
          <p className="text-gray-500 text-sm sm:text-base px-2">
            Encuentra respuestas a las preguntas más comunes sobre nuestro servicio.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={item.question}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-shadow hover:shadow-md"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-3 sm:gap-4 p-4 sm:p-5 text-left touch-manipulation"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-navy-800 text-sm sm:text-base leading-snug">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-lime-500 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-5 pb-5 text-gray-500 text-sm leading-relaxed">{item.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
