import styled from 'styled-components';

export const Wrapper = styled('div')`
    width: 430px;
    height: 414px;
    margin: 0 auto;

    /* outline: 1px solid #1890FF; */
  
`

export const Title = styled.h2`
    font-size: 38px;
    font-weight: 500;
    text-align: center;
    color: black;
`

export const Description = styled.p`
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    color: #8C8C8C;
    margin-top: 16px;
`

export const InputWrapper = styled.div`
    display: block;
    width: 100%;
    height: 82px;
    padding: 5px;
    margin-top: 20px;
`
export const Label = styled.label`
    display: block;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
    color: #1F1F1F;
    span{
        color: #F5222D;
    }
`

export const Input = styled.input`
    display: block;
    margin-top: 6px;
    width: 420px;
    height:48px;
    padding: 5px 10px;
    border-radius: 8px;
    border: 1px solid #D0D7DE;
    font-size: 16px;
    color: #929FAF;
`



export const LinkReset = styled.a`
    display: block;
    color: #8C8C8C;
    text-align: center;
    margin-top: 10px;
    font-weight: 500;
    font-size: 14px;
    color: white;
    text-decoration: none;
`
export const Button = styled.button`
    background-color: #2F54EB;
    color: #FFFFFF;
    width: 100%;
    height: 48px;
    margin-top: 50px;
    font-size: 16px;
    font-weight: 500;
    border-radius: 5px;
`