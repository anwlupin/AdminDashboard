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
import { Grid, Heading } from "../components";
import { usersConfig } from "../config";
import dummy from "../config/dummy";

const Users = () => {
  return (
    <div className="md:p-8 p-5 rounded-3xl bg-white">
      <Heading category="Page" title={"Heading"} />
      <Grid
        title="Users"
        dataSrc={dummy.users}
        isAllowPaging={true}
        isAllowSorting={true}
        editSettings={{ allowEditing: true, allowDeleting: true }}
        toolbar={["Search", "Delete"]}
        dataConfig={usersConfig}
        services={[Page, Search, Toolbar, Selection, Edit, Sort, Filter]}
      />
    </div>
  );
};

export default Users;
