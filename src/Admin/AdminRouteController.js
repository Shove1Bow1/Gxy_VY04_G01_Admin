import React from "react";
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Login from "./Login/Login.js";
import Manager from "./Manager";
function Render(){
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/*" element={<Manager />} />
        </Routes>
    )
}
export default Render;