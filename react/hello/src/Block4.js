import React, {useState} from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

export default function Block4() {
    return (
        <div>
            <Route path="/" component = {Home}/>
            <Route path="/About" component = {About}/>
        </div>
    )
}