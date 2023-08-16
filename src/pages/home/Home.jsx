import React from 'react'
import { Outlet } from 'react-router-dom'
import Loguin from '../loguin/Loguin'

const Home = () => {

    

  return (
    <>
    <div>Home</div>
    <Loguin/>
    <Outlet />

    </>
    
  )
}

export default Home