import React from 'react'
import { useParams } from 'react-router-dom'

const DetalleProyecto = () => {

  const { idProyecto } = useParams();

  return (
    <div>DetalleProyecto</div>
  )
}

export default DetalleProyecto