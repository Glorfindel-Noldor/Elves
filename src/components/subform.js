import React from "react";
import { useOutletContext } from "react-router-dom";

function SubForm() {
  const {
    api, 
    Name,
    Group,
    Description,
    setName,
    setGroup,
    setDescription
  } = useOutletContext();


  const handleSubmit = (e) => {
    e.preventDefault();

    if(!Name || !Group || !Description){
      return alert('no empty spaces !')
    }

    const elvenNameJSON = {
      "Name": Name,
      "Group": Group,
      "Description": Description,
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
      .then((newElf) =>{
        setName(newElf.Name);
        setGroup(newElf.Group);
        setDescription(newElf.Description);
        setName('');
        setGroup('');
        setDescription('');
      })
      .catch((error) =>  console.log(error.toString()))
     

  };

  return (
    <form onSubmit={handleSubmit} >
      <input
        value={Name ?? ''}
        onChange={(e)=>setName(e.target.value)}
        name="Name"
        type="text"
        placeholder="name"
      />
      <input
        value={Group ?? ''}
        onChange={(e)=>setGroup(e.target.value)}
        name="Group"
        type="text"
        placeholder="group"
      />
      <input
        value={Description ?? ''}
        onChange={(e)=>setDescription(e.target.value)}
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
