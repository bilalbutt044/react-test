import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductContext";
import AddProducts from "../AddProduct/";
import Products from "../Products";
import Search from "../Search";

const Home = () => {
  const { getProducts, loading } = useContext(ProductsContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {loading && <div class="lds-dual-ring"></div>}
      <Search />
      <AddProducts />
      <Products />
    </>
  );
};

export default Home;
