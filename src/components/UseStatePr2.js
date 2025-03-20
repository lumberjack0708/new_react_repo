import React,{ useState } from "react";

export default function UseStatePr2() {
    const [stuNum, setNum] = useState("nothing"); 
    const [stuName, setName] = useState("nothing"); 
    return (
        <>
            <h2>useState練習2：學業資訊</h2>
            <input type="text" placeholder="請輸入學號" onChange={(e)=>setNum(e.target.value)}/>
            <p>學號: {stuNum}</p>
            <input type="text" placeholder="請輸入姓名" onChange={(e)=>setName(e.target.value)}/>
            <p>姓名: {stuName}</p>
        </>
    )
}