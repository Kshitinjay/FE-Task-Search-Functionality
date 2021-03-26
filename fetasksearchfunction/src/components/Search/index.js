import React from 'react'
import "./search.css";
const Search = ({item,handleChange}) => {
    return (
        <div>
            <input type="text" value={item} onChange={(event)=>handleChange(event)}/>
        </div>
    )
}
export default Search;
