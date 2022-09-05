import React, { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children, ...extraProps }) => {
  const [activeSidebar, setActiveSidebar] = useState(true);

  return (
    <SidebarContext.Provider
      value={{ activeSidebar, setActiveSidebar }}
      {...extraProps}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useStateContext = () => useContext(SidebarContext);
