import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./productList.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { fetchProducts } from "../../utils/apiCalls";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Delete, Edit } from "@mui/icons-material";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [editId, setEditId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    fetchProducts(setProducts);
  }, []);

  const onBtnDelete = (id) => {
    setDeleteId(id);
  };
  const onBtnEdit = (id) => {
    setEditId(id);
  };

  const columns = [
    {
      field: "id",
      headerName: "Product Code",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "name",
      headerName: "Name",
      width: 200,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "description",
      headerName: "Description",
      width: 250,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "price",
      headerName: "Price",
      width: 120,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "unit",
      headerName: "UOM",
      width: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return (
          <>
            <Link
              to={"/product/" + params.row.id}
              style={{ textDecoration: "none", fontSize: "10px" }}
            >
              <Button
                variant="outlined"
                color={"error"}
                sx={{
                  textTransform: "capitalize",
                  marginRight: "5px",
                }}
                startIcon={<Edit />}
                onClick={() => onBtnEdit(params.row.id)}
              >
                Edit
              </Button>
            </Link>

            <Button
              variant="outlined"
              sx={{
                textTransform: "capitalize",
                marginRight: "10px",
              }}
              startIcon={<Delete />}
              onClick={() => onBtnDelete(params.row.id)}
            >
              Delete
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <div>
      <Topbar />
      <div className="productlistWrapper">
        <Sidebar />
        <div className="productList">
          <DataGrid
            rows={products}
            disableSelectionOnClick
            columns={columns}
            getRowId={(row) => row.id}
            pageSize={10}
            rowsPerPageOptions={[5, 10, 20]}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
}
