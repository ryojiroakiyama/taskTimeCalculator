"use client";

import React, { useState } from 'react';
import TimeButton from './TimeButton';
import CheckboxInput from './CheckboxInput';
import { findNearestFibonacci } from '../utils/fibonacci';

const TaskTimeCalculator: React.FC = () => {
  const [estimatedTime, setEstimatedTime] = useState<number>(0);
  const [designChecked, setDesignChecked] = useState<boolean>(false);
  const [testChecked, setTestChecked] = useState<boolean>(false);

  const designTime = designChecked ? 1 : 0;
  const testTime = testChecked ? 2 : 0;

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
      <CheckboxInput label="デザイン 1: " checked={designChecked} setChecked={setDesignChecked} />
      <CheckboxInput label="テスト 2: " checked={testChecked} setChecked={setTestChecked} />
      <p>合計時間: {totalTime}</p>
      <p>最終結果: {nearestFibonacci}</p>
    </div>
  );
};

export default TaskTimeCalculator;
