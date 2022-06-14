import React from "react";
import "./nav.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
const TopNav=()=>{
    const navigate=useNavigate();
    const [getCookies,setCookies,deleteCookies]=useCookies();
    function Logout(){
        deleteCookies('Admin');
    }
    return (
        <div className="TopNav container-fluid">
            <div className="row">
                <div className="col-sm-1">
                    <h5>Admin</h5>
                </div>
                <div className="col-sm" style={{ textAlign: "end", textDecoration:"inherit"}}>
                    <a href="/Login" onClick={()=>Logout()} style={{textDecoration:"none"}}>
                        <h5><span><i className="fa fa-power-off" aria-hidden="true"></i> Log out</span></h5>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default TopNav;