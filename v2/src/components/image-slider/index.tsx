import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { cn } from "../../utils"
import { staticImagePath } from "@/data"

interface ImageSliderProps extends SwiperProps {
  images?: {
    src: string
    alt: string
  }[]
}

export default function ImageSlider({ images, className, ...rest }: ImageSliderProps) {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 4500,
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
            src={staticImagePath + image.src}
            alt={image.alt}
            className="object-cover w-full h-full"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
