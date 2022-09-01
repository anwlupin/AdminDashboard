import React from "react";
import { Link, NavLink } from "react-router-dom";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { SiReact } from "react-icons/si";
import { BsList } from "react-icons/bs";
import { links } from "../data/index";

const SidebarNav = () => {
  const activePage = true;

  const activeLink =
    "flex items-center gap-5 m-2 pt-3 pl-4 pb-2.5 rounded-lg text-white text-md";
  const unActiveLink =
    "flex items-center gap-5 m-2 pt-3 pl-4 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 hover:bg-light-gray darK:hover:text-black";

  return (
    <div className="h-screen ml-3 pb-10 overflow-auto md:overflow-hidden md:hover:overflow-auto">
      {activePage && (
        <>
          <div className="flex items-center">
            <TooltipComponent content="Menu">
              <button
                type="button"
                className="mt-4 p-3 text-xl rounded-full hover:bg-light-gray"
                onClick={() => {}}
              >
                <BsList />
              </button>
            </TooltipComponent>
            <Link
              to="/"
              className="flex items-center gap-3 mt-4 ml-3 text-xl font-extrabold tracking tight text-slate-900 dark:text-white"
              onClick={() => {}}
            >
              <SiReact /> <span>Logo</span>
            </Link>
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.category}>
                <p className="m-3 mt-4 text-gray-400 uppercase">
                  {item.category}
                </p>
                {item.list.map((e) => (
                  <NavLink
                    key={e.name}
                    to={e.path}
                    className={({ isActive }) =>
                      isActive ? activeLink : unActiveLink
                    }
                    onClick={() => {}}
                  >
                    {e.icon}
                    <span className="capitalize">{e.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SidebarNav;
