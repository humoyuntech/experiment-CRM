import {Container, Wrapper} from './style.js'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import Table from '../Table'


function MainPage() {
  return (
    <Container>

        <Navbar/>
        <Wrapper>
            <Sidebar/>
            <Table/>
        </Wrapper>

    </Container>
  )
}

export default MainPage