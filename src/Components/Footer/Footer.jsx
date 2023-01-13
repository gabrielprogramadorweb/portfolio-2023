import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'

const Footer = () => {
    return (
        <div className='footer'>
            <img src={Wave} alt="" style={{ width: '100%' }} />
            <div className="f-content">
                <span>&copy;Gabriel Castro</span>
                <div className="f-icons">
                    <a href='https://www.instagram.com/dignodev/'>  <Insta color='white' size='3rem' /></a>
                    <a href='https://github.com/gabrielprogramadorweb/'>
                        <Github color='white' size='3rem' /></a>
                    <a href='https://www.linkedin.com/in/gabriel-castro-231318193/'>
                        <Linkedin color='white' size='3rem' /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer
