import { createRootRoute, Outlet } from "@tanstack/react-router";
import Navbar from "src/components/Navbar";
import Header from "src/components/Header";
import PageWrapper from "src/components/PageWrapper";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return <main className="flex flex-col w-screen h-screen overflow-hidden">
    <Header />
    <div className="flex flex-row w-full h-full">
      <Navbar links={primaryNavigationLinks} type='primary' />
      <Navbar links={secondaryNavigationLinks} type='secondary'/>
      <PageWrapper>
        <Outlet />
      </PageWrapper>
    </div>
  </main>;
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
  },
];

const secondaryNavigationLinks = [
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
