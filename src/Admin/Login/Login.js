import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Route,Routes, useNavigate } from "react-router-dom";
import Login from "../img/DangNhap.png"
import {useCookies} from 'react-cookie'
const LoginPage = () => {
    const navigate=useNavigate(); 
    const [getAdmin,setAdmin]=useState([]);
    const [getAdminName, setAdminName] = useState("");
    const [getAdminPassword, setAdminPassword] = useState("");
    const [getCookies,setCookies]=useCookies();
    var Admin; 
    function AdminLogin(){
        axios.post("https://gxyvy04g01backend-production.up.railway.app/Admin/Login",{
            ADMIN_NAME:getAdminName,
            ADMIN_PASSWORD:getAdminPassword
        }).then(res=>{
                if(res.data.STATUS){
                    setCookies("Admin",res.data.TOKEN);
                    navigate("/Home");
                }
            ;}
        )
    }
        return (
            <div style={{ display: "flex", justifyContent: "center", width: 100 + "%", height: 100 + "%" }}>
                <form style={{ width: 40 + "%", height: 50 + "%", border: 2 + "px solid black", padding: 12 + "px", marginTop: 200 + "px" }}>
                    <img src={Login} alt={"login"} style={{ width: 30 + "%", height: 30 + "%", marginLeft: 35 + "%" }} />
                    <div className="form-group" style={{ marginTop: 5 + "px",textAlign:"start" }}>
                        <label>Admin</label>
                        <input type="text" value={getAdminName} onChange={(e) => setAdminName(e.target.value)} className="form-control" placeholder="Enter Admin name" />
                    </div>
                    <div className="form-group" style={{ marginTop: 5 + "px",textAlign:"start" }}>
                        <label>Password</label>
                        <input type="password" value={getAdminPassword} onChange={(e) => setAdminPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div style={{ textAlign: "end", marginTop: 5 + "px" }}>
                        <input type="button" onClick={AdminLogin} className="btn btn-primary" style={{ background: "blue" }} value="Sign In" />
                    </div>
                </form>
            </div>
        )
}
export default LoginPage;