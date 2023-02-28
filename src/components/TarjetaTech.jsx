import React from 'react'
import "./TarjetaTech.css"
export const TarjetaTech = ({imagen}) => {
  return (
    <a href='https://www.google.com' className='tarjeta_tech'>
    <div  >
     <img  alt='img' className='imagen_tarjeta2' src={imagen}></img>
     </div> 
     
 </a>
  )
}
