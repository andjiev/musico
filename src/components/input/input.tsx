import React from 'react';
import './input.css';
// import logo from '../../../assets/logo-white.png';
// import {Container,Row,Col} from 'react-bootstrap';
const Input = () => {
    return (
            <div className="searchBar">
                <input type="text" placeholder="Search.." name="search" ></input>
                <span className="buttonSubmit">
                <button type="submit"><i class="fa fa-search"></i></button>
                </span>
            </div>
    )
}

export default Input
