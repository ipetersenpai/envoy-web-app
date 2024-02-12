import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import ScreenPath from "../../components/ScreenPath";
import { Userdata } from "../../MockData/UserMockData";
import { Box, IconButton } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";

const UserTable = () => {
  const column = [
    { field: "id", headerName: "USER ID", flex: 0.5 },
    {
      field: "fullname",
      headerName: "FULL NAME",
      flex: 1,
    },
    {
      field: "email",
      headerName: "EMAIL",
      flex: 1,
    },
    {
      field: "status",
      headerName: "STATUS",
      flex: 0.5,
      renderCell: ({ row: { status } }) => {
        return (
          <div className="flex justify-center w-full">
            {status === "active" && (
              <CheckCircleIcon sx={{ color: "#31ce45" }} />
            )}
            {status === "inactive" && <CancelIcon sx={{ color: "#F13434" }} />}
          </div>
        );
      },
    },
    {
      field: "department",
      headerName: "DEPARTMENT",
      flex: 1,
    },
    {
      field: "position",
      headerName: "POSITION",
      flex: 1,
    },
    {
      field: "password",
      headerName: "PASSWORD",
      flex: 1,
    },
    {
      field: "type",
      headerName: "TYPE",
      flex: 1,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      renderCell: (params) => (
        <>
          <IconButton
            aria-label="edit"
            onClick={() => handleEdit(params.row.id)}
          >
            <BorderColorIcon sx={{ color: "#FFB931" }} />
          </IconButton>
          <IconButton
            aria-label="delete"
            onClick={() => handleDelete(params.row.id)}
          >
            <DeleteIcon sx={{ color: "#F13434" }} />
          </IconButton>
        </>
      ),
    },
  ];
  const handleDelete = (id) => {
    // Implement your delete logic here, using the id parameter
    console.log("Delete row with ID:", id);
  };

  const handleEdit = (id) => {
    // Implement your edit logic here, using the id parameter
    console.log("Edit row with ID:", id);
  };

  return (
    <div className="flex flex-col flex-auto font-envoyFont">
      <div className="flex">
        <ScreenPath currentPath="Dashboard / Total User" />
      </div>
      <div className="bg-white rounded-lg shadow-lg flex mx-[20px] h-[80vh]">
        <Box
          className="flex flex-wrap overflow-y-auto w-[100%] "
          sx={{
            "& .MuiDataGrid-cell": {
              borderBottom: 1,
              borderRight: 1,
              borderColor: "#CFCFCF",
            },

            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "white",
              borderBottom: 1,
              borderTop: 1,
              borderRadius: 0,
              borderColor: "#CFCFCF",
              fontWeight: "bold",
              color: "black",
            },

            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: "white",
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: 1,
              backgroundColor: "#white",
              color: "black",
              borderColor: "#CFCFCF",
            },

            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: "black !important",
            },
            "& .MuiDataGrid .MuiButton-text": {
              color: "white !important",
            },
          }}
        >
          <DataGrid
            rows={Userdata}
            columns={column}
            components={{ Toolbar: GridToolbar }}
          />
        </Box>
      </div>
    </div>
  );
};

export default UserTable;