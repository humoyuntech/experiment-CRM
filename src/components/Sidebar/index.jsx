import {Container, SidebarContainer, SidebarList, SidebarListLi, Submenu, Wrapper, Exet} from './style'
import Profile from './Profile/profile'
import sidebar from '../../utils/sidebar'
import { useState } from 'react'
import ExetIcan from '../../assets/icons/exit.svg?react'
function Sidebar() {
  const [open, setOpen] = useState([]);

  const onOpen = (id) =>{
    if(open.includes(id)) {
      let res = open.filter((val) => val !== id);
      setOpen(res);
    } else {
      setOpen([...open, id])
    }
  }

  return (
    <Container>
        <SidebarContainer>
            {/* <LogoSidebar>Webbrain.crm</LogoSidebar> */}
            <Profile />
            <SidebarList>
                {sidebar.map((item) => {
                  return(
                    <div key={item.id}>
                     <SidebarListLi className={null || item.className} onClick={() => onOpen(item.id)}>
                          <span className={item.icon}></span>  <p>{item.title}</p> {item?.children && <span className='icon-arrow-right'></span> || <span></span>}
                     </SidebarListLi>
                     {
                      item?.children && (
                        <Wrapper open={open.includes(item.id)}> 
                          {item.children.map((child) => {
                            return <Submenu key={child.id}>{child.title}</Submenu>
                          })}
                        </Wrapper>)
                     }

                    </div>
                  )
                })}
            </SidebarList>
        </SidebarContainer>
        <Exet><ExetIcan /><p>Chiqish</p> <span></span> </Exet>
  </Container>
  )
}

export default Sidebar