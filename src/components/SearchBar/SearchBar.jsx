import React from 'react'
import { BiSearch } from "react-icons/bi";
import './SearchBar.css'

const SearchBar = ({ handleSearchNote }) => {
    return (
        <>
            <h1>Tu app de notas!</h1>
            <div className='search-bar'>
                <BiSearch className='search' />
                <input onChange={(event) => handleSearchNote(event.target.value.toLowerCase())} type="text" placeholder='Buscá por nombre' />
            </div>
        </>
    )
}

export default SearchBar