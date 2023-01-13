import React from 'react'
import './Card.css'

const Card = ({ emoji, heading, detail }) => {
    return (
        <div className='card'>
            <img src={emoji} alt=''></img>
            <span>{heading}</span>
            <span>{detail}</span>
            {/**<button className="c-button">Saber mais</button> */}
        </div>
    )
}

export default Card
