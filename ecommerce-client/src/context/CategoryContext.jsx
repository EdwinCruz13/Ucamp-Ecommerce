import { createContext, useState } from "react";

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
    await setCategory(_item);
  };

  return (
    <CategoryContext.Provider
      value={{ categories, setCategories, Category, setCategory, onSelectCategory}}
    >
      {children}
    </CategoryContext.Provider>
  );
};
