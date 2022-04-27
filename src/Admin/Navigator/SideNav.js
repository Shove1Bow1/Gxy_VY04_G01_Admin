import React from "react";
import {  Link  } from "react-router-dom";
const TopNav=()=>{
    
    return (
        <ul className="list-group" style={{textAlign:"start"}}>
            <Link to="/Admin/Rules" style={{ color: "black" }} className="pathName"><li className="list-group-item list-group-item-action"> Rules</li></Link>
            <Link to="/Admin/Services" style={{ color: "black" }} className="pathName"><li className="list-group-item list-group-item-action"> Services</li></Link>
        </ul>
    )
}
export default TopNav;