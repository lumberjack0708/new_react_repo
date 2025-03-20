import React,{ useState } from "react";

export default function UseStatePr() {
    // const [state variable(狀態值), state setter(呼叫他可以改變值)] = useState(default value(初始值));
    const [text, setText] = useState("nothing");
    return (
        <>
            {/* `onChange`：設定目標值(setText)的值，與其連動 */}
            <input type="text" onChange={(e)=>setText(e.target.value)}/>
            <p>目前輸入的文字: {text}</p>
        </>
    )

}

