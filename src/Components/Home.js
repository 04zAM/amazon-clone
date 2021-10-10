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
          <Product
            id="p001"
            title="Titulo 1"
            price={29.99}
            image="https://www.warmionline.com/quito/2895-large_default/set-de-10-focos-led-para-espejo.jpg"
            rating={5}
          />
          <Product
            id="p002"
            title="Titulo 2"
            price={39.99}
            image="https://www.warmionline.com/quito/2895-large_default/set-de-10-focos-led-para-espejo.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="p003"
            title="Titulo 3"
            price={19.99}
            image="https://www.warmionline.com/quito/2895-large_default/set-de-10-focos-led-para-espejo.jpg"
            rating={5}
          />
          <Product
            id="p004"
            title="Titulo 4"
            price={9.99}
            image="https://www.warmionline.com/quito/2895-large_default/set-de-10-focos-led-para-espejo.jpg"
            rating={5}
          />
          <Product
            id="p005"
            title="Titulo 5"
            price={59.99}
            image="https://www.warmionline.com/quito/2895-large_default/set-de-10-focos-led-para-espejo.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="p005"
            title="Titulo 5"
            price={59.99}
            image="https://www.warmionline.com/quito/2895-large_default/set-de-10-focos-led-para-espejo.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
