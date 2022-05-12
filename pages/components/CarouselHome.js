import carouselCSS from '../../styles/homeCarousel.module.scss'
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide'

export default function CarouselHome() {

  return (
    <Splide
      className={ carouselCSS.container }
      aria-label="My Favorite Images"
      data-splide='{
        "type":"loop",
        "perPage":1
      }'>
      <SplideSlide className={ carouselCSS.slide } >
        <img className={ carouselCSS.image } src="/inatimi-nathus.jpeg" alt="Image 1"/>
      </SplideSlide>
      <SplideSlide className={ carouselCSS.slide } >
        <img className={ carouselCSS.image } src="/inatimi-nathus.jpeg" alt="Image 2"/>
      </SplideSlide>
    </Splide>
  )
}
