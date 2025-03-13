import React from 'react';
import Compon_N_list from './Compon_N list';

function Compons_N_list() {
    // 創建一個包含不同名字的陣列
    const compons = Array.from({ length: 10 });
    var list = ['a','b','c','d','e','f','g','h','i','j']; 
    var list1 = ['A','B','C','D','E','F','G','H','I','J'];
    
    return(
        <>
        <main>
            {compons.map((_, index) => (
                <Compon_N_list key={index} name={list[index]} name1={list1[index]}/>
            ))}
        </main>
        </>
    );
}
export default Compons_N_list;