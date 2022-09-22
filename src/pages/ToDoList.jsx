import React from "react";
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";
import { Heading } from "../components";
import { kanbanConfig } from "../config";

import dummy from "../config/dummy"; //! dummy

const ToDoList = () => {
  return (
    <div className="md:m-10 m-2 mt-24 md:p-8 p-5 rounded-3xl bg-white">
      <Heading category="App" title="To-Do List" />
      <KanbanComponent
        id="kanban"
        dataSource={dummy.kanban}
        keyField="Status"
        cardSettings={{ contentField: "Summary", headerField: "Id" }}
      >
        <ColumnsDirective>
          {kanbanConfig.grid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
};

export default ToDoList;
