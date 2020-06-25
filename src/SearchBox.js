import React from 'react';

const searchBox = ({ searchField, searchChange }) => {
    return(
        <div className="pa2">
            <input 
            className="pa3 ba b--red bg-lightest-blue" 
            type="search" 
            placeholder="Search Robots"
            onChange={searchChange} 
            />
        </div>
    );
}

export default searchBox;