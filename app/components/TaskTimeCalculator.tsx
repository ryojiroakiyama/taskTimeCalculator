"use client";

import React, { useState } from 'react';
import TimeButton from './TimeButton';
import CheckboxInput from './CheckboxInput';
import { findNearestFibonacci } from '../utils/fibonacci';

const designDefaultTime = 1;
const testDefaultTime = 2;

const additionalTimes = [
  { label: "Buffer (error & refactoring)", value: 1, default: true },
  { label: "Design", value: 2, default: false },
  { label: "Research", value: 2, default: false },
  { label: "Test", value: 1, default: false },
]
// TODO: 共通スタイルでラベルの幅を揃える

const roughTimesCount = 20;

const TaskTimeCalculator: React.FC = () => {
  const [roughEstimateTime, setRoughEstimateTime] = useState<number>(0);
  const [designTime, setDesignTime] = useState<number>(0);
  const [testTime, setTestTime] = useState<number>(0);

  const totalTime = roughEstimateTime + designTime + testTime;
  const nearestFibonacci = findNearestFibonacci(totalTime);

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <div>
        <label>予想時間: </label>
        <div style={{display: "flex", flexDirection: "row"}}>
          {Array.from({ length: roughTimesCount }, (_, i) => i + 1).map((value) => (
            <TimeButton
              key={value}
              label={value.toString()}
              value={value}
              setTime={setRoughEstimateTime} />
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
