import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Page1 from '../page/Page1'
import Page2 from '../page/Page2'
import Home from '../page/Home'

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to="/home" />} />
            <Route path='/home' element={<Home />} />
            <Route path='/page1' element={<Page1 />} />
            <Route path='/page2' element={<Page2 />} />
        </Routes>
    )
}

export default Routers