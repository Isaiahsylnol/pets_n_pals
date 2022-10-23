import axios from "axios";
const API_URL = "http://localhost:8080/api/cart/";

const createCart = (userId, status, products) => {
    return axios.post(API_URL, {
      userId, 
      status,
      products
    });
  };

  const CartService = {
    createCart
  };

  export default CartService