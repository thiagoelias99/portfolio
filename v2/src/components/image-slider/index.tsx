import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { cn } from "../../utils"

interface ImageSliderProps extends SwiperProps {
  images?: {
    image: string
    alt: string
  }[]
}

export default function ImageSlider({ images, className, ...rest }: ImageSliderProps) {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className={cn("mySwiper", className)}
      {...rest}
    >
      {images?.map((image, index) => (
        <SwiperSlide
          key={index}
        >
          <img
            src={image.image}
            alt={image.alt}
            className="object-cover w-full h-full"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
