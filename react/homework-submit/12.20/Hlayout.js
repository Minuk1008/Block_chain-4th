import { Outlet, Link } from "react-router-dom";

function Hlayout() {
    return(
        <>
            <form>
                        <Link to = "/home">Home</Link>
                        <Link to = "/login">Login</Link>
                        <Link to = "/calc">Calculate</Link>
                        <Link to = "/class">Class</Link>
            </form>

            <Outlet />
        </>
    )
}

export default Hlayout;