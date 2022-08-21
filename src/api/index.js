import products from "../data/products.json";

const api = {
  getProducts: () => {
    return new Promise((resolve, reject) => {
      const time = setTimeout(() => {

        const data = JSON.parse(
          localStorage.getItem("products") || JSON.stringify(products)
        );

        if (data.length > 0) resolve(data);

        clearTimeout(time);
        reject({ msg: "no products found" });
      }, 1000);
    });
  },
  addProduct: (data) => {
    return new Promise((resolve, reject) => {
      const time = setTimeout(() => {
        localStorage.setItem("products", JSON.stringify(data));
        resolve({ msg: "product added successfully", data });

        clearTimeout(time);
        reject({ msg: "something wrong happend" });
      }, 1000);
    });
  },
};

export const { getProducts } = api;
export default api;
