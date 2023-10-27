import React from 'react'
import './Works.css'
import Next from "../../img/next.png";
import Js from "../../img/js.png";
import Java from "../../img/java.png";
import PHP from "../../img/php.png";
import Reac from "../../img/react.png";
import { themeContext } from '../../Context';
import { useContext } from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Works = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className='works'>
            <div className="awesome">
                <span style={{ color: darkMode ? 'white' : '' }}>Trabalho com estás</span>
                <span>
                    Tecnologias
                </span>


                <a href='https://www.linkedin.com/in/gabriel-castro-231318193/'>
                    <button className="button s-button"><span>Contrate-me</span></button></a>
                <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
            </div>
            {/* right side */}
            <div className="w-right">
                <motion.div
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: '-40px' }}
                    transition={{ duration: 3.5, type: 'spring' }}
                    className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Next} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Js} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={PHP} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Java} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Reac} alt="" />
                    </div>
                </motion.div>
                {/* background Circles */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    )
}

export default Works
