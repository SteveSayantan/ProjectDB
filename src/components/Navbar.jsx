import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return <nav >
        <div className="navbar max-w-7xl mx-auto">
            <ul className="navbar-start">
                <div className="dropdown">
                    <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex="0"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-72 p-2 shadow">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li>
                            <NavLink to='/gallery'>Gallery</NavLink>
                        </li>
                        <li><NavLink to='/about'>About</NavLink></li>
                        <li><NavLink to='/login'>Login</NavLink></li>
                        <li>
                            <details>
                                <summary>Dashboard</summary>
                                <ul className="p-2">
                                    <li><NavLink to='/projects'>Projects</NavLink></li>
                                    <li><NavLink to='/users'>Users</NavLink></li>
                                    <li><NavLink to='/profile'>Profile</NavLink></li>
                                </ul>
                            </details>
                        </li>

                        <li><button className="btn btn-sm btn-primary">Logout</button></li>
                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl" to='/'>ProjectDB</Link>
            </ul>
            <ul className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li>
                        <NavLink to='/gallery'>Gallery</NavLink>
                    </li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/login'>Login</NavLink></li>
                    <li>
                        <details>
                            <summary>Dashboard</summary>
                            <ul className="p-2">
                                <li><NavLink to='/projects'>Projects</NavLink></li>
                                <li><NavLink to='/users'>Users</NavLink></li>
                                <li><NavLink to='/profile'>Profile</NavLink></li>
                            </ul>
                        </details>
                    </li>

                    <li><button className="btn btn-sm btn-primary">Logout</button></li>
                </ul>
            </ul>
        </div>
    </nav>
}

export default Navbar;