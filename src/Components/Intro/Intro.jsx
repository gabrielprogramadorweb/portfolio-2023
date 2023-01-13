import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'

const Intro = () => {

    const transition = { duration: 2, type: 'spring' }

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;


    return (
        <div>
            <div className='intro'>
                <div className='i-left'>
                    <div className='i-name'>
                        <span style={{ color: darkMode ? 'white' : '' }}>Oi! Eu Sou o </span>
                        <span>Gabriel Castro </span>
                        <span>Sou desenvolvedor Web Front-End com experiência em React & Next</span>
                    </div>
                    <a href='https://www.linkedin.com/in/gabriel-castro-231318193/'>
                        <button className="button i-button">Contrate-me</button></a>
                    <div className='i-icons'>
                        <a href='https://github.com/gabrielprogramadorweb/'> <img src={Github} alt='' /></a>
                        <a href='https://www.linkedin.com/in/gabriel-castro-231318193/'>
                            <img src={LinkedIn} alt='' /></a>
                        <a href='https://www.instagram.com/dignodev/'> <img src={Instagram} alt='' /></a>
                    </div>
                </div>
                <div className='i-right'>
                    <img src={Vector1} alt="" />
                    <img src={Vector2} alt="" />
                    <img src={boy} alt="" />
                    <motion.img
                        initial={{ left: '-36%' }}
                        whileInView={{ left: '-24%' }}
                        transition={transition}
                        src={glassesimoji}
                        alt="" />
                    <motion.div
                        initial={{ top: '-4%', left: '74%' }}
                        whileInView={{ left: '68%' }}
                        transition={transition}
                        className='floating-div'
                        style={{ top: '-4%', left: '68%' }}>
                        <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
                    </motion.div>
                    <motion.div
                        initial={{ top: '18rem', left: '9rem' }}
                        whileInView={{ left: '10rem' }}
                        transition={transition}
                        className='floating-div'
                        style={{ top: '18rem', left: '10rem', position: 'absolute' }}>
                        <FloatingDiv image={thumbup} txt1='Designer de alto nível' />
                    </motion.div>
                    {/* Blur divs */}
                    <div className='blur' style={{ background: 'rgb(238 210 255)' }}></div>
                    <div className='blur' style={{
                        background: '#C1F5FF',
                        top: '17rem',
                        width: '21rem',
                        height: '11rem',
                        left: '-9rem',
                    }}></div>
                </div>
            </div>
        </div >
    )
}

export default Intro
