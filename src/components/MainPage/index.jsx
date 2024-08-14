import {Container, Wrapper} from './style.js'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import Table from '../Table'


function MainPage() {
  return (
    <Container>
        <Navbar className="navbar" />
        <Wrapper>
        <Sidebar className="sidebar"/>
        <Table className="table"/>
        </Wrapper>
    </Container>
  )
}

export default MainPage