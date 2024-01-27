import "./Navbar.css"

const Navbar = () => {
    return (
        <header >
            <div className="navbar">
                <p className="logo">E Corp</p>
                <ul className='nav_menu'>
                    <li className="nav_item">Home</li>
                    <li className="nav_item">About</li>
                    <li className="nav_item">Contact</li>
                    <li className="nav_item">Blog</li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar
