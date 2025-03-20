import React, { useState } from "react";
import '../../../src/App.css'; 

export default function UseState5() {
    const [quantity, setQuantity] = useState(1);
    const [productName, setProductName] = useState("Formula1 car");
    const [userId, setUserId] = useState(""); 
    
    // 防止數量小於0
    const decreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <>
            <div className="shopping-cart-container">
                <h3>購物車</h3>
                
                {/* 用戶名稱輸入 */}
                <div className="input-group">
                    <label className="input-label">用戶代號：</label>
                    <input 
                        type="text" 
                        value={userId} 
                        onChange={(e) => setUserId(e.target.value)}
                        placeholder="請輸入用戶代號"
                        className="input-field"
                    />
                </div>
                
                {/* 商品名稱輸入 */}
                <div className="input-group">
                    <label className="input-label">商品名稱：</label>
                    <input 
                        type="text" 
                        value={productName} 
                        onChange={(e) => setProductName(e.target.value)}
                        className="input-field"
                    />
                </div>
                
                {/* 購買數量 */}
                <div className="quantity-control">
                    <label>購買數量：</label>
                    <button 
                        onClick={decreaseQuantity}
                        className="quantity-button"
                        disabled={quantity <= 0}
                    >
                        -
                    </button>
                    <span className="quantity-display">
                        {quantity}
                    </span>
                    <button 
                        onClick={() => setQuantity(quantity + 1)}
                        className="quantity-button"
                    >
                        +
                    </button>
                </div>
                
                {/* 訂單摘要 */}
                <div className="order-summary">
                    <p className="summary-item">用戶代號：{userId || "尚未設定"}</p>
                    <p className="summary-item">商品：{productName}</p>
                    <p className="summary-item">數量：{quantity}</p>
                    {quantity === 0 && (
                        <p className="error-message">請至少選擇1件商品</p>
                    )}
                    {!userId && (
                        <p className="warning-message">提示：請輸入用戶代號!!</p>
                    )}
                </div>
            </div>
        </>
    );
}