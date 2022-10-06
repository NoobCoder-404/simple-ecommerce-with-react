/* eslint-disable react/prop-types */
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = ({ product, handleAddToCart }) => {
  const { img, price, ratings, name, seller } = product;

  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <img src={img} alt="Shoes" />
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>
            <span className="price-highlight">Price : </span>
            <span>${price}</span>
          </p>
          <p>Manufacture : {seller}</p>
          <p>
            Rating : {ratings}
            <span className="mx-2">stars</span>
          </p>
          <div className="card-actions justify-center ">
            <button onClick={() => handleAddToCart(product)} className="btn btn-primary w-full">
              Add to Cart
              <FontAwesomeIcon className="px-2" icon={faCartPlus} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
