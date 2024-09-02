// src/components/NumberSpinner.js
import React, { useEffect, useState } from 'react';
import './numberSpinner.css'; // Import custom CSS

const NumberSpinner = ({ value }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000; // Duration of animation in milliseconds
    const stepTime = Math.abs(Math.floor(duration / end));

    const updateValue = () => {
      if (start >= end) return;
      start += 1;
      setCurrentValue(start);
      setTimeout(updateValue, stepTime);
    };

    updateValue();
  }, [value]);

  return (
    <div className="number-spinner">
      {currentValue}
    </div>
  );
};

export default NumberSpinner;
