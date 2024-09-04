// BarChart.js
import React, { useState, useEffect } from 'react';
import '../../css/App.css'; // This is for any custom styling, if needed

const Mbti = ({ data }) => {
  return (
    <div className='mbti-section'>
        <div className='mbti-title' style={{fontSize: '30px'}}>
            성격유형 : ENTJ-A
        </div>
        <div className='mbti-graph'>
        {data.map((item, index) => (
            <AnimatedBar key={index} item={item} />
        ))}
        </div>
    </div>
  );
};

const AnimatedBar = ({ item }) => {
  const [leftPercent, setLeftPercent] = useState(0);
  const [rightPercent, setRightPercent] = useState(0);

  useEffect(() => {
    // Function to animate the percentage
    const animatePercentage = (startValue, endValue, duration, setFunction) => {
      let start = startValue;
      const stepTime = Math.abs(Math.floor(duration / endValue));
      const increment = endValue > 0 ? 1 : -1;

      const timer = setInterval(() => {
        start += increment;
        if (start <= endValue) {
          setFunction(start);
        } else {
          clearInterval(timer);
        }
      }, stepTime);

      return () => clearInterval(timer);
    };

    // Animate both left and right percentages
    animatePercentage(0, item.percentLeft, 1000, setLeftPercent);
    animatePercentage(0, item.percentRight, 1000, setRightPercent);
  }, [item.percentLeft, item.percentRight]);

  return (
    <div style={{ marginBottom: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
        <span>{item.labelLeft} {leftPercent}%</span>
        <span>{rightPercent}% {item.labelRight}</span>
      </div>
      <div style={{ height: '18px', backgroundColor: '#e0e0df', borderRadius: '10px', overflow: 'hidden' }}>
        <div
          style={{
            width: `${leftPercent}%`,  // Animate width as leftPercent increases
            backgroundColor: item.color,
            height: '100%',
            borderRadius: '5px',
            transition: 'width 0.001s ease-in-out', // Smooth transition
          }}
        />
      </div>
    </div>
  );
};

export default Mbti;
