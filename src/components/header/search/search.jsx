import React from 'react';
//import { useState, useEffect } from 'react';
import { SearchBlock } from './search.styled';
//import { userData } from '../../../data/data';
//import { Outlet } from "react-router-dom";

export const Search =() => {
  /* const [searchText, setSearchText] = useState(''); */
  /* const [user, setUser] = useState([]); */
  /* const handleSearch = (e) => { */
  /*   setSearchText(e.target.value); */
  /* }; */
  /* const handleSearchArray = () => { */
  /*   setUser(userData.filter((p) => p.id.includes(searchText) || p.label.includes(searchText))) */
  /* } */
  /* useEffect(() => { */
  /*   setUser(userData) */
  /* }, []); */
  return (
    <SearchBlock>
      <input placeholder='Search'/>
      {/* <button type="submit" ></button> */}
    </SearchBlock>
  );
}

