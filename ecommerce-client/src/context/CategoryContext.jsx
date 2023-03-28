import { createContext, useState } from "react";

//import api for this componente
import { getCategoriesRequest } from "../api/categories.api";

/**
 * Export the categoryContext
 */
export const CategoryContext = createContext();

export const CategoryContextProvider = ({ children }) => {
  //useState for this context
  const [categories, setCategories] = useState([]);
  const [Category, setCategory] = useState({});

  /**
   * event that select a specific category
   * @param {*} _item
   */
  const onSelectCategory = async (_item) => {
    if(_item)
      await setCategory(_item);
  };

  async function GetCategories() {
    const response = await getCategoriesRequest();
    const items = response.data;

    //set the categories state
    setCategories(items.data);
  }

  return (
    <CategoryContext.Provider
      value={{
        categories,
        setCategories,
        Category,
        setCategory,
        onSelectCategory,
        GetCategories
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
