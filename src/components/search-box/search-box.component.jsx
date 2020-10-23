import React from 'react';

import './search-box.styles.css';

export const SearchBox = props => {
    return (
        <input 
            className="search-box"
            type="search" 
            placeholder={props.placeholder}
            onChange={props.searchHandler}>
        </input>
    )
}