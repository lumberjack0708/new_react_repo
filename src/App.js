import React from 'react';
import './App.css';
import Greeting from './components/Greeting';
import Calculator from './components/Calculator';
import Clock from './components/Clock'; // 顯示現在時間的fn component
import Gallery from './components/Gallery'; // 顯示圖片的fn component
import Blog from './components/Blogs'; // 顯示部落格的fn component
import Welcome from './components/Welcome'; // 顯示歡迎訊息的fn component
import MyMoney from './components/MyMoney'; // 顯示身價的fn component
import ComponSwitcher from './components/Compons/ComponSwitcher'; // 元件切換器

function App() {
  // 範例資料
  const sampleData = ['項目1', '項目2', '項目3', '項目4', '項目5', '項目6', '項目7', '項目8', '項目9', '項目10'];
  
  return (
    <>
      <div>
        <div className='header'>
          <Greeting/>
          <Clock />
        </div>

        {/* 四則運算 */}
        <div>
          <Calculator />
        </div>

      </div>

      {/* 部落格type print */}
      <Blog />

      {/* function components並傳入props */}
      <div className='App'>
        <Welcome name="Formula1 Drivers" />
      </div>

      {/* 圖片 */}
      <Gallery />

      {/* 身價模組 */}
      <MyMoney />

      {/* 使用 ComponSwitcher 切換不同元件類型 */}
      <h1>元件切換示範</h1>
      
      {/* 基礎元件 */}
      <ComponSwitcher type="compon" />
      
      {/* items元件 */}
      <ComponSwitcher type="items" />
      
      {/* 列表元件 */}
      <ComponSwitcher type="list" />
      
      {/* 嵌套列表元件 */}
      <ComponSwitcher type="nlist" />
      
      {/* 無序列表元件 */}
      <ComponSwitcher type="ul" data={sampleData} />
    </>
  );
}

export default App;