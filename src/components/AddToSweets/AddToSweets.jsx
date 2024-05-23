import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation} from 'swiper/modules';
import CardForSlider from "../CardForSlider/CardForSlider";
import './AddToSweets.scss'

const AddToSweets = ({cards}) => {
    console.log(cards)
    return (
        <div className='swiper'>
            <div className='__inner'>
                <Swiper
                    spaceBetween={60}
                    slidesPerView={2.1}
                    navigation={{
                        prevEl: '.swiper-button-prev',
                        nextEl: '.swiper-button-next',
                    }}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {cards?.map((i) => (
                        <SwiperSlide className='swiper-slide'>
                            <CardForSlider key={i.codeid} content={i}/>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </div>
    )
}

export default AddToSweets
