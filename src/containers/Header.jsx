import React from "react";
import { Logo, Navbar } from "../components";

const Header = () => {
  return (
    <div className="header fixed top-0 flex items-center w-full p-1 pr-3 text-xl text-slate-900 bg-white dark:bg-slate-800 dark:text-white border-b-1">
      <Logo />
      <Navbar />
    </div>
  );
};

export default Header;
