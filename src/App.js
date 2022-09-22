import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useStateContext } from "./contexts/ContextProvider";
import { SidebarNav, ThemeButton } from "./components";
import { Header } from "./containers";
import { ECommerce, Orders, Users } from "./pages";

import "./App.css";

const App = () => {
  const { activeSidebar } = useStateContext();

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeButton />
        <Header />

        <div className="flex pt-12 bg-main-bg dark:bg-main-bg">
          {/* //*Left */}
          <SidebarNav />

          {/*//* Right */}
          <div
            className={`min-h-screen w-full py-12 pr-16${
              activeSidebar ? " pl-64" : " pl-16"
            }`}
          >
            <Routes>
              {/* Dashboard */}
              <Route path="/" element={<ECommerce />} />
              <Route path="/ecommerce" element={<ECommerce />} />

              {/* Pages */}
              <Route path="/users">
                <Route index element={<Users />} />
                <Route path=":userId" element="UserInfo" />
                <Route path="new" element="NewUser" />
              </Route>
              <Route path="/products">
                <Route index element="Products" />
                <Route path=":productId" element="ProductInfo" />
                <Route path="new" element="NewProduct" />
              </Route>
              <Route path="/orders" element={<Orders />} />
              <Route path="/delivery" element="Delivery" />

              {/* Apps */}
              <Route path="/apps">
                <Route index element="Apps" />
                <Route path="editor" element="Editor" />
                <Route path="calendar" element="Calendar" />
                <Route path="color-picker" element="ColorPicker" />
              </Route>

              {/* Charts */}
              <Route path="/charts" element="Charts" />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
