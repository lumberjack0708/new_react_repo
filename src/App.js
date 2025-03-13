import React, { useState } from 'react';
import './App.css';
import Greeting from './components/Greeting';
import Calculator from './components/Calculator';
import Clock from './components/Clock'; // 顯示現在時間的fn component
import Gallery from './components/Gallery'; // 顯示圖片的fn component
import Blog from './components/Blogs'; // 顯示部落格的fn component
import Welcome from './components/Welcome'; // 顯示歡迎訊息的fn component
import MyMoney from './components/MyMoney'; // 顯示身價的fn component
import Compon from './components/Compon_base'; // 顯示多種呼叫範例模組的fn component(單一值)
import Compons from './components/Compons_items'; // 顯示多種呼叫範例模組的fn component(多值)
import Compons_list from './components/Compons_list'; // 顯示多種呼叫範例模組的fn component(多值)_list
import Compons_ul from './components/Compons_ul';

function App() {
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

      {/* 多次呼叫的範例(單一值) */}
      <div> 
        <h2>Compon基礎呼叫</h2>
        <Compon name="compon"/>
        <Compon name="compon"/>
        <Compon name="compon"/>
        <Compon name="compon"/>
      </div>
      <hr/>

      {/* 多次呼叫的範例(items) */}
      <div>
        <h2>Compon items多次呼叫</h2>
        <Compons />
      </div>
      <hr/>

      {/*  多次呼叫的範例_list */}
      <div>
        <h2>Compon list</h2>
        <Compons_list />
      </div>
      <hr/>

      {/* Compons_ul寫法 */}
      <div>
        <h2>Compon ul</h2>
        <Compons_ul />
      </div>
      <hr/>
    </>
  );
}

export default App;