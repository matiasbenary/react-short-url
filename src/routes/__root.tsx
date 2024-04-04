import { Toaster } from "@/components/ui/toaster";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
const activeProps = {
  style: {
    fontWeight: "bold",
  },
};
export const Route = createRootRoute({
  component: () => (
    <>
    <Toaster />
    <main className="container">
         <ul>
        <li>
          <Link to="/" activeProps={activeProps}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/login" activeProps={activeProps}>
            {({ isActive }) => <>Login {isActive && "~"}</>}
          </Link>
        </li>
        <li>
          <Link to="/addLink" activeProps={activeProps}>
            {({ isActive }) => <>AddLink {isActive && "~"}</>}
          </Link>
        </li>
      </ul>
    <div className="py-5 flex justify-center">
    
    <Outlet />

 
  </div>
  </main>
  </>
  ),
});