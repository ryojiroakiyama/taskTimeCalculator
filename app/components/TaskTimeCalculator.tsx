"use client";

import React, { useState } from 'react';
import TimeButton from './TimeButton';
import CheckboxInput from './CheckboxInput';
import { findNearestFibonacci } from '../utils/fibonacci';

const TaskTimeCalculator: React.FC = () => {
  const [estimatedTime, setEstimatedTime] = useState<number>(0);
  const [designTime, setDesignTime] = useState<number>(0);
  const [testTime, setTestTime] = useState<number>(0);

  const designDefaultTime = 1;
  const testDefaultTime = 2;

  const totalTime = estimatedTime + designTime + testTime;
  console.log(estimatedTime);
  const nearestFibonacci = findNearestFibonacci(totalTime);

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <div>
        <label>予想時間: </label>
        <div style={{display: "flex", flexDirection: "row"}}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((value) => (
            <TimeButton key={value} label={value.toString()} value={value} estimatedTime={estimatedTime} setTime={setEstimatedTime} />
          ))}
        </div>
      </div>
      <CheckboxInput label="デザイン" value={designDefaultTime} setTime={setDesignTime} />
      <CheckboxInput label="テスト" value={testDefaultTime} setTime={setTestTime} />
      <p>合計時間: {totalTime}</p>
      <p>最終結果: {nearestFibonacci}</p>
    </div>
  );
};

export default TaskTimeCalculator;
