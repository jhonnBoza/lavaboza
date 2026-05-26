import { ALL_BRANDS } from '../data/constants'
import BrandsCarousel from './BrandsCarousel'

export default function BrandsSection() {
  return (
    <section id="marcas" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block text-lime-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Marcas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-800 mb-4">
            Marcas que reparamos
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Confían en nosotros las principales marcas de electrodomésticos en todo el Perú
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="relative marquee-fade">
            <BrandsCarousel brands={ALL_BRANDS} />
          </div>
        </div>
      </div>
    </section>
  )
}
