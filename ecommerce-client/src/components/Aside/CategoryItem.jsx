import { React, useContext } from "react";

//import categories context
import { CategoryContext } from "../../context/CategoryContext";

/**
 * return all item of categories of products
 * @param {*} item
 * @returns
 */
export const CategoryItem = ({ Category }) => {
  //use the function "onSelectCategory" from categoryContext... allow selecte an specific category
  const { onSelectCategory } = useContext(CategoryContext);

  return (
    <li>
      <a onClick={() => onSelectCategory(Category)}>{Category.Description}</a>
    </li>
  );
};
