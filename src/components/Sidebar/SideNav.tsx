// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { useUserContext } from "../hooks/useUserContext";
import { handleRolePermissions } from "../../utils/roles";
import { SideNavButton } from "./SideNavButton";

export const SideNav = () => {
  const nav = useNavigate();
  console.log(nav);
  // const {user} = useUserContext();

  // useEffect(()=> {
  //   if(!user) nav('/');
  // });

  // if(!user){
  //   return null;
  // }

  return (
    <aside className="h-full w-[256px] flex p-4 flex-col items-center border-2 border-stone-200 bg-white">
      <span className="text-3xl">Logo</span>
      <span className="text-2xl my-6">Administrador</span>
      {handleRolePermissions("admin").map((option) => (
        <SideNavButton option={option} key={option}/>
      ))}
    </aside>
  );
};
