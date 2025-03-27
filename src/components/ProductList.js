import React, { useState } from "react";
import CartSummary from "./CartSummary";
import StartRating from "./StartRating"; // 可復用評分功能
import productData from "../data/productData"; // 引入商品資料

export default function ProductList() {
  // 使用外部資料初始化
  const [products, setProducts] = useState(productData);
  const [showCart, setShowCart] = useState(false);

  // 更新商品評分
  const handleRatingChange = (id, newRating) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, rating: newRating } : p))
    );
  };

  // 更新商品數量
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

  // 商品卡片樣式
  const productCardStyle = {
    border: "1px solid #ccc",
    padding: "15px",
    borderRadius: "8px",
    width: "200px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
  };

  // 圖片容器樣式
  const imageContainerStyle = {
    width: "100%",
    height: "150px",
    overflow: "hidden",
    marginBottom: "10px",
    borderRadius: "4px"
  };

  // 圖片樣式
  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center"
  };

  return (
    <>
      <h2>商品清單</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((item) => (
          <div key={item.id} style={productCardStyle}>
            <div style={imageContainerStyle}>
              <img 
                src={item.image} 
                alt={item.name} 
                style={imageStyle}
              />
            </div>
            <h4>{item.name}</h4>
            {/* 如果有價格資訊，也可以顯示 */}
            {item.price && (
              <p style={{ fontWeight: "bold" }}>${item.price.toLocaleString()}</p>
            )}
            {/* 顯示簡短描述 */}
            {item.description && (
              <p style={{ fontSize: "12px", height: "40px", overflow: "hidden" }}>
                {item.description}
              </p>
            )}
            <div>
              <StartRating
                totalStars={5}
                selectedStars={item.rating}
                onRate={(newRating) => handleRatingChange(item.id, newRating)}
              />
            </div>
            <div style={{ marginTop: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <button 
                onClick={() => handleQuantity(item.id, "dec")}
                style={{ padding: "5px 10px" }}
                disabled={item.quantity <= 0}
              >
                -
              </button>
              <span style={{ margin: "0 10px", fontWeight: "bold" }}>{item.quantity}</span>
              <button 
                onClick={() => handleQuantity(item.id, "inc")}
                style={{ padding: "5px 10px" }}
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
        style={{
          padding: "8px 16px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}
      >
        {showCart ? "隱藏購物車" : "購物車清單"}
      </button>
      {showCart && <CartSummary products={products} />}
    </>
  );
}