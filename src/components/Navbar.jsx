import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <Link to="/" className="logo">
        DEV@Deakin
      </Link>

      <input
        type="text"
        placeholder="Search..."
        className="search-box"
      />

      <div className="nav-links">
        <a href="/#about">About</a>
        <a href="/#work">Work</a>
        <a href="/#contact">Contact</a>
        <Link to="/post">Post</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </nav>
  )
}

export default Navbar