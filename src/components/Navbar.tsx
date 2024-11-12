import { Link } from "@tanstack/react-router";


interface NavbarProps {
  readonly links: NavbarLink[];
  readonly type: 'primary' | 'secondary';
}

interface NavbarLink {
  readonly label: string;
  readonly to: string;
}

export default function Navbar({ links, type }: NavbarProps) {
  const navClass = type === 'primary' ? 'bg-secondary-600' : 'bg-secondary-300';

  return (
    <nav className={`w-[200px] ${navClass}`}>
      <ul className="p-2">
        {links.map((link) =>
          <li key={link.to}>
            <Link to={link.to} className="uppercase">{link.label}</Link>
          </li>
        )}
      </ul>
    </nav>
  )
}
