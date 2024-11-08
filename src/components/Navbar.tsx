import { Link } from "@tanstack/react-router";


interface NavbarProps {
  readonly links: NavbarLink[];
}

interface NavbarLink {
  readonly label: string;
  readonly to: string;
}

export default function Navbar(props: NavbarProps) {
  return (
    <nav className="w-[200px]">
      <ul className="p-2">
        {props.links.map((link) =>
          <li key={link.to}>
            <Link to={link.to} className="uppercase">{link.label}</Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

