import React, { createContext, useState } from "react";
import api from "../../api";

export const ProductsContext = createContext(undefined);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterProducts, setFilteredProducts] = useState([]);

  const getProducts = async () => {
    try {
      setLoading(true);
      const data = await api.getProducts();
      setLoading(false);

      setProducts(data);
    } catch (error) {
      alert(error.msg)
    }
  };

  const addProduct = async (data) => {
    console.log(data)
    const updatedProducts = [data, ...products];

    try {
      setLoading(true);
      const updatedData = await api.addProduct(updatedProducts);
      setLoading(false);
      setProducts(updatedData?.data);
    } catch (error) {
      alert(error.msg);
    }
  };

  const handleSearch = (query) => {
    const filterItems = products.filter(
      (item) => 
      item.name.toLowerCase().search(query.toLowerCase()) !== -1 ||
      item.price.toString().search(query) !== -1  
    );
    setSearchQuery(query);
    setFilteredProducts(filterItems);
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        getProducts,
        addProduct,
        loading,
        searchQuery,
        filterProducts,
        handleSearch,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
