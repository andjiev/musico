import React from 'react'
import '../sidebar/sidebar.css';
import { NavLink } from 'react-router-dom';

import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import logo from '../../assets/logo-white.png';

// because of the `@trendmicro/react-sidenav` that doesn't support typescript
// we are keeping this component as javascript
const Sidebar = () => {
    return (
        <SideNav>
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home">
                    <NavIcon>
                        <NavLink to="/"><i className="fa fa-search" style={{ fontSize: '1.5em' }} /></NavLink>
                    </NavIcon>
                    <NavText>
                        <NavLink to="/">Explore</NavLink>
                    </NavText>
                </NavItem>
                <NavItem eventKey="favourites">
                    <NavIcon>
                        <NavLink to="/favourites"><i className="fa fa-star-o" style={{ fontSize: '1.5em' }} /></NavLink>
                    </NavIcon>
                    <NavText>
                        <NavLink to="/favourites">Favourites</NavLink>
                    </NavText>
                </NavItem>
                <NavItem eventKey="popular">
                    <NavIcon>
                        <NavLink to="/popular"><i className="fa fa-fire" style={{ fontSize: '1.5em' }} /></NavLink>
                    </NavIcon>
                    <NavText>
                        <NavLink to="/popular">Popular</NavLink>
                    </NavText>
                </NavItem>
                <img src={logo} className="logo" alt="Logo" />
            </SideNav.Nav>
        </SideNav>
    );
}

export default Sidebar;
