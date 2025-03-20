import React,{ useState } from "react";

export default function UseStatePr3() {
    const [stuAcc, setAcc] = useState("nothing"); 
    const [stuPwd, setPwd] = useState("nothing"); 
    const [stuEmail, setEmail] = useState("nothing"); 
    const [stuVerify, setverify] = useState("nothing"); 
    
    return (
        <>
            <h2>useState練習3：帳號資訊</h2>
            <input type="text" placeholder="請輸入帳號" onChange={(e)=>setAcc(e.target.value)}/><br/>
            <input type="password" placeholder="請輸入密碼" onChange={(e)=>setPwd(e.target.value)}/><br/>
            <input type="text" placeholder="請輸入電子郵件" onChange={(e)=>setEmail(e.target.value)}/><br/>
            <input type="text" placeholder="請輸入驗證碼" onChange={(e)=>setverify(e.target.value)}/>
            <br/>
            <p>帳號: {stuAcc}</p>
            <p>密碼: {stuPwd}</p>
            <p>電子郵件: {stuEmail}</p>
            <p>驗證碼: {stuVerify}</p>
        </>
    )
}