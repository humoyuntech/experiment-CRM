// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import {Container, Logo, InputContainer, SearchInput, Search, Time} from './style'



function Navbar() {
    const [now, setNow] = useState(new Date())
    setInterval(() => setNow(new Date()), 1000)


  return (
    <Container>
        <Logo>Webbrain.crm</Logo>
        <InputContainer>
        <Search />
        <SearchInput type="text" placeholder='Srarch'/> 
        </InputContainer>
        <Time>{now.toLocaleTimeString()}</Time>
        {/* <span>Hozir soat: {now.toLocaleTimeString()}</span> */}
    </Container>
  )
}

export default Navbar