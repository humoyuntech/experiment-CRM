// eslint-disable-next-line no-unused-vars
import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from '../components/Login/Login'
import Reset from '../components/Reset/Reset'
import Verification from '../components/Verification/verification'
import MainPage from '../components/MainPage'
// import Table from '../components/Table'



// import {Container} from './style'

function Root() {
  return (
    <div>

          <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="login" element={<Login />}/>
                <Route path="reset" element={<Reset/> }/>
                <Route path="verification" element={<Verification/> }/>
                <Route path="mainpage"  element={<MainPage />}/>
            </Routes>
          </BrowserRouter>
          {/* <MainPage /> */}
    </div>
  )
}

export default Root



