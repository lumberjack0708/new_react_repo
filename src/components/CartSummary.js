import React from "react";

export default function CartSummary({ products }) {
  // 計算總數量
  const totalQuantity = products.reduce((acc, item) => acc + item.quantity, 0);
  
  // 計算總價
  const totalPrice = products.reduce((acc, item) => 
    acc + (item.price || 0) * item.quantity, 0);

  // 只顯示數量大於0的商品
  const cartItems = products.filter(item => item.quantity > 0);

  return (
    <div className="cart-summary-container">
      <h3>購物車清單</h3>
      
      {cartItems.length === 0 ? (
        <p>購物車內沒有商品</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>商品</th>
                <th className="center">單價</th>
                <th className="center">數量</th>
                <th className="right">小計</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="cart-item-container">
                      <div className="cart-item-image-container">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="cart-item-image"
                        />
                      </div>
                      <div>
                        <p className="cart-item-name">{item.name}</p>
                        <p className="cart-item-rating">評分：{item.rating}</p>
                      </div>
                    </div>
                  </td>
                  <td className="center">
                    ${(item.price || 0).toLocaleString()}
                  </td>
                  <td className="center">
                    {item.quantity}
                  </td>
                  <td className="right">
                    ${((item.price || 0) * item.quantity).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <div className="cart-summary-footer">
            <p className="cart-total">總數量：{totalQuantity}</p>
            <p className="cart-total">總價：${totalPrice.toLocaleString()}</p>
          </div>
        </>
      )}
    </div>
  );
}