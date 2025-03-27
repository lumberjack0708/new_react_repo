import React, { useState } from "react";
import CartSummary from "./CartSummary";
import StartRating from "./StartRating"; // 可復用評分功能
import productData from "../data/productData"; // 引入商品資料

export default function ProductList() {
  const [products, setProducts] = useState(productData);
  const [showCart, setShowCart] = useState(false);

  const handleRatingChange = (id, newRating) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, rating: newRating } : p))
    );
  };

  const handleQuantity = (id, action) => {
    setProducts((prev) =>
      prev.map((p) => {
        if (p.id !== id) return p;
        if (action === "inc") return { ...p, quantity: p.quantity + 1 };
        if (action === "dec" && p.quantity > 0) return { ...p, quantity: p.quantity - 1 };
        return p;
      })
    );
  };

  return (
    <>
      <h2>商品清單</h2>
      <div className="product-list-container">
        {products.map((item) => (
          <div key={item.id} className="product-card">
            <div className="product-image-container">
              <img 
                src={item.image} 
                alt={item.name} 
                className="product-image"
              />
            </div>
            <h4>{item.name}</h4>
            {item.price && (
              <p className="product-price">${item.price.toLocaleString()}</p>
            )}
            {item.description && (
              <p className="product-description">{item.description}</p>
            )}
            <div>
              <StartRating
                totalStars={5}
                selectedStars={item.rating}
                onRate={(newRating) => handleRatingChange(item.id, newRating)}
              />
            </div>
            <div className="product-quantity-control">
              <button 
                onClick={() => handleQuantity(item.id, "dec")}
                className="product-quantity-button"
                disabled={item.quantity <= 0}
              >
                -
              </button>
              <span className="product-quantity-display">{item.quantity}</span>
              <button 
                onClick={() => handleQuantity(item.id, "inc")}
                className="product-quantity-button"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <br />
      <button 
        onClick={() => setShowCart(!showCart)}
        className="toggle-cart-button"
      >
        {showCart ? "隱藏購物車" : "購物車清單"}
      </button>
      {showCart && <CartSummary products={products} />}
    </>
  );
}