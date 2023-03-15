import React, { useRef, forwardRef, useEffect } from "react";
import "./UserTable.css";
import Swal from "sweetalert2";
import MaterialTable from "material-table";
import { useState } from "react";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import Edit from "@material-ui/icons/Edit";

import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import { TablePagination, Paper } from "@material-ui/core";
import VisibilityOutlinedIcon from "@material-ui/icons/Visibility";
import DeleteIcon from "@material-ui/icons/Delete";
import { ThemeProvider, createTheme } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const tableIcons = {
  Delete: forwardRef((props, ref) => <DeleteIcon {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  View: forwardRef((props, ref) => (
    <VisibilityOutlinedIcon {...props} ref={ref} />
  )),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
};

const UserTable = () => {
  const [CurrToken, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useNavigate();
  const [allUsers, setAllUsers] = useState([]);
  const tableRef = useRef(null);
  const defaultMaterialTheme = createTheme();
  const columns = [
    {
      title: "ID",
      field: "ID",
    },
    { title: "Name", field: "display_name" },
    {
      title: "Email",
      field: "user_email",
    },
    {
      title: "Nice Name",
      field: "user_nicename",
    },
    // { title: "Posts", field: "Posts" },
    {
      title: "Status",
      field: "user_status",
      render: (rowData) =>
        rowData.user_status === 1 ? (
          <button className="btn btn-info">Active</button>
        ) : (
          <button className="btn btn-danger">Inactive</button>
        ),
    },
    // {
    //   title: "Action",
    //   field: "action",
    // },
  ];

  const [entries, setEnteries] = useState([]);
  
  const DeleteHandler = () =>{
    console.log('delete handler')
  }

  const Updatehandler = () =>{
   console.log("update handler")
  }
  
  
  const Viewhandler= () =>{
   console.log("view handler")
  }
  return (
    <>
      <div className="col-lg-12">
        <div className="aw_table_wrapper_user">
          <div className="table_body">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 ">
                <ThemeProvider theme={defaultMaterialTheme}>
                  <MaterialTable
                    tableRef={tableRef}
                    icons={tableIcons}
                    title="Latest User "
                    columns={columns}
                    data={entries}
                    actions={[
                      {
                        icon: () => <DeleteIcon />,
                        tooltip: "Remove",
                        onClick: (event, data) => DeleteHandler(data),
                      },
                      {
                        icon: () => <Edit />,
                        tooltip: "Change Status",
                        onClick: (event, data) =>
                          Updatehandler({
                            e: event,
                            d: data,
                          }),
                      },

                      {
                        icon: () => <VisibilityOutlinedIcon />,
                        tooltip: "View",
                        onClick: (event, data) => Viewhandler(data),
                      },
                    ]}
                    options={{
                      pageSize: 10,
                      pageSizeOptions: [5, 10, 15, 20],
                      actionsColumnIndex: -1,
                      exportButton: false,
                      sorting: true,
                      search: true,
                      paging: true,
                      debounceInterval: 1500,
                      headerStyle: {
                        fontWeight: "bold",
                      },
                    }}
                    components={{
                      Pagination: (props) => (
                        <TablePagination {...props} rowsPerPage={10} />
                      ),

                      Container: (props) => <Paper {...props} elevation={0} />,
                    }}
                  />
                </ThemeProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserTable;
