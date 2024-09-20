import { createRootRoute, Link, Outlet, useAwaited } from "@tanstack/react-router";
import Navbar from "../components/Navbar";

export const Route = createRootRoute({

     component: () => (
          <>
               <header className="border-4 border-slate-600 rounded-md mb-2 flex items-center">
                    <img src="src\assets\react.svg" className="p-2"></img>
                    <h1 className="text-3xl">My company</h1>
               </header>
               <main className="flex gap-2 h-screen ">
                    <Navbar />
                    <Outlet />
               </main>
          </>
     ),
})