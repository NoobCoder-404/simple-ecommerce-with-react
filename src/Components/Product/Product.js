/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import './Product.css';

const Product = (props) => {
  const { name, img, seller, price, ratings } = props.product;
  const { handleAddToCart } = props;
  return (
    <div className="card shadow-xl">
      <figure className="figure">
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Price : {price}</p>
        <p>Seller : {seller}</p>
        <p>Ratings : {ratings} stars</p>
        <div className=" btn-cart">
          <button onClick={() => handleAddToCart(props.product)}>
            Add to Cart <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
