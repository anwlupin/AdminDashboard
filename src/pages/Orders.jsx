import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { Heading } from "../components";
import { ordersConfig } from "../config";
import dummy from "../config/dummy";

const Orders = () => {
  return (
    <div className="p-2 md:p-5 rounded-3xl bg-white">
      <Heading category="Page" title="Orders" />
      <GridComponent
        id="gridcomp"
        dataSource={dummy.orders}
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          {ordersConfig.grid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            PdfExport,
            Edit,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;
