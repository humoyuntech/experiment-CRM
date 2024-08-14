import React from 'react'
import {Container, Title, ImportBtn, WrapperBtns, Add, AddItem, Select} from './style'
import ImportSvg from '../../assets/icons/import.svg?react'
// import Plus from '../../assets/icons/plus.svg?react'


function Table() {
  return (
        <Container>
          <Title>
            <h2>Buyurtmalar ro’yxati</h2>
            <WrapperBtns>
             <ImportBtn bg="#fff" ml="0" wth="118px"><div><ImportSvg/></div> <div>Import</div></ImportBtn>
             <ImportBtn bg="#1890FF" ml="20px" wth="250px" cl="#fff"><div className='plus'> + </div> <div>Buyurtma qo’shish</div></ImportBtn>
            </WrapperBtns>
          </Title>
          <Add>
            <AddItem>
              <p>Statusi</p>
              <Select name="select">
                <option value="all">Hammasi</option>
                <option value="all">Hammasi</option>
            </Select>
            </AddItem>
            <AddItem>
              <p>Ranglar bo'yincha</p>
              <Select name="select">
                <option value="all">Hammasi</option>
                <option value="all">Hammasi</option>
            </Select>
            </AddItem>
            <AddItem>
              <p>Guruhlar</p>
              <Select name="select">
                <option value="all">Hammasi</option>
                <option value="all">Hammasi</option>
            </Select>
            </AddItem>
            <AddItem>
              <p>Kurslar</p>
              <Select name="select">
                <option value="all">Hammasi</option>
                <option value="all">Hammasi</option>
            </Select>
            </AddItem>
            <AddItem>
              <p>Moderator</p>
              <Select name="select">
                <option value="all">Hammasi</option>
                <option value="all">Hammasi</option>
            </Select>
            </AddItem>
            <AddItem>
              <p>Sababi</p>
              <Select name="select">
                <option value="all">Hammasi</option>
                <option value="all">Hammasi</option>
            </Select>
            </AddItem>
          </Add>
        </Container>
  )
}

export default Table