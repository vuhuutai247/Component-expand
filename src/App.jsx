import React from 'react';
import './App.css';
import { useState } from 'react';


function App() {

    const [showMore, setShowMore] = useState(false);

    function handleMoreClick() {
      setShowMore(!showMore);
    }

  return (
    <>
      <h1>Conditional Rendering</h1>
      <button onClick={handleMoreClick}>
        {showMore ? 'Dong' : 'Mo'} gioi thieu
      </button>
      {showMore && <p>Đạo hàm là một hàm số Gọi f là hàm số luôn có đạo hàm tại mọi điểm trên tập xác định. Chúng ta có thể tìm được một hàm số mà với x bất kì, giá trị của hàm bằng với giá trị của đạo hàm của f tại x. Hàm số đó được gọi là đạo hàm của f và kí hiệu là f.</p>}
    </>
  );
}

export default App;
