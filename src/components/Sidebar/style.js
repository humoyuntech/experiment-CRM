import styled from 'styled-components';

export const Container = styled.div`
height: 100vh;
width: 280px;
background-color: #162539;
color: white;
position: relative;

display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center


`
export const SidebarContainer = styled.div`
width: 100%;
flex-grow: 1;
overflow-y: scroll;
scrollbar-width: none;
`


/* export const LogoSidebar =styled.div`
    width: 100%;
    height: 50px;
    color: #1890FF;
    border-bottom: 1px solid #253E5F;
    font-size: 20px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
` */

export const SidebarList = styled.ul`
    height: 330px;
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    /* border-bottom: 1px solid #253E5F; */
    /* padding-bottom: 10px; */

    .settings {
        border-top: 1px solid #253E5F;
        margin-top: 15px;
        padding-top: 30px;
        padding-bottom: 15px;
    }
`
export const Wrapper =styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 30px;
    height: ${({open}) => (open ? "fit-content" : "0px")};
    overflow: hidden;
    /* border: 1px solid whitesmoke; */
`

export const Submenu =styled.div`
    display: flex;
    padding: 10px;
    width: 100%;
`

const commonLi = `
        width: 100%;
        height: 30px;
        padding: 5px;
        margin-top: 5px;
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
export const Exet = styled.li`
   ${commonLi}
   height: 50px;
    border: 1px solid white;
p {
    width: 60%;
}

&:hover {
   ${commonHover};
}

  margin-top: auto;
  width: 100%;
  position: sticky;
  bottom: 0px;
  border-top: 1px solid rgb(222, 225, 227);



`
