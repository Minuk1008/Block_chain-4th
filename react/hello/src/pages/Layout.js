import {Outlet, Link} from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to = "/">Home</Link>
                    </li>
                    <li>
                        <Link to = "/blogs">Blog</Link>
                    </li>
                    <li>
                        <Link to = "/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />  {/* Outlet은 중첩된 내용을 가지고 올 수 있다 */}
        </>
    )
}

export default Layout;