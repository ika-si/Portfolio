import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  render(){
    return(
      <div>
        <header>
            <Link to="/">
                <h1>My Notes</h1>
            </Link>
            <nav className="pc-nav">
            <ul>
                <Link to="/Portfolio/">
                    <li>Portfolio</li>
                </Link>
                <Link to="/About/">
                    <li>About</li>
                </Link>
            </ul>
            </nav>
        </header>
      </div>
    )
  }
}

export default Navbar;