import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import "./home.scss"

const Home = () => {

    

  return (
    <>
    <Navbar/>
    <Outlet />
    </>
    
  )
}

export default Home