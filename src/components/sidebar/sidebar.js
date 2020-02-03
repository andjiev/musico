import React from 'react'
import '../sidebar/sidebar.css';

import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import logo from '../../assets/logo-white.png';

// because of the `@trendmicro/react-sidenav` that doesn't support typescript
// we are keeping this component as javascript
const Sidebar = () => {
    return (
        <SideNav
            onSelect={(selected) => {
                // Add your code here
            }}
        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home">
                    <NavIcon>
                        <i className="fa fa-search" style={{ fontSize: '1.5em' }} />
                    </NavIcon>
                    <NavText>
                        Explore
                </NavText>
                </NavItem>
                <NavItem eventKey="favourites">
                    <NavIcon>
                        <i className="fa fa-star-o" style={{ fontSize: '1.5em' }} />
                    </NavIcon>
                    <NavText>
                        Favourites
                </NavText>
                </NavItem>
                <NavItem eventKey="popular">
                    <NavIcon>
                        <i className="fa fa-fire" style={{ fontSize: '1.5em' }} />
                    </NavIcon>
                    <NavText>
                        Popular
                </NavText>
                </NavItem>
                <img src={logo} className="logo" alt="Logo" />
            </SideNav.Nav>
        </SideNav>
    );
}

export default Sidebar;
