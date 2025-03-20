import React, { useState } from "react";

export default function UseState5() {
    const [quantity, setQuantity] = useState(1);
    const [productName, setProductName] = useState("Formula1 car");
    const [userId, setUserId] = useState("");  // 新增用戶代號狀態
    
    // 防止數量小於0
    const decreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <>
            <div style={{ maxWidth: '500px', margin: '20px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
                <h3>購物車</h3>
                
                {/* 用戶代號輸入 - 新增的部分 */}
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>用戶代號：</label>
                    <input 
                        type="text" 
                        value={userId} 
                        onChange={(e) => setUserId(e.target.value)}
                        placeholder="請輸入用戶代號"
                        style={{ padding: '8px', width: '100%', boxSizing: 'border-box' }}
                    />
                </div>
                
                {/* 商品名稱輸入 */}
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>商品名稱：</label>
                    <input 
                        type="text" 
                        value={productName} 
                        onChange={(e) => setProductName(e.target.value)}
                        style={{ padding: '8px', width: '100%', boxSizing: 'border-box' }}
                    />
                </div>
                
                {/* 購買數量控制 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <label>購買數量：</label>
                    <button 
                        onClick={decreaseQuantity}
                        style={{ padding: '5px 10px', cursor: 'pointer' }}
                        disabled={quantity <= 0}
                    >
                        -
                    </button>
                    <span style={{ fontSize: '18px', margin: '0 10px', minWidth: '30px', textAlign: 'center' }}>
                        {quantity}
                    </span>
                    <button 
                        onClick={() => setQuantity(quantity + 1)}
                        style={{ padding: '5px 10px', cursor: 'pointer' }}
                    >
                        +
                    </button>
                </div>
                
                {/* 訂單摘要 */}
                <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f5f5f5', borderRadius: '5px' }}>
                    <p style={{ margin: '5px 0' }}>用戶代號：{userId || "尚未設定"}</p>
                    <p style={{ margin: '5px 0' }}>商品：{productName}</p>
                    <p style={{ margin: '5px 0' }}>數量：{quantity}</p>
                    {quantity === 0 && (
                        <p style={{ color: 'red', margin: '5px 0' }}>請至少選擇1件商品</p>
                    )}
                    {!userId && (
                        <p style={{ color: 'orange', margin: '5px 0' }}>提示：請輸入用戶代號!!</p>
                    )}
                </div>
            </div>
        </>
    );
}