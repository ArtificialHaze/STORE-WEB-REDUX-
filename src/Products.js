import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleProduct from "./SingleProduct";
import axios from "axios";
import { setProducts } from "./actions";

const Products = () => {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const resp = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log(err.message));
    dispatch(setProducts(resp.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="ui four column doubling stackable grid container">
      <SingleProduct />
    </div>
  );
};

export default Products;
