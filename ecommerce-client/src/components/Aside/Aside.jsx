import React, { useContext } from "react";
import { useEffect } from "react";
import "./Aside.css";

//other components
import { CategoryItem } from "./CategoryItem";
import { ColorItem } from "./ColorItem";

//import categories context
import { CategoryContext } from "../../context/CategoryContext";
import { ColorContext } from "../../context/ColorContext";
import { ProductContext } from "../../context/ProductContext";

export const Aside = ({ ClassName }) => {
  //import these context
  const { categories, GetCategories } = useContext(CategoryContext);
  const { colors, color, GetColors } = useContext(ColorContext);

  //use this in order to upload all of products
  const { LoadProduct } = useContext(ProductContext);

  useEffect(() => {
    GetCategories();
    GetColors();

    console.log(colors);
    //console.table(categories);
  }, []);

  return (
    <aside className={ClassName}>
      <ul className="list"> 
        <h3>Select all</h3>
        <li>
          <a onClick={() => LoadProduct()}>ALL</a>
        </li>
      </ul>

      <ul className="list">
        <h3>Type</h3>

        {categories.map((item) => {
          return <CategoryItem key={item._id} Category={item} />;
        })}
      </ul>

      <hr />
      <ul className="list list-row">
        <h3>By Color</h3>
        <ul>
          {colors.map((item) => {
            return <ColorItem key={item._id} Color={item} />;
          })}
        </ul>
      </ul>

      <hr />
      {/* <ul className="list">
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
      </ul> */}
    </aside>
  );
};
