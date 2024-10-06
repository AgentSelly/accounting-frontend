import { Link } from "@tanstack/react-router";

export default function SecondNavbar({ }) {
  return (
    <nav className="border-4 border-orange-400 w-1/6 rounded-md">
      <ul className="p-2">
        <li><Link to="/">HE</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/login">LOGIN</Link></li>
      </ul>
    </nav>
  )
}
