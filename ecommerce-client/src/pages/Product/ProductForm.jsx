import React, { useEffect, useState } from "react";

//import the navbar in whole page sections
import { Navbar } from "../../components/Navbar/Navbar";
import { Aside } from "../../components/Aside/Aside";

//import type of categories
import { getCategoriesRequest } from "../../api/categories.api";
import { getColorsRequest } from "../../api/colors.api";

import "./ProductForm.css";

export const ProductForm = () => {
  const [categories, setCategories] = useState([]);
  const [colors, setColors] = useState([]);

  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    async function LoadCategories() {
      const response = await getCategoriesRequest();
      const items = response.data;

      //set the categories state
      setCategories(items.data);
    }

    async function LoadColors() {
        const response = await getColorsRequest();
        const items = response.data;
  
        //set the categories state
        setColors(items.data);
      }

      LoadCategories();
      LoadColors();
  }, []);


  //allow to change the color 
  const SelectColor = (e) => {
    var value = e.target.options[e.target.selectedIndex].dataset.hexadecimal;
    setColor(value)
  }


  return (
    <section className="product">
      <Navbar />

      <div id="ProductForm" className="container">
        <Aside ClassName="main-menu" />

        <form className="form">
          <div className="inputs-box">
            <div>
              <input
                type="text"
                id="Name"
                name="Name"
                className="form-control"
                placeholder="Name of Product"
              />
            </div>

            <div>
              <textarea
                id="Description"
                className="form-control"
                name="Description"
                rows="3"
                placeholder="Description"
              ></textarea>
            </div>

            <div>
              <select
                id="Categories"
                name="Categories"
                className="form-control"
                placeholder="Categories"
              >
                <optgroup label='Select a category' style={{padding: "2px"}}>
                {
                    categories.map((item) => {
                       return <option key={item._id} value={item._id}>{item.Description}</option>
                    })
                }
                </optgroup>
              </select>
            </div>

            <div>
              <input type="color" className="form-control" value={ color } style={{width:"40px", height:"36px", padding: "3px"}} readOnly />
              <select
                id="Colors"
                name="Colors"
                className="form-control"
                placeholder="Colors"
                onChange={ (e) => SelectColor(e)}
              >
                <optgroup label='Select a color' style={{padding: "2px"}}>
                <option value="" data-hexadecimal="#ffffff">-- Select an option --</option>
                {
                    colors.map((item) => {
                       return (
                        <option className="color-hexadecimal" key={item._id} value={item._id} data-hexadecimal = {item.Hexadecimal}>
                            {item.Color}
                       </option>)
                    })
                }
                </optgroup>
              </select>
            </div>

            <div>
              <input
                type="text"
                id="Abbr"
                name="Abbr"
                className="form-control"
                placeholder="Abbr"
              />
            </div>

            <div>
              <input
                type="text"
                id="Url"
                name="Url"
                className="form-control"
                placeholder="Url"
              />
            </div>

            <div>
              <input
                type="number"
                id="Price"
                name="Price"
                className="form-control"
                placeholder="Unit Price $"
              />
            </div>

            <div>
              <input
                type="number"
                id="Tax"
                name="Tax"
                className="form-control"
                placeholder="Tax %"
              />
            </div>

            <div>
              <input
                type="number"
                id="Discount"
                name="Discount"
                className="form-control"
                placeholder="Discount %"
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
