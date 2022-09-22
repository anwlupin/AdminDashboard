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
import { usersConfig } from "../config";
import dummy from "../config/dummy";

const Users = () => {
  return (
    <div className="md:p-8 p-5 rounded-3xl bg-white">
      <Heading category="Page" title="Users" />
      <GridComponent
        width="auto"
        dataSource={dummy.users}
        allowPaging
        allowSorting
        editSettings={{ allowEditing: true, allowDeleting: true }}
        toolbar={["Search", "Delete"]}
      >
        <ColumnsDirective>
          {usersConfig.grid.map((item, index) => (
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

export default Users;
