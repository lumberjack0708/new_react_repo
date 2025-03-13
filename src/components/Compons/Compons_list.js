import React from 'react';
import Compon from './Compon_base';

function Compons_list() {
    // 創建一個包含不同名字的陣列
    const compons = Array.from({ length: 10 });
    var list = ['a','b','c','d','e','f','g','h','i','j']; 
    
    return(
        <>
        <main>
            {compons.map((_, index) => (
                <Compon key={index} name={list[index]} />
            ))}
        </main>
        </>
    );
}
export default Compons_list;