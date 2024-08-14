import styled from "styled-components";
export const Container = styled.div`
width: 970px;
height: 465px;

background-color: #fff;
margin-top: 16px;
margin-left: 16px;
`

export const Title =  styled.div`
    width: 100%;
    height: 76px;
    border-radius: 8px 8px 0px 0px;
    background: #F0F5FF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    h2{
        font-size: 20px;
    }
`
export const WrapperBtns = styled.div`
    width: 300px;

    display: flex;
    justify-content: space-between;
    align-items: center;
` 

export const ImportBtn = styled.button`
 
    height: 54px;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    width: ${(props) => {
        return props.wth
    }};

    margin-left: ${(props) => {
        return props.ml
    }};
    background-color: ${(props) => {
        return props.bg
    }};

    color: ${(props) => {
        return props.cl
    }};

    .plus {
        font-size: 25px;
    }
`

export const Add = styled.div`
    width: 926px;
    height: 70px;
    margin-left: 24px;
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
`
export const AddItem = styled.div`
    width: fit-content;
    height: 100%;
    color: rgba(37, 62, 95, 0.50);
    padding: 5px;

    p{
        margin-bottom:4px ;
    }


        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        text-align: left;


`

export const Select = styled.select`
  border-radius: 8px;
  border: 1px solid lightgray;
  font-size: 16px;
  font-weight: 500;
  color: rgba(37, 62, 95, 1);
  cursor: pointer;
  background-color: #f9f9f9;
  padding: 10px 10px 10px 5px;
  width: 140px;
  height: 40px;

  font-size: 15px;
`
