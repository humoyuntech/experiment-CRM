import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from '../components/Login/Login'
import Reset from '../components/Reset/Reset'
import Verification from '../components/Verification/verification'
// import Analytics from '../components/Analytics/index'
import Sidebar from '../components/Sidebar/sidebar'

import {Container} from './style'

function Root() {
  return (
    <div>

          {/* <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />}/>
              <Route path="login" element={<Login />}/>
              <Route path="reset" element={<Reset/> }/>
              <Route path="verification" element={<Verification/> }/>
            </Routes>
          </BrowserRouter> */}
          <Sidebar />

    </div>
  )
}

export default Root



