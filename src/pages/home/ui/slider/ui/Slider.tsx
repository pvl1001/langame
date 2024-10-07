import {Container} from "shared/ui/container";
import {SliderButton} from "shared/ui/slider_button";
import {Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import s from "./Slider.module.scss";


type Props = {
    slides: string[]
}

export function Slider({slides}: Props) {
    return (
        <Container className={s._}>
            <Swiper
                loop
                spaceBetween={20}
                slidesPerView={1}
                modules={[Navigation]}
                navigation={{
                    nextEl: '.person-next',
                    prevEl: '.person-prev',
                }}
            >
                {slides.map((slide, i) =>
                    <SwiperSlide key={i} className={s.slide}>
                        <img src={slide} alt="slide"/>
                    </SwiperSlide>
                )}

                <div className={s.navigation}>
                    <SliderButton prev className={'person-prev'}/>
                    <SliderButton next className={'person-next'}/>
                </div>

            </Swiper>
        </Container>
    );
}
