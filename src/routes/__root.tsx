import { createRootRoute, Outlet } from "@tanstack/react-router";
import Navbar from "src/components/Navbar";
import Header from "src/components/Header";

const props = {
  links: [
    {
      label: 'HOME',
      to: '/'
    },

    {
      label: 'ABOUT',
      to: '/about',
     },
    {
      label: 'LOGIN',
      to: '/login',
    }
  ],
};

const props2 = {
  links: [
    {
      label: 'Home',
      to: '/'
    },

    {
      label: 'About',
      to: '/about',
     },
    {
      label: 'Login',
      to: '/login',
    }
  ],
};

export const Route = createRootRoute({

     component: () => (
          <div className="flex gap-2 h-screen ">
               <Navbar {...props} />
               <Navbar {...props2} />
               <main >
                    <Header />
                    <Outlet />
               </main>
          </div>
     ),
})