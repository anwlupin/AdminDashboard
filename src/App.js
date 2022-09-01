import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MdOutlineColorLens } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, SidebarNav } from "./components";
import {
  Calendar,
  ColorPicker,
  Delivery,
  Orders,
  Products,
  Users,
} from "./pages";

import "./App.css";

const App = () => {
  const activePage = true;
  return (
    <div className="App relative flex dark:bg-main-dark-bg">
      <BrowserRouter>
        <div className="fixed right-4 bottom-4">
          <TooltipComponent content="Settings" position="Top">
            <button
              type="button"
              className="theme-setting-button p-3 text-3xl text-white hover:drop-shadow-xl hover:bg-light-gray "
            >
              <MdOutlineColorLens />
            </button>
          </TooltipComponent>
        </div>

        {/*//*Sidebar//*/}
        <div className="sidebar-nav">
          {activePage ? (
            <div className="fixed w-72 bg-white dark:bg-secondary-dark-bg">
              <SidebarNav />
            </div>
          ) : (
            <div className="fixed w-0 dark:bg-secondary-dark-bg">
              <SidebarNav />
            </div>
          )}
        </div>
        <div
          className={`min-h-screen w-full dark:bg-main-bg bg-main-bg ${
            activePage ? "md:ml-72" : "flex-2"
          }`}
        >
          <Navbar />
          <Routes>
            {/* Dashboard */}
            <Route path="/" element="ECommerce" />
            <Route path="/ecommerce" element="ECommerce" />

            {/* Pages */}
            <Route path="/users">
              <Route index element={<Users />} />
              <Route path=":userId" element="UserInfo" />
              <Route path="new" element="NewUser" />
            </Route>
            <Route path="/products">
              <Route index element={<Products />} />
              <Route path=":productId" element="ProductInfo" />
              <Route path="new" element="NewProduct" />
            </Route>
            <Route path="/orders" element={<Orders />} />
            <Route path="/delivery" element={<Delivery />} />

            {/* Apps */}
            <Route path="/apps">
              <Route index element="Apps" />
              <Route path="editor" element="Editor" />
              <Route path="calendar" element={<Calendar />} />
              <Route path="color-picker" element={<ColorPicker />} />
            </Route>

            {/* Charts */}
            <Route path="/charts" element="Charts" />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
