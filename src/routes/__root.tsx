import { createRootRoute, Outlet } from "@tanstack/react-router";
import Navbar from "src/components/Navbar";
import Header from "src/components/Header";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return <div className="flex gap-2 h-screen ">
    <Navbar links={primaryNavigationLinks} />
    <main >
      <Header />
      <Outlet />
    </main>
  </div>;
}

const primaryNavigationLinks = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'About',
    to: '/about',
  },
  {
    label: 'Login',
    to: '/login',
  }
];
