import React from "react";
import '../scss/SearchBox.scss';
import { ReactComponent as InputIcon } from '../assets/InputIcon.svg';
import { ReactComponent as Frame } from '../assets/Frame 39483.svg';
const SearchBar = (props) => {
    return (
        <>
            <div className="searchbox">
                <InputIcon className="search-input" />
                <input placeholder='Search'></input>
                <Frame className="search-close" onClick={props.setsearch} />{/*using a function that is passed through props */}
            </div>
        </>
    )
}
export default SearchBar;