import React, { useState } from 'react';
import '../App.css';

export default function MyMoney() {
    const [MyMoney, setMyMoney] = useState(50000);
    return (
        <div>
            <h1>Andy老師現在的身價是： {MyMoney.toFixed(0)}元</h1>
            <button onClick={() => setMyMoney(MyMoney + 0.100000000)} className='money-btn'>+0.1</button>
            <button onClick={() => setMyMoney(MyMoney - 0.10000000)} className='money-btn'>-0.1</button>
        </div>
    );
}