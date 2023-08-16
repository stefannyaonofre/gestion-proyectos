import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardProyects = () => {

  const navigate = useNavigate()

    const details = (id) => {
        navigate(`${id}`)
    }

  return (
    <>
     <div>CardProyects</div>
     <button onClick={() => details(1)}>detalle</button>
    </>
   
  )
}

export default CardProyects