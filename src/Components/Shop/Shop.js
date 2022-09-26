import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  const [products, setProduct] = useState([]);
  const handleAddToCart = (product) => {
    console.log(product);
  };
  useEffect(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
        ))}
      </div>
      <div className="cart-container">
        <h1>This is cart</h1>
      </div>
    </div>
  );
};

export default Shop;
