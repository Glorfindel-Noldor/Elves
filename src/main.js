import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
const api = "http://localhost:8000/Elves"

function Main(){
    const [search, setSearch] = useState('');

    const [Name, setName]=useState('');
    const [Description, setDescription]=useState('');
    const [Group, setGroup]= useState('');
    const [id, setId]=useState()

    



    useEffect(()=>{
        fetch(api)
        .then((res)=>(res.json()))
        .then((data)=>{
            setName(data.Name);
            setDescription(data.Description);
            setGroup(data.Group);
            setId(data.id);
        })
        .catch((error)=>(console.log(error)))
    },[])

    return(
        <>
            <NavBar/>
            <h1>Main</h1>
            <hr/>
            <Outlet context={{
                id,
                api, 
                search,
                setSearch,
                Name,
                Group,
                Description,
                setName,
                setGroup,
                setDescription
            }}/>

        </>
    )
}
export default Main;
