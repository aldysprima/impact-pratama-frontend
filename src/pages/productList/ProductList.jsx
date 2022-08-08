import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./productList.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { fetchProducts, deleteProduct } from "../../utils/apiCalls";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Add, Delete, Edit } from "@mui/icons-material";
import StyledModal from "../../components/StyledModal";
import { toast } from "react-toastify";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [name, setName] = useState("");

  useEffect(() => {
    fetchProducts(setProducts);
  }, []);

  const onBtnDelete = (id, name) => {
    setDeleteId(id);
    setName(name);
    setOpen(true);
  };

  const confirmDelete = (deleteId, setProducts) => {
    deleteProduct(deleteId, setProducts, toast);
    setOpen(false);
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
              onClick={() => onBtnDelete(params.row.id, params.row.name)}
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
          <Link
            to={"/addproduct"}
            style={{ textDecoration: "none", fontSize: "10px" }}
          >
            <Button startIcon={<Add />} variant="outlined">
              Add Product
            </Button>
          </Link>
          <DataGrid
            rows={products}
            disableSelectionOnClick
            columns={columns}
            getRowId={(row) => row.id}
            pageSize={10}
            rowsPerPageOptions={[5, 10, 20]}
            checkboxSelection
          />
          <StyledModal
            open={open}
            onClose={(e) => setOpen(false)}
            onCancel={(e) => setOpen(false)}
            onConfirm={(e) => confirmDelete(deleteId, setProducts)}
            action="Delete"
            value={name}
          />
        </div>
      </div>
    </div>
  );
}
