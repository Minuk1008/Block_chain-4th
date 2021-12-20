import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hlogin from "./pages/Hlogin"
import Hcalc from "./pages/Hcalc"
import Hclass from "./pages/Hclass"
import Hlayout from "./pages/Hlayout"
import Hhome from "./pages/Hhome"

function Homework20() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/" element ={<Hlayout />}>
                <Route path = "home" element ={<Hhome />} />
                <Route path = "login" element ={<Hlogin />} />
                <Route path = "calc" element ={<Hcalc />} />
                <Route path = "class" element ={<Hclass />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Homework20;