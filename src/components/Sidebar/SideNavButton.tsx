import { NavLink } from "react-router-dom";
import { MenuIcons } from "./MenuIcons";
import { formatStringToLink } from "../../utils/stringToLinkFormat";

interface Props {
  option: IconT;
}

export const SideNavButton = ({ option }: Props) => {
  return (
    <NavLink
      key={option}
      to={`/${formatStringToLink(option)}`}
      className={({ isActive }) =>
        isActive
          ? "text-center py-2 px-4 rounded-lg  text-stone-400 flex  w-[20ch] gap-4 mt-1"
          : "text-center py-2 px-4 rounded-lg  hover:bg-stone-200 flex  w-[20ch] gap-4 mt-1"
      }
    >
      <MenuIcons Icon={option} />
      {option}
    </NavLink>
  );
};
