import React, { useContext, useState } from "react";
import { ProductsContext } from "../../context/ProductContext";

const AddProducts = () => {
  const { addProduct } = useContext(ProductsContext);
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    inventoryDate: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(form);
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <input
            name="description"
            type="text"
            value={form.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Price:
          <input
            name="price"
            type="number"
            value={form.price}
            onChange={handleChange}
          />
        </label>
        <label>
          Date:
          <input
            name="inventoryDate"
            type="date"
            value={form.inventoryDate}
            onChange={handleChange}
          />
        </label>

        <input type="submit" />
      </form>
    </>
  );
};

export default AddProducts;
