import React from "react";
import { Link } from "react-router-dom";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { SiReact } from "react-icons/si";
import { BsList } from "react-icons/bs";
import { useStateContext } from "../contexts/ContextProvider";

const Logo = () => {
  const { activeSidebar, setActiveSidebar } = useStateContext();

  return (
    <>
      {/* //* Sidebar Switcher */}
      <div className="ml-3">
        <TooltipComponent content="Menu">
          <button
            type="button"
            className="p-2 text-xl rounded-full hover:bg-light-gray"
            onClick={() => {
              setActiveSidebar((prev) => !prev);
            }}
          >
            <BsList />
          </button>
        </TooltipComponent>
      </div>
      {/* //* Logo */}
      <Link
        to="/"
        className="flex items-center w-72 gap-3 ml-3 font-extrabold tracking tight"
        onClick={() => {
          setActiveSidebar(false);
        }}
      >
        <SiReact /> <span>Logo</span>
      </Link>
    </>
  );
};

export default Logo;
