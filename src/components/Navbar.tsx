import { Link } from "@tanstack/react-router";

export default function Navbar({ }) {
  return (
    <nav className="border-4 border-blue-400 w-1/6 rounded-md">
      <ul className="p-2">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li>
          <details>
            <summary><Link to="/">Drop down</Link></summary>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li>
        <li><Link to="/login">LOGIN</Link></li>
      </ul>
    </nav>
  )
}