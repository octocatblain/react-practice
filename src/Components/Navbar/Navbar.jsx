import "./Navbar.css"

import {Link} from "./react-roter-dom"

const Navbar = () => {
    return (
        <header >
            <div className="navbar">
                <p className="logo">E Corp</p>
                <ul className='nav_menu'>
                    <li className="nav_item"><Link to="/">Home</Link></li>
                    <li className="nav_item"><Link to="/about">About</Link></li>
                    <li className="nav_item"><Link to="/contact">Contact</Link></li>
                    <li className="nav_item"><Link to="/blog">Blog</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar
