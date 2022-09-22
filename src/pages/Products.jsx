import React from "react";
import {
  Page,
  Selection,
  Search,
  Toolbar,
  Edit,
  Sort,
  Filter,
} from "@syncfusion/ej2-react-grids";
import { Grid } from "../containers";
import { productsConfig } from "../config";
import dummy from "../config/dummy";

const Products = () => {
  return (
    <Grid
      title="Products"
      dataSrc={dummy.products}
      isAllowPaging={true}
      isAllowSorting={true}
      editSettings={{ allowEditing: true, allowDeleting: true }}
      toolbar={["Search", "Delete"]}
      dataConfig={productsConfig}
      services={[Page, Search, Toolbar, Selection, Edit, Sort, Filter]}
    />
  );
};

export default Products;
