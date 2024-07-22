import "./Navbar.css"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div id="navbar-wrapper">
    <div id="links-wrapper">
        <Link to="/" className="nav-links">Home</Link>
        <Link to="/about" className="nav-links">About</Link>
        <Link to="/projects" className="nav-links">Projects</Link>
        <Link to="/path" className="nav-links">Career Path</Link>

    </div>
    </div>
  )
}

export default Navbar