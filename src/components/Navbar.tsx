import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar: React.FC = () => {

    return(
        <div>
            <header>
                <Link to="/">
                    <h1>My Notes</h1>
                </Link>
                <nav className="pc-nav">
                <ul>
                    <NavLink to="/Work/" activeClassName="active">
                        <li>Work</li>
                    </NavLink>
                    <NavLink to="/About/" activeClassName="active">
                        <li>About</li>
                    </NavLink>
                </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navbar;