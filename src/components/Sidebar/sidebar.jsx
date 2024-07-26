import {SidebarDiv, LogoSidebar, SidebarList, SidebarListLi, Settings} from './style'
import Profile from './Profile/profile'

function Sidebar() {
  return (

        <SidebarDiv>
            <LogoSidebar>Webbrain.crm</LogoSidebar>
            <Profile />
            <SidebarList>
                <SidebarListLi><i></i> Anlitika <i></i></SidebarListLi>
                <SidebarListLi><i></i> Buyurtma <i></i></SidebarListLi>
                <SidebarListLi><i></i> Moliya <i></i></SidebarListLi>
                <SidebarListLi><i></i> Talaba <i></i></SidebarListLi>
                <SidebarListLi><i></i> Guruhlar <i></i></SidebarListLi>
                <SidebarListLi><i></i> Kurslar <i></i></SidebarListLi>
                <SidebarListLi><i></i> HR <i></i> </SidebarListLi>
            </SidebarList>
            <Settings><i></i> Sozlamalar <i></i></Settings>
        </SidebarDiv>




  )
}

export default Sidebar