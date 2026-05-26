import { getBrandLogoUrl } from '../data/brandLogos'

type BrandsCarouselProps = {
  brands: string[]
}

export default function BrandsCarousel({ brands }: BrandsCarouselProps) {
  const track = [...brands, ...brands]

  return (
    <div className="marquee-row overflow-hidden">
      <div className="marquee-track flex w-max items-center gap-8 sm:gap-10" style={{ animationDuration: '40s' }}>
        {track.map((brand, index) => (
          <div
            key={`${brand}-${index}`}
            className="flex-shrink-0 flex items-center justify-center bg-transparent rounded-2xl px-3 py-2 min-w-[160px] h-[90px] sm:min-w-[220px] sm:h-[120px] md:min-w-[280px] md:h-[140px]"
          >
            <img
              src={getBrandLogoUrl(brand)}
              alt={brand}
              className="h-12 sm:h-16 md:h-20 w-[160px] sm:w-[200px] md:w-[260px] object-contain object-center"
              loading="lazy"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
