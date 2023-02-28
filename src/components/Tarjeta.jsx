import React from 'react'
import { Link } from 'react-router-dom'
import "./Tarjeta.css"

export const Tarjeta = ({nombre , descripcion}) => {
  return (
    <Link to={"/codigo"} className='tarjeta'>
       <div className='imagen_cont' >
        <img alt='img' className='imagen_tarjeta' src='https://cdn-icons-png.flaticon.com/512/5968/5968292.png'></img>
        </div> 
        <div className='texto_tarjeta'>
            <p>{nombre}</p>
       
        </div>
    </Link>
  )
}
