import React, { useState, useEffect } from 'react';     // 需要從react引入`useState` 和 `useEffect`

function Clock(props) {
  // 設定初始值
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  // 設定更新時間(每秒)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <p>{currentTime}</p>
    </div>
  );
}

export default Clock;