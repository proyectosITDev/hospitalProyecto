import { Outlet } from "react-router-dom";
import { SideNav } from "./Sidebar/SideNav";

export const Layout = () => {
  return (
    <main className="w-screen h-screen flex p-2 bg-stone-100">
      <SideNav />
      <div className=" w-4/5  flex items-center justify-center">
        <Outlet />
      </div>
    </main>
  );
};
