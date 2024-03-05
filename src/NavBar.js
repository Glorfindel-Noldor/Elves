import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){


    return(
        <nav className="glass" >
            <NavLink to={'/form'}>Go To Form </NavLink>
            <NavLink to={'/elf'}>See Elves</NavLink>
        </nav>
    )
}
export default NavBar;
