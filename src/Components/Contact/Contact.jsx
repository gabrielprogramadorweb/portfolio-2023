import React from 'react'
import './Contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { themeContext } from '../../Context';
import { useContext } from 'react'

const Contact = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const form = useRef();

    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_66m6bvh', 'template_h3akf5a', form.current, 'WxtMM7ei4_S_wQI5U')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });

    };
    return (
        <div className='contact-form'>
            <div className="w-left">
                <div className="awesome">
                    <span style={{ color: darkMode ? 'white' : '' }}>Ficou com alguma dúvida?</span>
                    <span>Contate-me</span>
                    <div className="blur s-blur1" style={{ background: '#abf1ff94' }}>

                    </div>
                </div>
            </div>

            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='user_name' className='user' placeholder='Nome' />
                    <input type="email" name='user_email' className='user' placeholder='Email' />
                    <textarea name="message" className='user' placeholder='Menssagem' />
                    <input type="submit" value='Enviar' className='button' />
                    <span>{done && 'Obrigado por sua menssagem!'}</span>
                    <div className="blur c-blur1" style={{ background: 'var(--purple)' }}></div>
                </form>
            </div>
        </div>
    );
};


export default Contact;
