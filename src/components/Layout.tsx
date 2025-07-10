import { Outlet } from "react-router-dom";
import { SideNav } from "./SideNav";

export const Layout = () => {
  return (
    <main className="w-screen h-screen flex">
      <SideNav />
      <div className="h-screen w-4/5 bg-stone-100 flex items-center justify-center">
        <Outlet />
      </div>
    </main>
  );
};
