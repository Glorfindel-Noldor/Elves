import React from "react";
import { useOutletContext } from "react-router-dom";

function Elf() {
  const {setSearch, search} = useOutletContext();


  return (
    <>
        <small>List of Elves!</small>
        <br/>
        <input 
          value={search}
          type="text" 
          onChange={(e)=>setSearch(e.target.value)}
          placeholder="search"
        /> 

    </>
  );
}

export default Elf;
