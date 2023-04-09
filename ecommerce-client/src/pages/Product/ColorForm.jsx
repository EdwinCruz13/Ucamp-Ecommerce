import React, { useEffect, useState } from "react";
import { useContext } from "react";

//import the navbar in whole page sections
import { Navbar } from "../../components/Navbar/Navbar";
import { Aside } from "../../components/Aside/Aside";

//context
import { UserContext } from "../../context/UserContext";
import { ColorContext } from "../../context/ColorContext";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

import "./ProductForm.css";

export const ColorForm = () => {
  const { SaveColor } = useContext(ColorContext);
  const { VerifyingToken } = useContext(UserContext);
  const { GetItemmAdded } = useContext(ShoppingCartContext);

  const [form, setForm] = useState({ Color: "", Hexadecimal: "" });

  useEffect(() => {
    async function init() {
      await VerifyingToken();
      await GetItemmAdded();
    }

    init();
  }, []);

  /**
   * this method allows to save the product
   */
  const handleChange = (event) => {
    event.preventDefault();
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await SaveColor(form);
      alert(response.message);
    } catch (error) {
      console.log(error);
    }

    //navigate(0);
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
