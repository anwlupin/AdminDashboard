import React, { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

const navbarState = {
  cart: false,
  chat: false,
  notification: false,
  userProfile: false,
};

export const ContextProvider = ({ children, ...extraProps }) => {
  const [activeSidebar, setActiveSidebar] = useState(true);
  const [activeNavItem, setNavItem] = useState(navbarState);
  const [screenSize, setScreenSize] = useState(undefined);

  const handleClick = (clicked) => {
    setNavItem({ ...navbarState, [clicked]: true });
  };

  return (
    <SidebarContext.Provider
      value={{
        activeSidebar,
        setActiveSidebar,
        activeNavItem,
        setNavItem,
        handleClick,
        screenSize,
        setScreenSize,
      }}
      {...extraProps}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useStateContext = () => useContext(SidebarContext);
