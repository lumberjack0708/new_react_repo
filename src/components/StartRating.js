import React, {useState} from "react";
import { FaStarOfDavid } from "react-icons/fa"; // 引入星星圖示，可以找自己喜歡的

const createArray = (length) => [...Array(length)]; // 產生一個長度為 length 的陣列用於生成星星元素

const Star = ({selected = false, onSelect}) => (
    <FaStarOfDavid color={selected ? "pink" : "grey"} onClick={onSelect} /> // 顏色根據 selected 狀態決定
);

export default function StartRating({totalStars = 5}) {
    // 使用useState來追蹤已選中的星星，預設為1
    const [selectedStars, setSelectedStars] = useState(1);
    return (
        <div>
            {createArray(totalStars).map((n, i) => (
                <Star key={i} selected={selectedStars > i} onSelect={() => setSelectedStars(i + 1)} />
            ))}
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </div>
    );
}