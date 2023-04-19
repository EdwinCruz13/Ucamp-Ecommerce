import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";

import fb_icon from "../../images/icons/fb.png";
import instagram_icon from "../../images/icons/instagram.png";
import twitter_icon from "../../images/icons/twitter.png";
import tiktok_icon from "../../images/icons/tiktok.png";

export const Contact = () => {
  return (
    <section id="container">
      <Navbar />

      <div id="Home" className="container">
        <section id="home-header">
          <article>
            <h1 className="title">Contact</h1>
            <p>
              From your contact, we will contact you to review dates and
              schedule availability.
            </p>

            <p>
              <b>Address</b>
              <br />
              Bo La fuente, Duya Mágica 1C Sur, Managua, Nicaragua.
              <br />
              Calle Real Xalteva 43000 Granada, Nicaragua.
            </p>

            <p>Find us on</p>
            <div id="social-media-link">
              <ul>
                <li>
                  <a href="#">
                    <img src={tiktok_icon} alt="SocialMedia-tiktok" />
                  </a>
                </li>

                <li>
                  <a href="#">
                    <img src={twitter_icon} alt="SocialMedia-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={instagram_icon} alt="SocialMedia-instagran" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={fb_icon} alt="SocialMedia-fb" />
                  </a>
                </li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </section>
  );
};
