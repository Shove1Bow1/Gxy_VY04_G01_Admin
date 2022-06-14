import React from "react";
import {  Link  } from "react-router-dom";
const TopNav=()=>{
    
    return (
        <ul className="list-group" style={{textAlign:"start"}}>
            <Link to="/Rules" style={{ color: "black",textDecoration:"none" }} className="pathName"><li className="list-group-item list-group-item-action"> Rules</li></Link>
            <Link to="/Services" style={{ color: "black",textDecoration:"none" }} className="pathName"><li className="list-group-item list-group-item-action"> Services</li></Link>
            <Link to="/changePassword" style={{ color: "black",textDecoration:"none" }} className="pathName"><li className="list-group-item list-group-item-action"> Change Password</li></Link>
        </ul>
    )
}
export default TopNav;