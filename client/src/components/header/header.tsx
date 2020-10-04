import React from 'react';

import '../header/header.css';
import SearchBar from '../search-bar';

const Header = () => {
    return (
        <div className="header">
            <SearchBar />
        </div>
    );
}

export default Header;
