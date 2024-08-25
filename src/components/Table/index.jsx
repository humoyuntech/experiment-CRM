/* eslint-disable no-unused-vars */
import React from 'react'
import {Container, Title, ImportBtn, WrapperBtns, Add, AddItem, Select, TableTag} from './style'
import ImportSvg from '../../assets/icons/import.svg?react'
// import Plus from '../../assets/icons/plus.svg?react'
import Action from "../../assets/icons/action.svg?react";
import Edit from "../../assets/icons/edit.svg?react";

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
          
         <TableTag>
              <thead>
                  <tr>
                    <td> <input type='checkbox'/> </td>
                    <td colSpan={2}>O’quvchining ismi</td>
           
                    <td>Guruh / Fan</td>
                    <td>Dars kuni va vaqti</td>
                    <td>Qo’shilgan sana</td>
                    <td colSpan={3}>Moderator</td>
                 
                  </tr>
                  
              </thead>
              <tbody>
                <tr>
                    <td> <input type='checkbox'/> </td>
                    <td>Javlon Javliyev<span>Accepted</span></td>
                    <td><span className='accepted'>Accepted</span></td>
                    <td>Mobile</td>
                    <td>Se-Pa-Sha / 10:00-12:00</td>
                    <td>11-11-22</td>
                    <td>Doniyor Abdullayev</td>
                    <td><Edit /></td>
                    <td><Action /></td>
                </tr>
                <tr>
                    <td> <input type='checkbox'/> </td>
                    <td>Javlon Javliyev</td>
                    <td></td>
                    <td>Mobile</td>
                    <td>Se-Pa-Sha / 10:00-12:00</td>
                    <td>11-11-22</td>
                    <td>Doniyor Abdullayev</td>
                    <td><Edit /></td>
                    <td><Action /></td>
                </tr>
                <tr>
                    <td> <input type='checkbox'/> </td>
                    <td>Javlon Javliyev</td>
                    <td> <span className='rejected'>Rejected</span></td>
                    <td>Mobile</td>
                    <td>Se-Pa-Sha / 10:00-12:00</td>
                    <td>11-11-22</td>
                    <td>Doniyor Abdullayev</td>
                    <td><Edit /></td>
                    <td><Action /></td>
                </tr>
              </tbody>
          </TableTag> 
          
        </Container>
  )
}

export default Table