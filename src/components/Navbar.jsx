import { Link, NavLink } from "react-router-dom";
import { FiAlignLeft } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../features/userSlice";

const links = {
    public: [
        {
            id: 1,
            name: "home",
            path: "/"
        },
        {
            id: 2,
            name: "gallery",
            path: "/gallery"
        },
        {
            id: 3,
            name: "about",
            path: "/about"
        },
        {
            id: 4,
            name: "login",
            path: "/login"
        }
    ],
    dashboard: [
        {
            id: 1,
            name: "add project",
            path: "/add-project"
        },
        {
            id: 2,
            name: "projects",
            path: "/projects"
        },
        {
            id: 3,
            name: "users",
            path: "/users"
        },
        {
            id: 4,
            name: "profile",
            path: "/profile"
        }
    ]
}

const Navbar = () => {

    const { user } = useSelector((store) => store.user);
    console.log(user)

    const dispatch=useDispatch()

    return <nav >
        <div className="navbar max-w-7xl mx-auto">
            <ul className="navbar-start">
                <div className="dropdown">
                    <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                        <FiAlignLeft className="h-5 w-5" />
                    </div>
                    <ul tabIndex="0"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-72 p-2 shadow">
                        {
                            links.public.map(({ id, name, path }) => {
                                if (name === 'login' && user) return;
                                return <li key={id} className="capitalize"><NavLink to={path}>{name}</NavLink></li>
                            })
                        }
                        {user &&
                            <>
                                <li>
                                    <details>
                                        <summary>Dashboard</summary>
                                        <ul className="p-2">
                                            {
                                                links.dashboard.map(({ id, name, path }) => {
                                                    if (name === 'add project')
                                                        return <li key={id} className="capitalize"><NavLink to={path}>{name}</NavLink></li>
                                                })
                                            }
                                        </ul>
                                    </details>
                                </li>
                                <li><button className="btn btn-sm btn-primary" onClick={()=>dispatch(logoutUser())}>Logout</button></li>
                            </>
                        }
                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl" to='/'>ProjectDB</Link>
            </ul>
            <ul className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 items-center">
                    {
                        links.public.map(({ id, name, path }) => {
                            if (name === 'login' && user) return;
                            return <li key={id} className="capitalize"><NavLink to={path}>{name}</NavLink></li>
                        })
                    }
                    {user && <>
                        <li>
                            <details className="dropdown dropdown-content">
                                <summary>Dashboard</summary>
                                <ul tabIndex={0} className="p-2 menu w-32 z-[1]">
                                    {
                                        links.dashboard.map(({ id, name, path }) => {
                                            return <li key={id} className="capitalize"><NavLink to={path}>{name}</NavLink></li>
                                        })
                                    }
                                </ul>
                            </details>
                        </li>
                        <li><button className="btn btn-primary btn-sm" onClick={()=>dispatch(logoutUser())}>Logout</button></li>
                    </>}
                </ul>
            </ul>
        </div>
    </nav>
}

export default Navbar;