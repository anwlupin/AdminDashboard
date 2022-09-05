import React from "react";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { BsPalette } from "react-icons/bs";

const ThemeButton = () => {
  return (
    <div className="fixed right-4 bottom-4">
      <TooltipComponent content="Settings" position="Top">
        <button
          type="button"
          className="theme-setting-button p-3 text-3xl text-white hover:drop-shadow-xl hover:bg-light-gray "
        >
          <BsPalette />
        </button>
      </TooltipComponent>
    </div>
  );
};

export default ThemeButton;
