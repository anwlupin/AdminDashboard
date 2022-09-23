import React from "react";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";
import { Heading } from "../components";

const changePreview = (args) => {
  document.getElementById("colorPreview").style.backgroundColor =
    args.currentValue.hex;
};

const ColorTable = ({ title, mode }) => (
  <div>
    <p className="mt-2 mb-4 text-2xl font-semibold">{title}</p>
    <ColorPickerComponent
      id="inline-palette"
      mode={mode}
      modeSwitcher={false}
      inline
      showButtons={false}
      change={changePreview}
    />
  </div>
);

const ColorPicker = () => {
  return (
    <div className="md:m-10 m-2 mt-24 md:p-8 p-5 rounded-3xl bg-white">
      <Heading category="App" title="Color Picker" />
      <div className="text-center">
        <div id="colorPreview" />
        <div className="flex flex-wrap justify-center gap-20 mt-4 mb-8">
          <ColorTable title={"Inline Palette"} mode="Palette" />
          <ColorTable title={"Inline Picker"} mode="Picker" />
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
