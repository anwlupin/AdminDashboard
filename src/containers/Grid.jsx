import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { Heading } from "../components";

const Grid = ({
  title,
  id,
  dataSrc,
  isAllowPaging,
  isAllowSorting,
  editSettings,
  toolbar,
  dataConfig,
  services,
}) => {
  return (
    <div className="md:p-8 p-5 rounded-3xl bg-white">
      <Heading category="Page" title={title} />
      <GridComponent
        id={id}
        dataSource={dataSrc}
        allowPaging={isAllowPaging}
        allowSorting={isAllowSorting}
        editSettings={editSettings}
        toolbar={toolbar}
      >
        <ColumnsDirective>
          {dataConfig.grid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={services} />
      </GridComponent>
    </div>
  );
};

export default Grid;
