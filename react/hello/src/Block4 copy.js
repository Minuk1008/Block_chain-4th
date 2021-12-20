import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Nopage from "./pages/Nopage";

export default function Block4() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<Layout />}>
                    <Route index element = {<Home />} />
                    <Route path = "blogs" element = {<Blogs />} />
                    <Route path = "contact" element = {<Contact />} />
                    <Route path = "*" element = {<Nopage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}