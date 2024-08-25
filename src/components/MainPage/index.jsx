import {Container, Wrapper} from './style.js'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import Table from '../Table'
import Analytics from '../Analytics'
import { Navigate, Route, Routes } from 'react-router-dom'


function MainPage() {
  return (
    <Container>

        <Navbar/>
        <Wrapper>
            <Sidebar/>
        <Routes>
        {/* <Route path='/' element={<Analytics />} /> */}
        <Route path='/' element={<Table/>} />
        </Routes>
        </Wrapper>

    </Container>
  )
}

export default MainPage