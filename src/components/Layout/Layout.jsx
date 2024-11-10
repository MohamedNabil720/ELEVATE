import React from 'react'
import NavBar from '../Navbar/NavBar'
import { Outlet } from 'react-router-dom'
import Loading from '../Loading'

export default function Layout() {



    return (
        <div>

            <NavBar />
            <Outlet />
        </div>
    )
}
