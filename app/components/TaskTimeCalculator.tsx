"use client";

import React, { useState } from 'react';
import TimeButton from './TimeButton';
import CheckboxInput from './CheckboxInput';
import { findNearestFibonacci } from '../utils/fibonacci';
import styles from './button.module.css'

// initial values
const roughTimesCount = 15;
const initialAdditionalElements = [
  { label: "Buffer (error & refactoring)", value: 1, active: true },
  { label: "Design", value: 2, active: false },
  { label: "Research", value: 2, active: false },
  { label: "Test", value: 1, active: false },
]

// TODO: リンター使う

const TaskTimeCalculator: React.FC = () => {
  const [roughEstimateTime, setRoughEstimateTime] = useState<number>(0);
  const [additionalElements, setAdditionalElements] = useState(initialAdditionalElements);

  const handleChange = (index: number) => {  
    setAdditionalElements(prevState => prevState.map((item, i) =>
      i === index ? {...item, active: !item.active} : item
    ));
  };

  const totalAdditionalTime = additionalElements.reduce((total, item) => total + (item.active ? item.value : 0), 0);
  const totalTime = roughEstimateTime + totalAdditionalTime;
  const nearestFibonacci = findNearestFibonacci(totalTime);

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <div style={{display: "flex", flexDirection: "row"}}>
        <label className={styles.label}>予想時間: </label>
        <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
          {Array.from({ length: roughTimesCount }, (_, i) => i + 1).map((value) => (
            <TimeButton
              key={value}
              label={value.toString()}
              value={value}
              setTime={setRoughEstimateTime} />
          ))}
        </div>
      </div>
      {additionalElements.map((item, index) => (
        <div key={index}>
          <label className={styles.label}>{item.label} {item.value}: </label>
          <input
            type="checkbox"
            className={styles.size}
            checked={item.active}
            onChange={() => handleChange(index)}
          />
        </div>
      ))}
      <p>合計時間: {totalTime}</p>
      <p>最終結果: {nearestFibonacci}</p>
    </div>
  );
};

export default TaskTimeCalculator;
