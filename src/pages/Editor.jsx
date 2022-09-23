import React from "react";
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";
import { Heading } from "../components";

import dummy from "../config/dummy"; //! dummy

const Editor = () => {
  return (
    <div className=" md:m-10 md:p-10 m-2 mt-24 p-2 bg-white rounded-3xl">
      <Heading category="App" title="Editor" />
      <RichTextEditorComponent>
        <div>{dummy.editorData}</div>
        <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  );
};

export default Editor;
