import "./productList.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
} from "@mui/material";
import { useState, useEffect } from "react";
import Axios from "axios";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [editId, setEditId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    Axios.get("http://localhost:5000/api/products")
      .then((respond) => {
        setProducts(respond.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);

  const onBtnDelete = (id) => {
    setDeleteId(id);
  };
  const onBtnEdit = (id) => {
    setEditId(id);
  };
  console.log(deleteId);
  console.log(editId);
  return (
    <div>
      <Topbar />
      <div className="productlistWrapper">
        <Sidebar />
        <div className="productList">
          <TableContainer component={Paper} sx={{ maxHeight: "90vh" }}>
            <Table size="small" stickyHeader>
              <TableHead>
                <TableRow align="center">
                  <TableCell align="center">Product Code</TableCell>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Description</TableCell>
                  <TableCell align="center">Price</TableCell>
                  <TableCell align="center">UOM</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((row) => {
                  return (
                    <TableRow key={row.id}>
                      <TableCell align="center">{row.id}</TableCell>
                      <TableCell align="center">{row.name}</TableCell>
                      <TableCell align="center">{row.description}</TableCell>
                      <TableCell align="center">{row.price}</TableCell>
                      <TableCell align="center">{row.unit}</TableCell>
                      <TableCell>
                        <Button
                          variant="outlined"
                          color="primary"
                          onClick={() => onBtnEdit(row.id)}
                          sx={{
                            marginRight: "2px",
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="outlined"
                          color="error"
                          onClick={() => onBtnDelete(row.id)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}
