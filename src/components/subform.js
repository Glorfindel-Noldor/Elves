import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

function SubForm() {
  const { api, elves, setElves } = useOutletContext();
  


  const handleChange = (e)=>{
    e.preventDefault();
    setElves({
      ...elves,
      [e.target.name] : e.target.value
    })

  }



  const handleSubmit = (e) => {
    e.preventDefault();

    const elvenNameJSON = {
      Name: elves.Name,
      Group: elves.Group,
      Description: elves.Description,
    };

    const post = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(elvenNameJSON),
    };

    fetch(api, post)
      .then((res) => res.json())
      .then((newElf) => setElves([...elves, newElf]))
      .catch((error) =>  console.log(error.toString()))

    // setElves({
    //   Name: "",
    //   Group: "",
    //   Description: "",
    // })
  };

  return (
    <form onSubmit={handleSubmit} >
      <input
        value={elves.Name}
        onChange={handleChange}
        name="Name"
        type="text"
        placeholder="name"
      />
      <input
        value={elves.Group} // from here 
        onChange={handleChange}// value state that are 
        name="Group"
        type="text"
        placeholder="group"
      />
      <input
        value={elves.Description}
        onChange={handleChange}
        name="Description"
        type="text"
        placeholder="Description"
      />
      <br/>
      <button className="glass" type="submit">add name</button>
    </form>
  );
}

export default SubForm;
