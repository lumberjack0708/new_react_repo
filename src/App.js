import React, { useState } from 'react';
import './App.css';
import Greeting from './components/Greeting';
import Calculator from './components/Calculator';
import Clock from './components/Clock'; // 顯示現在時間的fn component
import Gallery from './components/Gallery'; // 顯示圖片的fn component

const posts = [
  {
    id: 1,
    title: 'Lewis Hamilton',
    content: '一名極具傳奇色彩的賽車手，曾獲得7次車手世界冠軍，幫助Mercedes-AMG Petronas F1 Team贏得多個車隊世界冠軍。於2024年底拋出震撼彈決定轉會Ferrari，並在2025年準備挑戰第8次車手世界冠軍。我是他的粉絲，我愛他。'
  },
  {
    id: 2,
    title: 'Charles Leclerc',
    content: '法拉利車隊新生代最強車手，先後擊敗四屆冠軍Sebastian Vettel和Carlos Sainz，成為法拉利車隊的領軍人物，且在2024年底Lewis Hamilton加盟法拉利後，與Lewis Hamilton組成最強車隊，2025年準備挑戰車隊世界冠軍。'
  },
  {
    id: 3,
    title: 'Fernando Alonso',
    content: '圍場長青樹，若Fernando早一點結婚生子的話小孩已經比新生代車手還要大了，以42歲的高齡仍活躍於圍場並力壓同隊車手Lance Stroll。'
  }
];

function Blog(props) {
  const content = props.posts.map((post) =>
    <div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {content}
    </div>
  );
}

function Welcome(props) {
  return <p>Hi,{props.name}</p>;
}

function App() {
  const [a, setA] = useState(16);
  const [b, setB] = useState(44);

  return (
    <>
      <div>
        <div className='header'>
          <Greeting/>
          <Clock />
        </div>

        {/* 四則運算 */}
        <p>
          a: <input type="number" value={a} onChange={(e) => setA(Number(e.target.value))} />
        </p>
        <p>
          b: <input type="number" value={b} onChange={(e) => setB(Number(e.target.value))} />
        </p>
        <div className='calculator'>
          <Calculator a={a} b={b} />
        </div>

      </div>

      {/* 部落格type print */}
      <Blog posts={posts} />

      {/* function components並傳入props */}
      <div className='App'>
        <Welcome name="Formula1 Drivers" />
      </div>

      {/* 圖片 */}
      <Gallery />
    </>
  );
}

export default App;