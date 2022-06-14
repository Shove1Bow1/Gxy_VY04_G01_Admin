import React,{Children, useState} from "react";
import {BrowserRouter as Router,Routes,Route, useNavigate, Navigate } from "react-router-dom";
import Login from "./Admin/Login/Login.js";
import Manager from "./Admin/Manager";
import {useCookies} from 'react-cookie';
import axios from "axios";
function Render(){
    const [getCookies]=useCookies();
    const [getStatus,checkStatus]=useState(false);
    function ConfirmSession(){

    }
    function AuthRoute({children}){
        if(getCookies.Admin){
            return children;
        }
        return <Navigate to='/Login'/>
    }
    return(
        <Router>
            <Routes>
                <Route path="/Login" element={
                    <Login />
                } />
                <Route path="/*" element={
                    <AuthRoute>
                        <Manager />
                    </AuthRoute>
                } />
            </Routes>
        </Router>
    )
}
export default Render;