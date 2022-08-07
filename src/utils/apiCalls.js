import Axios from "axios";

export const fetchProducts = (setProducts) => {
  Axios.get("http://localhost:5000/api/products")
    .then((respond) => {
      setProducts(respond.data);
    })
    .catch((error) => {
      console.log(error.response.data);
    });
};
