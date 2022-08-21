import { useContext, useEffect } from "react";
import "./App.css";
import AddProducts from "./component/AddProduct";
import Products from "./component/Products";
import Search from "./component/Search";
import { ProductsContext } from "./context/ProductContext";

function App() {
  const { getProducts, loading } = useContext(ProductsContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
      {loading &&  <div class="lds-dual-ring"></div>}
      <Search />
      <AddProducts />
      <Products />
    </div>
  );
}

export default App;
