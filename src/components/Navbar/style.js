import styled from 'styled-components';
import SearchSvg from '../../assets/icons/search.svg?react';

export const Container = styled.div`
display: flex;
align-items: center;
width: 100%;
height: 50px;
background-color: #fff;
color: #1890FF;
font-size: 20px;
font-weight: 600;
/* border-bottom: 1px solid #253E5F; */
/* padding: 10px 0; */
`

export const Logo =styled(Container)`
    width: 280px;
    background-color: #162539;
    border-bottom: 1px solid #253E5F;
    display: flex;
    justify-content: center;
    align-items: center;

`
export const InputContainer = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-radius: 8px;
  height: 40px;
  box-sizing: border-box;
  border: 1px solid #f0f0f0;
  margin-left: 30px;
`;

export const SearchInput = styled.input`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  border: none;
  width: 100%;
  color: rgba(187, 195, 205, 1);
  outline: none;
  height: 100%;
`;

export const Search = styled(SearchSvg)`
  width: 20px;
  margin: 0 16px;
`;

export const Time = styled.div`
height: 100%;
width: 125px;
display: flex;
align-items: center;
margin-left: 70px;

/* background-color: #a3ffb4; */
`

const sharedStyles =`
  border-radius: 8px;
  border: 1px solid lightgray;
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
  color: rgba(37, 62, 95, 1);
  cursor: pointer;
  background-color: #f9f9f9;
  padding: 10px 10px 10px 5px;
  margin: 0 16px;
  height: 40px;
`;

export const Data = styled.input`
 ${sharedStyles}
`;

export const Select = styled.select`
 ${sharedStyles}

  padding: 5px;
  min-width: 100px;
  font-size: 13px;
  min-height: 40px;
`