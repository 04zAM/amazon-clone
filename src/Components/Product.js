import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p className="product__name">Titulo</p>
        <p className="product__price">
          <small>$</small>
          <strong>100</strong>
        </p>
        <div className="product__rating">
          <p>⭐</p>
        </div>
      </div>
      <img
        alt="product__img"
        src="https://www.warmionline.com/quito/2895-large_default/set-de-10-focos-led-para-espejo.jpg"
        className="product__image"
      />
      <button>Agregar al Carrito</button>
    </div>
  );
}

export default Product;
