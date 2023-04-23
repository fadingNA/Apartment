import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PropertyCard from "../../../Property";
import {useIsDesktop} from "../../../../../feature/CustomHooks/usePropertyFor";

export default function Sliders({featuredProperties}) {
    const {isDesktop} = useIsDesktop();
    return (
        <>
            <Swiper slidesPerView={isDesktop ? 3 : 1} spaceBetween={10} loop={true} loopfillgroupwihblank="true"
                    centeredSlides={true}
                    autoplay={{delay: 2000}}
                    pagination={{dynamicBullets: true}}
                    modules={[Autoplay, Pagination]}
                    className={'mySwiper'}>
                {featuredProperties.map((property) => (
                    <SwiperSlide key={property.id}>
                        <PropertyCard {...property}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}