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
import { Grid } from "../containers";
import { ordersConfig } from "../config";
import dummy from "../config/dummy";

const Orders = () => {
  return (
    <Grid
      title="Orders"
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
  );
};

export default Orders;
