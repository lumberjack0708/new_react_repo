import React from 'react';
import Compon_items from './Compon_items';

function Compons_items() {
    // 創建一個包含不同名字的陣列
    const compons = Array.from({ length: 4 });
    var list = ['A', 'B', 'C', 'D'];

    return (
        <div>
            <main>
                {compons.map((_, index) => (
                    <Compon_items key={index} item={list[index]} />
                ))}
            </main>
        </div>
    );
}

export default Compons_items;