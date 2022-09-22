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
import { usersConfig } from "../config";
import dummy from "../config/dummy";

const Users = () => {
  return (
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
  );
};

export default Users;
