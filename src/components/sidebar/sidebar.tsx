import React from 'react'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '../sidebar/sidebar.css';
import logo from '../../../public/logo-white.png';

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
            <img src={logo} className="logo" alt="Logo"/>
    </SideNav.Nav>
    </SideNav>
    )
}

export default Sidebar;
