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

export function NumberWithLimitByHTML() {
    const [number, setNumber] = useState(5);
    return (
        <>
            <div className="num-control">
                {/* -1 按鈕只在 number > 0 時顯示 */}
                {(number > 0) && (<button onClick={() => setNumber(number - 1)}>-1</button>)}
                
                <span className="num-display">{number}</span>
                
                {/* +1 按鈕只在 number < 10 時顯示 */}
                {(number < 10) && (<button onClick={() => setNumber(number + 1)}>+1</button>)}
            </div>
        </>
    );
}
export function NumberWithLimitByDisable() {
    const [number, setNumber] = useState(5);
    return (
        <>
            <div className="num-control">
                {/* -1 按鈕在 number <= 0 時禁用 */}
                <button 
                    onClick={() => setNumber(number - 1)} 
                    disabled={number <= 0}
                    style={{
                        opacity: number <= 0 ? 0.5 : 1,
                        cursor: number <= 0 ? 'not-allowed' : 'pointer'
                    }}
                >
                    -1
                </button>
                
                <span className="num-display">{number}</span>
                
                {/* +1 按鈕在 number >= 10 時禁用 */}
                <button 
                    onClick={() => setNumber(number + 1)} 
                    disabled={number >= 10}
                    style={{
                        opacity: number >= 10 ? 0.5 : 1,
                        cursor: number >= 10 ? 'not-allowed' : 'pointer'
                    }}
                >
                    +1
                </button>
            </div>
        </>
    );
}
