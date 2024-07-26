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
    /* flex-direction: column; */
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
export const SidebarListLi = styled.li`
width: 100%;
height: 44px;
padding: 5px;
display: flex;
justify-content:  space-around;
align-items: center;

&:hover {
    cursor: pointer;
    background-color: #253E5F;
}
`

export const Settings = styled.div`
    width: 100%;
    height: 44px;
    padding: 5px;
    margin-top: 20px;
    display: flex;
    justify-content:  space-around;
    align-items: center;

    &:hover {
    cursor: pointer;
    background-color: #253E5F;
}


/* outline: 1px solid white; */
`
