import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Onpizza from '../../img/onpizza.png';
import LojaNike from '../../img/lojanike.png';
import Jogo from '../../img/jogo.png'
import Divconta from '../../img/divconta.png'
import Meta from '../../img/meta.png'
import 'swiper/css'
import { themeContext } from '../../Context';
import { useContext } from 'react'

const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className='portfolio' id='Portfolio'>
            {/* heading */}
            <span style={{ color: darkMode ? 'white' : '' }}>Projetos recentes</span>
            <span>Portfólio</span>

            {/* slider */}
            <Swiper spaceBetween={30} slidesPerView={3} grabCursor={true} className='portfolio-slider'>
                <SwiperSlide>
                    <a href='https://metaverso-gray.vercel.app/'>
                        <img src={Meta} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href='https://onpizza.vercel.app/'>
                        <img src={Onpizza} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href='https://gabrielprogramadorweb.github.io/loja-nike/'>
                        <img src={LojaNike} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href='https://gabrielprogramadorweb.github.io/Divisor-de-conta/'>
                        <img src={Divconta} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href='https://gabrielprogramadorweb.github.io/Jogo-da-mem-ria/'>
                        <img src={Jogo} alt="" /></a>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio
