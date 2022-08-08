import "./newProduct.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import {
  Typography,
  TextField,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Button,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { useState, useRef } from "react";
import { toast } from "react-toastify";
import { addProduct } from "../../utils/apiCalls";
import { useNavigate } from "react-router-dom";
import StyledModal from "../../components/StyledModal";

export default function NewProduct() {
  const [open, setOpen] = useState(false);
  const [uom, setUom] = useState("");
  const nameRef = useRef("");
  const descRef = useRef("");
  const priceRef = useRef("");
  const navigate = useNavigate();

  const uomHandleChange = (e) => {
    setUom(e.target.value);
  };

  const onBtnSubmit = () => {
    const newProduct = {
      name: nameRef.current.value,
      description: descRef.current.value,
      price: priceRef.current.value,
      unit: uom,
    };
    addProduct(newProduct, toast, navigate);
  };

  const onBtnAdd = () => {
    setOpen(true);
  };
  return (
    <div>
      <Topbar />
      <div className="newProductWrapper">
        <Sidebar />
        <div className="newProduct">
          <Stack minHeight="100vh" spacing={2} maxWidth="500px">
            <Typography variant="p" fontSize="24px" fontWeight={600}>
              Add New Product
            </Typography>
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
            <Button startIcon={<Add />} variant="outlined" onClick={onBtnAdd}>
              Add Product
            </Button>
          </Stack>
          <StyledModal
            open={open}
            onClose={(e) => setOpen(false)}
            onCancel={(e) => setOpen(false)}
            onConfirm={onBtnSubmit}
            action="Add"
            value={nameRef.current.value}
          />
        </div>
      </div>
    </div>
  );
}
