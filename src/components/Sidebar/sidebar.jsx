import {SidebarDiv, LogoSidebar, SidebarList, SidebarListLi, Settings} from './style'
import Profile from './Profile/profile'

function Sidebar() {
  return (

        <SidebarDiv>
            <LogoSidebar>Webbrain.crm</LogoSidebar>
            <Profile />
            <SidebarList>
                <SidebarListLi><span className='icon-diagram'></span> <p>Anlitika </p> <span className='icon-arrow-right'></span></SidebarListLi>
                <SidebarListLi><span className='icon-orders'></span> <p>Buyurtma</p> <span className='icon-arrow-right'></span></SidebarListLi>
                <SidebarListLi><span className='icon-wallet'></span><p> Moliya </p><span className='icon-arrow-right'></span></SidebarListLi>
                <SidebarListLi><span className='icon-education'></span> <p>Talaba</p><span className='icon-arrow-right'></span></SidebarListLi>
                <SidebarListLi><span className='icon-group'></span> <p>Guruhlar</p> <span className='icon-arrow-right'></span></SidebarListLi>
                <SidebarListLi><span className='icon-book'></span><p> Kurslar</p><span className='icon-arrow-right'></span></SidebarListLi>
                <SidebarListLi><span className='icon-work'></span> <p>HR </p><span className='icon-arrow-right'></span> </SidebarListLi>
            </SidebarList>
            <Settings><span className='icon-settings'></span> <p>Sozlamalar</p><span className='icon-arrow-right'></span></Settings>
        </SidebarDiv>




  )
}

export default Sidebar