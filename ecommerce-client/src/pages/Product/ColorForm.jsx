import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

//import the navbar in whole page sections
import { Navbar } from "../../components/Navbar/Navbar";
import { Aside } from "../../components/Aside/Aside";

//context
import { ColorContext } from "../../context/ColorContext";

import "./ProductForm.css";

export const ColorForm = () => {
  const navigate = useNavigate();
  //const { colors, color, LoadColors, SaveColor } = useContext(ColorContext);
  const [form, setForm] = useState({ Color: "", Hexadecimal: "" });

  useEffect(() => {
    //LoadColors();
  }, []);

  //allow to change the color
  const SelectColor = (e) => {
    /*var hexa = e.target.options[e.target.selectedIndex].dataset.hexadecimal;
    var color = e.target.options[e.target.selectedIndex].dataset.color;

    setColor(hexa);

    let _color = { _id: e.target.value, Color: color, Hexadecimal: hexa}
    setForm({ ...form, Color: _color });*/
  };

  /**
   * this method allows to save the product
   */
  const handleChange = (event) => {
    event.preventDefault();
    setForm({ ...form, [event.target.name]: event.target.value });

    console.log(form);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    navigate(0);
  };

  return (
    <section className="product">
      <Navbar />

      <div id="ProductForm" className="container">
        <Aside ClassName="main-menu" />

        <form className="form" onSubmit={handleSubmit}>
          <h2>Create a new Color value</h2>
          <div className="inputs-box">
            <div className="form-control-inline">
              <label htmlFor="Name">Color Name</label>
              <input
                type="text"
                id="Color"
                name="Color"
                className="form-control"
                placeholder="Name of Product"
                value={form.Color}
                onChange={handleChange}
              />
            </div>

            <div className="form-control-inline">
              <label htmlFor="Colors">Colors</label>
              <input
                type="color"
                id="Hexadecimal"
                name="Hexadecimal"
                className="form-control"
                style={{ width: "40px", height: "36px", padding: "3px" }}
                value={form.Hexadecimal}
                onChange={handleChange}
                
              />
            </div>

            <button className="btn btn-primary">Sign Up</button>
          </div>
        </form>
      </div>
    </section>
  );
};

/*
    ProductID: { type: Number, unique: true, require: true, trim: true}, 
    Category: CategorySchema,
    Color: ColorSchema,
    Name: { type: String, unique: true, trim: true, lowercase: false, require: true},
    Description: { type: String, trim: true, lowercase: false, require: true},
    Abbr: {type: String, trim: true, lowercase: false, require: true},
    Url: { type: String, trim: true, lowecase:true, require: true},
    Price: { type: Number, require: true, require: true},
    Tax: { type: Number, require: true },
    Discount: { type: Number, require: true },
    inStock: { type: Boolean, require: true }
*/
