import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Search,
  Inject,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import { Heading } from "../components";
import { usersConfig } from "../config";
import dummy from "../config/dummy";

const Users = () => {
  return (
    <div className="p-2 md:p-5 rounded-3xl bg-white">
      <Heading category="Page" title="Users" />
      <GridComponent
        width="auto"
        dataSource={dummy.users}
        allowPaging
        allowSorting
        toolbar={["Search"]}
      >
        <ColumnsDirective>
          {usersConfig.grid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Users;
