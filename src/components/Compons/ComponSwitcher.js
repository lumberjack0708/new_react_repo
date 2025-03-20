import React from 'react';
import Compon from './Compon_base';          // 引入基礎元件
// 修改元件引入命名為 PascalCase
import ComponItems from './ComponItems';   // 引入項目元件
import ComponNList from './ComponNList'; // 引入嵌套列表元件
import ComponUl from './ComponUl';         // 引入無序列表元件

/**
 * 修改後的單一項目元件(items) - 多個項目渲染
 * @param {Array} items - 顯示項目的陣列，若未提供則使用預設值
 */
const ItemComponent = ({ items }) => {
    // 創建一個固定長度為4的陣列，用於渲染固定數量的元件
    const compons = Array.from({ length: 4 });
    // 如果有傳入 items 就使用，否則使用預設值
    const list = items || ['A', 'B', 'C', 'D'];

    return (
        <div>
            <main>
                {/* 使用map方法將每個項目渲染為ComponItems元件 (修改元件命名) */}
                {compons.map((_, index) => (
                    <ComponItems key={index} item={list[index]} />
                ))}
            </main>
        </div>
    );
};

/**
 * 簡單列表元件(list) - 渲染單一層級列表
 * @param {Array} items - 顯示項目的陣列，若未提供則使用預設值
 */
const ListComponent = ({ items }) => {
    // 創建一個固定長度為10的陣列，用於渲染固定數量的元件
    const compons = Array.from({ length: 10 });
    // 使用傳入的items或預設小寫字母列表
    const list = items || ['a','b','c','d','e','f','g','h','i','j']; 
    
    return(
        <>
        <main>
            {/* 使用map方法將每個項目渲染為基礎Compon元件 */}
            {compons.map((_, index) => (
                <Compon key={index} name={list[index]} />
            ))}
        </main>
        </>
    );
};

/**
 * 嵌套列表元件 (N list) - 支援兩層資料結構
 * @param {Array} items - 第一層列表項目，若未提供則使用預設值
 * @param {Array} items1 - 第二層列表項目，若未提供則使用預設值
 */
const NestedListComponent = ({ items, items1 }) => {
    // 創建一個固定長度為10的陣列，用於渲染固定數量的元件
    const compons = Array.from({ length: 10 });
    // 設置第一層和第二層列表的資料來源
    const list = items || ['a','b','c','d','e','f','g','h','i','j']; 
    const list1 = items1 || ['A','B','C','D','E','F','G','H','I','J'];
    
    return(
        <>
        <main>
            {/* 使用map方法將兩層資料傳遞給ComponNList元件 (修改元件命名) */}
            {compons.map((_, index) => (
                <ComponNList 
                    key={index} 
                    name={list[index]}  // 第一層資料 (小寫)
                    name1={list1[index]} // 第二層資料 (大寫)
                />
            ))}
        </main>
        </>
    );
};

/**
 * 無序列表元件 (UL) - 使用HTML的ul元素渲染列表
 * @param {Array} items - 顯示項目的陣列，若未提供則使用預設值
 */
const ULComponent = ({ items }) => {
    // 創建一個固定長度為10的陣列，用於渲染固定數量的元件
    const compons = Array.from({ length: 10 });
    // 使用傳入的items或預設中文序數詞列表
    const list = items || ['第一','第二','第三','第四','第五','第六','第七','第八','第九','第十']; 
    
    return (
        <>
            <ul>
                {/* 使用map方法將每個項目渲染為ComponUl元件 (修改元件命名) */}
                {compons.map((_, index) => (
                    <ComponUl key={index} item={list[index]} />
                ))}
            </ul>
        </>
    );
};

/**
 * 邏輯閥元件 - 根據類型選擇要渲染的元件
 * @param {string} type - 元件類型，決定渲染哪種元件
 * @param {Array} data - 傳遞給各元件的資料
 */
const ComponSwitcher = ({ type, data }) => {
// 根據類型選擇要渲染的元件
switch (type) {
    case 'compon':
        // 基本元件 - 直接硬編碼四個相同的基礎元件
        return (
            <>
                {/* 多次呼叫的範例(單一值) */}
                <div> 
                    <h2>Compon基礎呼叫</h2>
                    <Compon name="compon"/>
                    <Compon name="compon"/>
                    <Compon name="compon"/>
                    <Compon name="compon"/>
                </div>
                <hr/>
            </>
        );
    case 'items':
        // 項目元件 - 傳入動態資料
        return (
            <>
                {/* 多次呼叫的範例(items) */}
                <div>
                    <h2>Compon items多次呼叫</h2>
                    <ItemComponent items={data}/>
                </div>
                <hr/>
            </>
        );
    case 'list':
        // 列表元件 - 傳入動態資料
        return (
            <>
                {/*  多次呼叫的範例_list */}
                <div>
                    <h2>Compon list</h2>
                    <ListComponent items={data}/>
                </div>
                <hr/>
            </>
        );
    case 'nlist':
        // 嵌套列表元件 - 設定兩組預設資料
        const lowerCaseItems = ['a','b','c','d','e','f','g','h','i','j']; // 小寫字母列表
        const upperCaseItems = ['A','B','C','D','E','F','G','H','I','J']; // 大寫字母列表
        
        return (
            <>
                {/* 嵌套列表元件 - 傳入動態資料或預設資料 */}
                <div>
                    <h2>Compon N list</h2>
                    {/* 
                       傳遞兩個資料源:
                       1. items: 優先使用傳入的data，如果沒有則使用小寫字母列表
                       2. items1: 始終使用大寫字母列表
                    */}
                    <NestedListComponent items={data || lowerCaseItems} items1={upperCaseItems}/>
                </div>
                <hr/>
            </>
        );
    case 'ul':
        // 無序列表元件 - 傳入動態資料
        return (
            <>
                {/* Compons_ul寫法 - 使用HTML原生ul標籤結構 */}
                <div>
                    <h2>Compon ul</h2>
                    <ULComponent items={data}/>
                </div>
                <hr />
            </>
      );
    default:
      // 處理未知類型
      return <div>還沒開發或未支援的元件類型: {type}</div>;
  }
};

// 導出元件供其他檔案使用
export default ComponSwitcher;