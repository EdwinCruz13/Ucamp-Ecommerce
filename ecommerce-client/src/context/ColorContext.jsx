import { createContext, useState } from "react";
import { getColorsRequest, postSaveColorsRequest } from "../api/colors.api";

export const ColorContext = createContext();

/**
 * this method allow share a color context
 * @param {*} param0
 * @returns
 */
export const ColorContextProvider = ({ children }) => {
  const [colors, setColors] = useState([]);
  const [color, setColor] = useState({});

  /**
   * Load all the colors
   */
  async function GetColors() {
    try {
      const response = await getColorsRequest();
      const values = await response.data;

      setColors(values);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Allow to save color
   * @param {*} _color
   */
  async function SaveColor(_color) {
    try {
      const response = await postSaveColorsRequest(_color);
      const values = await response.data;

      return values;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ColorContext.Provider value={{ colors, setColors, color, setColor, GetColors, SaveColor }}>
      {children}
    </ColorContext.Provider>
  );
};
