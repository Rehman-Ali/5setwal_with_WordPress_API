import React, { useRef, forwardRef } from "react";
import { useState } from "react";
import MaterialTable from "material-table";
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
import pika from '../../assets/images/pika.jpg'
import sale from '../../assets/images/sale.jpg';
import shop from '../../assets/images/shop1.jpg';
import shop2 from '../../assets/images/shop2.jpg'
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
const Commentstable = () => {
    const tableRef = useRef(null);
    const defaultMaterialTheme = createTheme();
    const columns = [
      {
        title: "ID",
        field: "id",
      },
      { title: "Name", field: "title" },
      {
        title: "Post Title",
        field: "post",
      },
      {
        title: "Image",
        field: "image",render:(item)=>{return (<img src={item.image} alt="" style={{width:"40px",height:"40px"}}/>)}
      },
      { title: "Content", field: "content" },
      { title: "Created At", field: "created" },
     
      {
        title: "Action",
        field: "action",
      },
    ];
    const [entries, setEnteries] = useState([
        {
          id: 1,
          title: "test",
          post: "gallary_name",
          image: pika ,
          content: "price",
          created:"created",
          status: "status",
          action: "action",
        },
        {
          id: 2,
          title: "Ghulam Rasool",
          post: "gh@gmail.com",
          image: sale,
          content: "price",
          created:"created",
          status: "status",
          action: "action",
        },
   
      ]);
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
                    title="Posts "
                    columns={columns}
                    data={entries}
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
  )
}

export default Commentstable