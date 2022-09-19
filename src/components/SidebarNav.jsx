import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { sidebarLinks } from "../custom";

const SidebarNav = () => {
  const { activeSidebar, setActiveSidebar, screenSize, setScreenSize } =
    useStateContext();

  const linkStyle = {
    active:
      "flex items-center gap-5 m-2 pl-5 pt-3 pb-2.5 rounded-lg text-white bg-violet-700",
    inactive:
      "flex items-center gap-5 m-2 pl-5 pt-3 pb-2.5 rounded-lg text-gray-700 hover:bg-violet-700 hover:text-white dark:text-gray-200 dark:hover:text-black",
  };

  // ? Collapse the sidebar when the screen size changes vice versa
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) setActiveSidebar(false);
    else setActiveSidebar(true);
  }, [screenSize]);

  return (
    <>
      {activeSidebar && (
        <div className="sidebar-nav fixed min-h-screen w-48 bg-white dark:bg-secondary-dark-bg">
          {sidebarLinks.map((item) => (
            <div key={item.category}>
              <p className="mt-4 pl-4 text-gray-400 uppercase">
                {item.category}
              </p>
              {item.list.map((e) => (
                <NavLink
                  key={e.name}
                  className={({ isActive }) =>
                    isActive ? linkStyle.active : linkStyle.inactive
                  }
                  to={e.path}
                >
                  {e.icon}
                  <span className="capitalize">{e.name}</span>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SidebarNav;
