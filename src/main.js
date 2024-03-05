import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
const api = "http://localhost:8000/Elves"

function Main(){
    const [search, setSearch] = useState('');
    const [elves, setElves] = useState([]);
    //states of each input 


    useEffect(()=>{
        fetch(api)
        .then((res)=>(res.json()))
        .then((data)=>(setElves(data)))
        .catch((error)=>(console.log(error)))
    },[])

    const deleteElf = (id)=>{
        const removed = elves.filter((elf)=>( elf.id !== id ))
        setElves(removed)
    }


    return(
        <>
            <NavBar/>
            <h1>Main</h1>
            <hr/>
            <Outlet context={{
                api, 
                elves,
                search,
                setElves, 
                setSearch,
                deleteElf
            }}/>

        </>
    )
}
export default Main;
