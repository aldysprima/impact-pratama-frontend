import "./product.css";
import { Save } from "@mui/icons-material";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import {
  Button,
  Stack,
  TextField,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { fetchProductById, updateProduct } from "../../utils/apiCalls";
import StyledModal from "../../components/StyledModal";
import { toast } from "react-toastify";

export default function Product() {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState({});
  const [uom, setUom] = useState("");
  const params = useParams();
  const nameRef = useRef("");
  const descRef = useRef("");
  const priceRef = useRef("");
  const navigate = useNavigate();

  console.log("PRODUCT PAGE :", product);

  const uomHandleChange = (e) => {
    setUom(e.target.value);
  };

  const onBtnSave = () => {
    setOpen(true);
  };

  const onConfirmChange = () => {
    let newProductData = {};
    if (nameRef.current.value) {
      newProductData.name = nameRef.current.value;
    }
    if (descRef.current.value) {
      newProductData.description = descRef.current.value;
    }
    if (priceRef.current.value) {
      newProductData.price = priceRef.current.value;
    }
    if (uom) {
      newProductData.uom_id = uom;
    }

    updateProduct(params.productId, newProductData, toast, navigate);
  };

  useEffect(() => {
    fetchProductById(params.productId, setProduct);
  }, []);

  console.log("PRODUCT :", product);
  return (
    <div>
      <Topbar />
      <div className="productWrapper">
        <Sidebar />
        <div className="product">
          <Box
            height="30vh"
            sx={{
              border: "1px solid black",
              marginBottom: "10px",
              padding: "10px",
            }}
          >
            <Typography variant="p" fontSize="24px" fontWeight={600}>
              Product Info
            </Typography>
            <Stack spacing={1} marginTop="5px">
              <Typography>Product Code : {product.id}</Typography>
              <Typography>Name : {product.name}</Typography>
              <Typography>Description : {product.description}</Typography>
              <Typography>Price : {product.price}</Typography>
              <Typography>UOM : {product.unit}</Typography>
            </Stack>
          </Box>
          <Typography variant="p" fontSize="24px" fontWeight={600}>
            Edit Product
          </Typography>

          <Stack minHeight="50vh" spacing={2} maxWidth="500px" marginTop="15px">
            <TextField label="Name" variant="outlined" inputRef={nameRef} />
            <TextField
              label="Description"
              variant="outlined"
              inputRef={descRef}
            />
            <TextField label="Price" variant="outlined" inputRef={priceRef} />
            <Box sx={{ width: "250px" }}>
              <FormControl fullWidth>
                <InputLabel>UOM</InputLabel>
                <Select value={uom} label="UOM" onChange={uomHandleChange}>
                  <MenuItem value={1}>Sheet</MenuItem>
                  <MenuItem value={2}>Roll</MenuItem>
                  <MenuItem value={3}>Pcs</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Button startIcon={<Save />} variant="outlined" onClick={onBtnSave}>
              Save
            </Button>
          </Stack>
          <StyledModal
            open={open}
            onClose={(e) => setOpen(false)}
            onCancel={(e) => setOpen(false)}
            onConfirm={onConfirmChange}
            action="Change"
            value={product.name}
          />
        </div>
      </div>
    </div>
  );
}
