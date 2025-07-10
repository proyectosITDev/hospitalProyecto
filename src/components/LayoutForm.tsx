import { Outlet } from "react-router-dom";

export const LayoutForm = () => {
  return (
    <main className="w-screen h-screen flex justify-center items-center bg-stone-100" >
      <Outlet />
    </main>
  );
};
