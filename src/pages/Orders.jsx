import React from "react";
import {
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
} from "@syncfusion/ej2-react-grids";
import { Grid, Heading } from "../components";
import { ordersConfig } from "../config";
import dummy from "../config/dummy";

const Orders = () => {
  return (
    <div className="md:p-8 p-5 rounded-3xl bg-white">
      <Heading category="Page" title={"Orders"} />
      <Grid
        id="gridcomp"
        dataSrc={dummy.orders}
        isAllowPaging={true}
        isAllowSorting={true}
        dataConfig={ordersConfig}
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
    </div>
  );
};

export default Orders;
