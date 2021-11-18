import React from 'react'
import { Outlet } from 'react-router'

const Main = () => {
    return (
        <div>
            {/* <h1>This is Main</h1> */}
            <Outlet />
        </div>
    )
}

export default Main
