import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../hooks/useUserContext";
import { handleRolePermissions } from "../utils/roles";

export const SideNav = () => {
  const nav = useNavigate();
  const {user} = useUserContext();

  useEffect(()=> {
    if(!user) nav('/');
  });

  if(!user){
    return null;
  }

  return (
    <aside className="h-screen w-1/5 flex justify-center items-center border border-stone-200">
      <div className="flex flex-col justify-center gap-4">
        {handleRolePermissions(user.role).map((option) => (
            <Link key={option} to={`/${option}`} className="shadow-sm shadow-sky-600 text-sm text-center py-2 px-4 font-medium rounded-lg  hover:bg-sky-600 hover:text-white">
              {option}
            </Link>
        ))}
      </div>
    </aside>
  );
};
