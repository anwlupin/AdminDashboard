import React from "react";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "../contexts/ContextProvider";
import { colors, icons, navbarLinks, dummy } from "../custom";

const NavItem = ({ name, handle, icon, color, badge }) => (
  <TooltipComponent content={name} position="BottomCenter">
    <button
      className="relative rounded-full p-3 hover:bg-light-gray text-xl"
      type="button"
      style={{ color }}
      onClick={handle}
    >
      <span
        className="absolute rounded-full h-2 w-2 right-2 top-2"
        style={{ background: badge }}
      />
      {icon}
    </button>
  </TooltipComponent>
);

const ProfilePicture = () => (
  <TooltipComponent content="Profile" position="BottomCenter">
    <div
      className="flex items-center gap-1 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
      onClick={() => {}}
    >
      <img className="rounded-full w-8 h-8" src={dummy.avatar[0]} alt="" />
      <p className="text-sm text-gray-400">
        Hi, <span className="font-bold">Lupin</span>
      </p>
      {icons.arrowDown("text-xl text-gray-400")}
    </div>
  </TooltipComponent>
);

const NavBar = () => {
  const { activeNavItem, handleClick } = useStateContext();

  return (
    <nav className="navbar items-center justify-end relative flex w-full">
      {navbarLinks.map((e) => (
        <NavItem
          key={e.name}
          name={e.name[0].toUpperCase() + e.name.slice(1)}
          handle={() => handleClick(e.name)}
          icon={e.icon}
          color={e.color}
          badge={colors.badge}
        />
      ))}
      <ProfilePicture />

      {activeNavItem.cart && "<Cart />"}
      {activeNavItem.chat && "<Chat />"}
      {activeNavItem.notifications && "<Notifications />"}
      {activeNavItem.userProfile && "<UserProfile />"}
    </nav>
  );
};

export default NavBar;
