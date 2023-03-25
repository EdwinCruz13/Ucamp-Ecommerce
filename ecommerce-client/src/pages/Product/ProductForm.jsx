import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

//import the navbar in whole page sections
import { Navbar } from "../../components/Navbar/Navbar";
import { Aside } from "../../components/Aside/Aside";

//import type of categories
import { getCategoriesRequest } from "../../api/categories.api";
import { getColorsRequest } from "../../api/colors.api";

//context
import { ProductContext } from "../../context/ProductContext";
// import { CategoryContext } from "../../context/CategoryContext";
// import { ColorContext } from "../../context/ColorContext";

import "./ProductForm.css";

export const ProductForm = () => {
  const { SaveProduct } = useContext(ProductContext);

  //its necessary these useSate
  const [categories, setCategories] = useState([]);
  const [colors, setColors] = useState([]);
  const [form, setForm] = useState({
    Name: "",
    Description: "",
    Abbr: "",
    Url: "",
    Price: 0,
    Tax: 0,
    Discount: 0,
    inStock: true,
    Category: { _id: "", Description: "" },
    Color: { _id: "", Color: "", Hexadecimal: "" },
  });

  const [color, setColor] = useState("#ffffff");
  const navigate = useNavigate();

  useEffect(() => {
    //set the categories state
    async function fetchData() {
      let _category = await getCategoriesRequest();
      let _color = await getColorsRequest();

      setCategories(_category.data.data);
      setColors(_color.data.data);
    }

    fetchData();
  }, []);

  //allow to change the color
  const SelectColor = (e) => {
    var hexa = e.target.options[e.target.selectedIndex].dataset.hexadecimal;
    var color = e.target.options[e.target.selectedIndex].dataset.color;

    setColor(hexa);

    let _color = { _id: e.target.value, Color: color, Hexadecimal: hexa };
    setForm({ ...form, Color: _color });
  };

  const handleCategory = (e) => {
    let description =
      e.target.options[e.target.selectedIndex].dataset.description;
    let _category = { _id: e.target.value, Description: description };
    setForm({ ...form, Category: _category });
  };

  /**
   * this method allows to save the product
   */
  const handleChange = (event) => {
    event.preventDefault();
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await SaveProduct(form);
    alert(response.message);
    navigate(0);
  };

  return (
    <section className="product">
      <Navbar />

      <div id="ProductForm" className="container">
        <Aside ClassName="main-menu" />

        <form className="form" onSubmit={handleSubmit}>
          <h2>Create a new Product</h2>
          <div className="inputs-box">
            <div className="form-control-inline">
              <label htmlFor="Name">Name</label>
              <input
                type="text"
                id="Name"
                name="Name"
                className="form-control"
                placeholder="Name of Product"
                value={form.Name}
                onChange={handleChange}
              />
            </div>

            <div className="form-control-inline">
              <label htmlFor="Description">Description</label>
              <textarea
                id="Description"
                className="form-control"
                name="Description"
                rows="3"
                placeholder="Description"
                value={form.Description}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="form-control-inline">
              <label htmlFor="Category">Categories</label>
              <select
                id="Category"
                name="Category"
                className="form-control"
                placeholder="Categories"
                onChange={handleCategory}
              >
                <optgroup label="Select a category" style={{ padding: "2px" }}>
                  {categories.map((item) => {
                    return (
                      <option
                        key={item._id}
                        value={item._id}
                        data-description={item.Description}
                      >
                        {item.Description}
                      </option>
                    );
                  })}
                </optgroup>
              </select>
            </div> 

            <div className="form-control-inline">
              <label htmlFor="Colors">Colors</label>
              <input
                type="color"
                className="form-control"
                style={{ width: "40px", height: "36px", padding: "3px" }}
                readOnly
                value={color}
              />
              <select
                id="Colors"
                name="Colors"
                className="form-control"
                placeholder="Colors"
                onChange={(e) => SelectColor(e)}
                // value = {form.Color._id}
              >
                <optgroup label="Select a color" style={{ padding: "2px" }}>
                  <option value="" data-hexadecimal="#ffffff">
                    -- Select an option --
                  </option>
                  {colors.map((item) => {
                    return (
                      <option
                        className="color-hexadecimal"
                        key={item._id}
                        value={item._id}
                        data-hexadecimal={item.Hexadecimal}
                        data-color={item.Color}
                      >
                        {item.Color}
                      </option>
                    );
                  })}
                </optgroup>
              </select>
            </div> 

            <div className="form-control-inline">
              <label htmlFor="Description">Abreviation</label>
              <input
                type="text"
                id="Abbr"
                name="Abbr"
                className="form-control"
                placeholder="SIGT"
                value={form.Abbr}
                onChange={handleChange}
              />
            </div>

            <div className="form-control-inline">
              <label htmlFor="Url">URL</label>
              <input
                type="text"
                id="Url"
                name="Url"
                className="form-control"
                placeholder="https://static.nike.com/a/images/t_PDP_1728_v1/fdcbac72-e321-4fb0-a52f-ab549f69947a/air-jordan-2-retro-low-womens-shoes-PRd1BH.png"
                value={form.Url}
                onChange={handleChange}
              />
            </div>

            <div className="form-control-inline">
              <label htmlFor="Price">Unit price</label>
              <input
                type="number"
                id="Price"
                name="Price"
                className="form-control"
                placeholder="0.00 Price $"
                value={form.Price}
                onChange={handleChange}
              />
            </div>

            <div className="form-control-inline">
              <label htmlFor="Tax">Tax</label>
              <input
                type="number"
                id="Tax"
                name="Tax"
                className="form-control"
                placeholder="0.00 %"
                value={form.Tax}
                onChange={handleChange}
              />
            </div>

            <div className="form-control-inline">
              <label htmlFor="Discount">Discount</label>
              <input
                type="number"
                id="Discount"
                name="Discount"
                className="form-control"
                placeholder="0.00 %"
                value={form.Discount}
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
