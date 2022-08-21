import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductContext";
import Product from "../Product";

const Products = () => {
  const { products, searchQuery, filterProducts, loading } =
    useContext(ProductsContext);

  const data = searchQuery.length > 1 ? filterProducts : products;
  return (
    <>
      <h1>Products</h1>
      <div style={{ display: "flex", flexWrap: "wrap", columnGap: "32px", rowGap:"32px" }}>
        {data?.length > 0 && data?.map((p) => <Product product={p} />)}
        {!loading && data.length === 0 && <p>No products found</p>}
      </div>
    </>
  );
};

export default Products;
