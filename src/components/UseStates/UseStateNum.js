import React, {useState} from "react";
import '../../../src/App.css';

export default function UseStateNum() {
    const [stuNum, setNum] = useState(10);
    return (
        <>
            <div className="num-control">
                <button onClick={()=>setNum(stuNum-1)}>-1</button>
                <span className="num-display">{stuNum}</span>
                <button onClick={()=>setNum(stuNum+1)}>+1</button>
            </div>
        </>
    )
}