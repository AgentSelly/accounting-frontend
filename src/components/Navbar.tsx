import { Link } from "@tanstack/react-router";


interface NavbarProps {
  readonly links: NavbarLink[];
}

interface NavbarLink {
  readonly label: string;
  readonly to: string;
}

export default function Navbar(props: NavbarProps) {

  const listItems = props.links.map(link =>
    <li><Link to={link.to}>{link.label}</Link></li>
  );

  return (
    <nav className="border-4 border-blue-400 w-1/6 rounded-md">
      <ul className="p-2">
        {listItems}
      </ul>
    </nav>
  )  
}

