import { createRootRoute, Link, Outlet, useAwaited } from "@tanstack/react-router";

export const Route = createRootRoute({

     component: () => (
          <>
               <header className="border-4 border-slate-600 rounded-2xl mb-2 flex items-center">
                    <img src="src\assets\react.svg" className="p-2"></img>
                    <h1>My company</h1>
               </header>
               <div className="flex gap-2 h-screen ">
                    <nav className="border-4 border-blue-400 w-1/6 rounded-2xl">
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

                    <nav className="border-4 border-orange-400 w-1/6 rounded-2xl">
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

                    <main>
                         <Outlet />
                    </main>
               </div>
          </>
     ),
})