import React, {useState} from "react";
import {BrowserRouter, Routes ,Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./pages/Layout";

export default function Block4() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element = {<Layout />}/>
                    <Route index element = {<Home />}/>
                    <Route path="/about" element = {<About />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}