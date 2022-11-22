import React from 'react'
import SidebarMenu from 'react-bootstrap-sidebar-menu';

function SideNav() {
  return (
    
    <SidebarMenu>
      <SidebarMenu.Header>
        <SidebarMenu.Brand>
          {/* Your brand icon */}
        </SidebarMenu.Brand>
        <SidebarMenu.Toggle />
      </SidebarMenu.Header>
    </SidebarMenu>
  )
}

export default SideNav