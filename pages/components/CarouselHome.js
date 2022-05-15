import carouselCSS from '../../styles/homeCarousel.module.scss'
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide'
import {useTranslation} from "next-i18next";

export default function CarouselHome() {
  const { t } = useTranslation('common');
  return (
    <section className={ carouselCSS.container }>
      <h2 className={ carouselCSS.header }>{t("carouselHome.header")}</h2>
      <Splide
        className={ carouselCSS['container-carousel'] }
        aria-label="My Favorite Images"
        data-splide='{
          "type":"loop",
          "perPage":1
        }'>
        <SplideSlide className={ carouselCSS.slide } >
          <img className={ carouselCSS.image } src="/inatimi-nathus.jpeg" alt={t("carouselHome.image1Alt")}/>
        </SplideSlide>
        <SplideSlide className={ carouselCSS.slide } >
          <img className={ carouselCSS.image } src="/inatimi-nathus.jpeg" alt={t("carouselHome.image2Alt")}/>
        </SplideSlide>
      </Splide>
    </section>
  )
}
