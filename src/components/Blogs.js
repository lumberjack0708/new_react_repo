import React from 'react';

export default function Posts() {
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

  return (
    <div>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </article>
      ))}
    </div>
  );
}