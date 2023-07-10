import React from 'react'
import CV from '../../assets/DanielRivero2023.pdf'

const CTA = () => {
  return (
    <div className='cta'>
    <a href={CV} download className='btn'>Descargar CV</a>
    <a href="#contact" className='btn btn-primary'>Contactame</a>
    </div>
  )
}

export default CTA