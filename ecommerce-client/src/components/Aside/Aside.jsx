import React, { useContext } from "react";
import { useEffect } from "react";
import "./Aside.css";


//other components
import { CategoryItem } from "./CategoryItem";

//import categories context
import { CategoryContext } from "../../context/CategoryContext";
import { ProductContext } from "../../context/ProductContext";

export const Aside = ({ ClassName }) => {
  //import these context
  const { categories, GetCategories } = useContext(CategoryContext);

  //use this in order to upload all of products
  const { LoadProduct } = useContext(ProductContext);

  useEffect(() => {
    GetCategories();
    //console.table(categories);
  }, []);

  return (
    <aside className={ClassName}>
      <ul className="list">
        <h3>Type</h3>

        <li>
          <a onClick={() => LoadProduct()}>ALL</a>
        </li>

        {categories.map((item) => {
          return <CategoryItem key={item._id} Category={item} />;
        })}
      </ul>

      <hr />
      <ul className="list">
        <h3>By Sex</h3>
        <li>
          <a href="#">Men</a>
        </li>

        <li>
          <a href="#">Women</a>
        </li>

        <li>
          <a href="#">Unisex</a>
        </li>
      </ul>

      <hr />
      <ul className="list">
        <h3>By Age</h3>
        <li>
          <a href="#">Kids</a>
        </li>

        <li>
          <a href="#">Teenagers</a>
        </li>

        <li>
          <a href="#">Teenagers</a>
        </li>
      </ul>
    </aside>
  );
};
