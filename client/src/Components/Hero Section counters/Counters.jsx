// src/components/ProductCounter.js
import React, { useState, useEffect } from 'react';
import { FiPlus } from "react-icons/fi";

const ProductCounter = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 10); // update every 10ms

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 10);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-center flex items-center text-xl font-bold md:text-4xl sm:text-3xl lg:text-left">
      {count.toLocaleString()} <FiPlus size={window.innerWidth > 678 ? "1.5rem" : "0.8rem"} className='mt-1'  style={{strokeWidth: "4px"}}/>
    </div>
  );
};

export default ProductCounter;
