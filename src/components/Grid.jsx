import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Inject,
} from "@syncfusion/ej2-react-grids";

const Grid = ({
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
  );
};

export default Grid;
