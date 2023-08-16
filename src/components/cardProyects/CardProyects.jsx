import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./cardProyects.scss"

const CardProyects = () => {

  const navigate = useNavigate()

    const details = (id) => {
        navigate(`${id}`)
    }

  return (
    <main className='home'>
      <div className='home-title'>
        <h1>Mis proyectos</h1>
        <button className='add'>Añadir un proyecto<span>+</span></button>
      </div>
      
      <article className='cards-container' >
        <div className='card' onClick={() => details(1)}>
          <h3>Name</h3>
          <button className='delete'>-</button>
        </div>
        <div className='card' onClick={() => details(1)}>
          <h3>Name</h3>
        </div>
      </article>
    </main>
   
  )
}

export default CardProyects