import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://cdn.pixabay.com/photo/2016/11/22/10/47/girl-1848947_960_720.jpg"
          alt="home_img"
        ></img>
        <div className="home__row">
          <Product />
        </div>
        <div className="home__row"></div>
        <div className="home__row"></div>
      </div>
    </div>
  );
}

export default Home;
