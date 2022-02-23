import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navBar'
import SideBar from '../components/sideBar'


const Home = () => {
  return (
    <>
        <Navbar/>
        <div className="container">
            <SideBar/>
            <div className="dispose">
                <Outlet/>
            </div>
        </div>
        
    </>
  )
}

export default Home