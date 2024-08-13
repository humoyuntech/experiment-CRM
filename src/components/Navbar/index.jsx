// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import {Container, Logo, InputContainer, SearchInput, Search, Time, Data, Select} from './style'



function Navbar() {
    const [now, setNow] = useState(new Date());
    setInterval(() => setNow(new Date()), 1000);
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    


  return (
    <Container>
        <Logo>Webbrain.crm</Logo>
        <InputContainer>
        <Search />
        <SearchInput type="text" placeholder='Srarch'/> 
        </InputContainer>
        <Time>{now.toLocaleTimeString()}</Time>
    
          <label action="#" htmlFor="#">
          <Data type='date' name="date" defaultValue={selectedDate}/>
          </label>
          <Select name="select">
          <option value="uz">O'zbek</option>
          <option value="uz">English</option>
          <option value="ru">Русский</option>
          </Select>

    </Container>
  )
}

export default Navbar