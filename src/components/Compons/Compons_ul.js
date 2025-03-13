import React from 'react';
import Compon_ul from './Compon_ul';

function Compons_ul() {
    // 創建一個包含不同名字的陣列
    const compons = Array.from({ length: 10 });
    var list = ['第一','第二','第三','第四','第五','第六','第七','第八','第九','第十']; 
    
    return (
        <>
            <ul>
                {compons.map((_, index) => (
                    <Compon_ul key={index} item={list[index]} />
                ))}
            </ul>
        </>
    );
}

export default Compons_ul;