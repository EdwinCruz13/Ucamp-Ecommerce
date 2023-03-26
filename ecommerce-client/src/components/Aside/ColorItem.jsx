import { React, useContext } from "react";

//import categories context
import { ColorContext } from "../../context/ColorContext";

export const ColorItem = ({ Color }) => {
  const { onSelectColor } = useContext(ColorContext);

  return (
    <li className="color-item">
      <a className="color-link" onClick={() => onSelectColor(Color)}>
        <span
          className="color-item-container"
          style={{ backgroundColor: Color.Hexadecimal }}
        ></span>
      </a>
    </li>
  );
};
