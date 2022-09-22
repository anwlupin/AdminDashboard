import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Search,
  Inject,
  Toolbar,
  Edit,
  Sort,
  Filter,
} from "@syncfusion/ej2-react-grids";
import { Heading } from "../components";
import { productsConfig } from "../config";
import dummy from "../config/dummy";

const Products = () => {
  return (
    <div className="md:p-8 p-5 rounded-3xl bg-white">
      <Heading category="Page" title="Products" />
      <GridComponent
        width="auto"
        dataSource={dummy.products}
        allowPaging
        allowSorting
        editSettings={{ allowEditing: true, allowDeleting: true }}
        toolbar={["Search", "Delete"]}
      >
        <ColumnsDirective>
          {productsConfig.grid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[Page, Search, Toolbar, Selection, Edit, Sort, Filter]}
        />
      </GridComponent>
    </div>
  );
};

export default Products;
