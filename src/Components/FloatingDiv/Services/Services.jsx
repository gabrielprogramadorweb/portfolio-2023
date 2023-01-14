import React from 'react'
import Card from '../../Card/Card'
import './Services.css';
import HeartEmoji from '../../../img/heartemoji.png';
import Glasses from '../../../img/glasses.png';
import Humble from '../../../img/humble.png';
import Resume from './curriculo-gabriel.pdf'
import { themeContext } from '../../../Context';
import { useContext } from 'react'
import { motion, spring } from 'framer-motion'

const Services = () => {
    const transition = { duration: 1, type: 'spring' }
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className='services' id='Services'>
            {/* Left side */}
            <div className="awesome">
                <span style={{ color: darkMode ? 'white' : '' }}>Meus serviços </span>
                <span>Incríveis</span>
                <span>Confira meu currículo &#x1F447;<br />  </span>
                <a href={Resume} download>
                    <button className="button s-button">Download CV</button>
                    <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div></a>
            </div>
            {/* right side */}
            <div className="cards">
                {/* 1° card */}
                <motion.div
                    whileInView={{ left: '14rem' }}
                    initial={{ left: '25rem' }}
                    transition={transition}

                    style={{ left: '14rem' }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Design'}
                        detail={"Figma, Adobe Photoshop, Adobe Illustrator"}
                    />
                </motion.div>
                {/* 2° card */}
                <motion.div
                    whileInView={{ left: '-4rem' }}
                    initial={{ left: '-5rem' }}
                    transition={transition}
                    style={{ top: '12rem', left: '-4rem' }}>
                    <Card
                        emoji={Glasses}
                        heading={"Developer"}
                        detail={"Html, Css, JavaScript, React & Next"}
                    />
                </motion.div>
                {/* 3° card */}
                <motion.div
                    whileInView={{ left: '14rem' }}
                    initial={{ left: '25rem' }}
                    transition={transition}
                    style={{ top: '19rem', left: '12rem' }}>
                    <Card
                        emoji={Humble}
                        heading={"UI/UX"}
                        detail={"-- Scrum e Metodologia Ágil -- "}
                    />
                </motion.div>
                <div className="blur s-blur2" style={{ background: "var(--purole)" }}></div>
            </div>
        </div>
    )
}

export default Services
