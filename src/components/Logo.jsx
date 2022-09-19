import React from "react";
import { Link } from "react-router-dom";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { SiReact } from "react-icons/si";
import { BsList } from "react-icons/bs";
import { useStateContext } from "../contexts/ContextProvider";

const Logo = () => {
  const { activeSidebar, setActiveSidebar } = useStateContext();
  console.log("activeSidebar is set to " + activeSidebar);

  return (
    <>
      <div className="sidebar-switcher ml-3">
        <TooltipComponent content="Menu">
          <button
            className="p-2 text-xl rounded-full hover:bg-light-gray"
            type="button"
            onClick={() => {
              setActiveSidebar((prev) => !prev);
            }}
          >
            <BsList />
          </button>
        </TooltipComponent>
      </div>
      <Link
        className="logo flex items-center gap-3 ml-3 font-extrabold tracking tight "
        to="/"
      >
        <SiReact /> <span>Logo</span>
      </Link>
    </>
  );
};

export default Logo;
