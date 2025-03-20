import React,{useState} from "react";

export default function UseStateNum() {
    const [stuNum, setNum] = useState(10);
    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button onClick={()=>setNum(stuNum-1)}>-1</button>
                <span style={{ fontSize: '20px', margin: '0 10px' }}>{stuNum}</span>
                <button onClick={()=>setNum(stuNum+1)}>+1</button>
            </div>
        </>
    )
}