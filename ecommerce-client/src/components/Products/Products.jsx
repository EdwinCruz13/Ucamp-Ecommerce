import React, { useContext, useEffect } from "react";
import "./Products.css";

//import components
import { ProductItem } from "./ProductItem";

//import product context
import { ProductContext } from "../../context/ProductContext";
import { CategoryContext } from "../../context/CategoryContext";

/**
 * Component products
 * that return the list of products
 * @returns
 */
export const Products = () => {
  const { products } = useContext(ProductContext);
  const { LoadProduct, LoadProductByCategory } = useContext(ProductContext);

  const { Category } = useContext(CategoryContext);

  //use this hook in order to download all the products
  //from API
  useEffect(() => {
    //load of product using a function from product context
    LoadProduct();
  }, []);

  //use this hook when the category states changes values
  useEffect(() => {
    //load of product using a function from product context
    LoadProductByCategory(Category._id);
  }, [Category]);

  return (
    <div className="products">
      <section className="search">
        {products.length}
        {products.length > 1 ? " items found" : " item found"}
      </section>

      <section className="items">
        {products.map((product) => {
          return <ProductItem key={product._id} Product={product} />;
        })}
      </section>
    </div>
  );
};
