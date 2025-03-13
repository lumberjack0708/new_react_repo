import React from 'react';
import Compon_v1 from './Compon_items';

function Compons() {
    // 創建一個包含不同名字的陣列
    const compons = Array.from({ length: 4 });
    var list = ['A', 'B', 'C', 'D'];

    return (
        <div>
            <main>
                {compons.map((_, index) => (
                    <Compon_v1 key={index} item={list[index]} />
                ))}
            </main>
        </div>
    );
}

export default Compons;