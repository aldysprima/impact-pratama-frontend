import Axios from "axios";
const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchProducts = (setProducts) => {
  Axios.get(BASE_URL + "products")
    .then((respond) => {
      setProducts(respond.data);
    })
    .catch((error) => {
      console.log(error.response.data);
    });
};

export const deleteProduct = (productId, setProducts, toast) => {
  Axios.delete(BASE_URL + `deleteproduct/${productId}`)
    .then((respond) => {
      fetchProducts(setProducts);
      toast.success(respond.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const addProduct = (newProduct, toast, navigate) => {
  Axios.post(BASE_URL + "addproduct", newProduct)
    .then((respond) => {
      toast.success(respond.data);
      console.log(respond.data);
      navigate("/products");
    })
    .catch((error) => {
      toast.error(error.response.data);
      console.log(error.response.data);
    });
};

export const fetchProductById = (productId, setProduct) => {
  Axios.get(BASE_URL + `product/${productId}`)
    .then((respond) => {
      setProduct(respond.data);
    })
    .catch((error) => {
      console.log(error.response.data);
    });
};

export const updateProduct = (productId, newProductData, toast, navigate) => {
  Axios.patch(BASE_URL + `updateProduct/${productId}`, newProductData)
    .then((respond) => {
      toast.success(respond.data);
      navigate("/products");
    })
    .catch((error) => {
      toast.error(error.response.data);
    });
};
