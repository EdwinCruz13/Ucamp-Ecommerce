import React from "react";

import "./Aside.css";

export const Aside = ({ ClassName }) => {
  return (
    <aside className={ClassName}>
      <ul className="list">
        <h3>Type</h3>
        <li>
          <a href="#">Shoes</a>
        </li>
        <li>
          <a href="#">Jordan</a>
        </li>
        <li>
          <a href="#">Clothing</a>
        </li>
        <li>
          <a href="#">Hoodies & Pullovers</a>
        </li>

        <li>
          <a href="#">Shorts</a>
        </li>

        <li>
          <a href="#">Tops & T-Shirts</a>
        </li>

        <li>
          <a href="#">Pants & Tights</a>
        </li>

        <li>
          <a href="#">Jackets & Vests</a>
        </li>

        <li>
          <a href="#">Accesories & Equipments</a>
        </li>

        <li>
          <a href="#">Socks</a>
        </li>
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
