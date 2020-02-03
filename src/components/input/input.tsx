import React from 'react';

import '../input/input.css';

const Input = () => {
    return (
        <div className="searchBar">
            <input type="text" placeholder="Search.." name="search" ></input>
            <span className="buttonSubmit">
                <button type="submit"><i className="fa fa-search"></i></button>
            </span>
        </div>
    );
}

export default Input;
