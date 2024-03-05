import React from "react";
import { useOutletContext } from "react-router-dom";

function Elf() {
  const {setSearch, elves, search} = useOutletContext();
  const filteredElves = elves.filter((elf)=>{
    return (
      elf.Name.toLowerCase().includes(search.toLocaleLowerCase()) ? true : false 
    )
  })
  

  return (
    <>
        <small>List of Elves!</small>
        <br/>
        <input type="text" onChange={(e)=>setSearch(e.target.value)} placeholder="search"/> 
      {filteredElves.map((elf)=>{
        return(
          <p key={elf.id}>{elf.Name}</p>
        )
      })}
    </>
  );
}

export default Elf;
