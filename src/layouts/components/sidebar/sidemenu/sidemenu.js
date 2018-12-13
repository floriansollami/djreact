// import external modules
import React, { Component } from "react";

import {
   Home,
   MessageSquare,
   ChevronRight,
   Music
} from "react-feather";
import { NavLink } from "react-router-dom";

// Styling
import "../../../../assets/scss/components/sidebar/sidemenu/sidemenu.scss";
// import internal(own) modules
import SideMenu from "../sidemenuHelper";

class SideMenuContent extends Component {
   render() {
      return (
         <SideMenu className="sidebar-content" toggleSidebarMenu={this.props.toggleSidebarMenu}>
            <SideMenu.MenuSingleItem name="Dashboard">
               <NavLink to="/" activeclassname="active">
                  <i className="menu-icon">
                     <Home size={18} />
                  </i>
                  <span className="menu-item-text">Accueil</span>
               </NavLink>
            </SideMenu.MenuSingleItem>

            <SideMenu.MenuMultiItems
               name="Playlistes"
               badgeColor="success"
               Icon={<Music size={18} />}
               ArrowRight={<ChevronRight size={16} />}
               collapsedSidebar={this.props.collapsedSidebar}
            >
               <NavLink to="/cards/basic-card" className="item" activeclassname="active">
                  <span className="menu-item-text">Favoris</span>
               </NavLink>
               <NavLink to="/cards/extended-card" className="item" activeclassname="active">
                  <span className="menu-item-text">Playlist rap</span>
               </NavLink>
            </SideMenu.MenuMultiItems>

            <SideMenu.MenuSingleItem>
               <NavLink to="/chat" activeClassName="active">
                  <i className="menu-icon">
                     <MessageSquare size={18} />
                  </i>
                  <span className="menu-item-text">Chat</span>
               </NavLink> 
            </SideMenu.MenuSingleItem>

         </SideMenu>
      );
   }
}

export default SideMenuContent;