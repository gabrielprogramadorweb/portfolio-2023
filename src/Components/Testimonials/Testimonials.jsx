import React from 'react'
import './Testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import profilePicl from '../../img/profile1.png'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg'
import { Pagination } from 'swiper'
import 'swiper/css/pagination';
import 'swiper/css'

const Testimonials = () => {
    const clients = [

        {
            img: profilePicl,
            review: "Trabalho impecável",
        },
        {
            img: profilePic2,
            review: "Amei o designer",
        },
        {
            img: profilePic3,
            review: "Você tem muito talento!",
        },
        {
            img: profilePic4,
            review: "Ficou melhor do que eu esperava",
        },

    ]
    return (
        <div className='t-wrapper' id='Testimonials'>
            <div className="t-heading">
                <span>Os clientes sempre recebem</span>
                <span> um trabalho excepcional</span>
                <span> de mim.</span>
                <div className="blur t-blur1" style={{ background: 'var(--purple' }}></div>
                <div className="blur t-blur2" style={{ background: 'skyblue' }}></div>
            </div>
            {/*Slider */}
            <Swiper modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}>
                {clients.map((client, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                                <img src={client.img} alt="" />
                                <span>{client.review}</span></div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div >
    )
}

export default Testimonials
