import React, { useState } from 'react';

export default function Calculator() {
  const [a, setA] = useState(16);
  const [b, setB] = useState(44);

  return (
    <>
    <div className='calculator'>
      <p>
        a: <input type="number" value={a} onChange={(e) => setA(Number(e.target.value))} />
      </p>
      <p>
        b: <input type="number" value={b} onChange={(e) => setB(Number(e.target.value))} />
      </p>
    </div>
    <div>
      <p>計算結果：{a + b}</p>
    </div>
    </>
  );
}