import { Outlet } from "react-router-dom";

export const LayoutForm = () => {
  return (
    <main className="w-screen h-screen flex justify-center items-center bg-gradient-to-b from-sky-300 to-blue-400">
      <Outlet />
    </main>
  );
};
