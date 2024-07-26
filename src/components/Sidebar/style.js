import styled from 'styled-components';

export const SidebarDiv = styled.div`
width: 280px;
height: 100vh;
background-color: #162539;
color: white;
`

export const LogoSidebar =styled.div`
    width: 100%;
    height: 80px;
    color: #1890FF;
    border-bottom: 1px solid #253E5F;
    font-size: 20px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SidebarList = styled.ul`
    height: 330px;
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-bottom: 1px solid #253E5F;
    padding-bottom: 10px;
`

const commonLi = `
        width: 100%;
        height: 44px;
        padding: 5px;
        display: flex;
        justify-content:  space-around;
        align-items: center;
        transition: all .8s ease;
`

const commonSpan = `
    display: flex;
    justify-content:  center;
    align-items: center;
    width: 20px;
    height: 20px;
`

const commonHover = `
        cursor: pointer;
        background-color: #253E5F;
        color: #1890FF;
`

export const SidebarListLi = styled.li`
   ${commonLi}
    /* border: 1px solid white; */
p {
    width: 60%;
}
span {
    ${commonSpan}
    /* outline: 1px solid red; */
}

&:hover {
   ${commonHover};
}
`

export const Settings = styled.div`
   ${commonLi}
    margin-top: 20px;

p{
    width: 60%;
}

span {
    ${commonSpan}
    /* outline: 1px solid red; */
}

&:hover {
    ${commonHover};
}
`
