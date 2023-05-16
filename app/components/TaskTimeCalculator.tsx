"use client";

import React, { useState } from 'react';
import TimeInput from './TimeInput';
import CheckboxInput from './CheckboxInput';
import { findNearestFibonacci } from '../utils/fibonacci';

const TaskTimeCalculator: React.FC = () => {
  const [estimatedTime, setEstimatedTime] = useState<number>(0);
  const [designChecked, setDesignChecked] = useState<boolean>(false);
  const [testChecked, setTestChecked] = useState<boolean>(false);

  const designTime = designChecked ? 1 : 0;
  const testTime = testChecked ? 2 : 0;

  const totalTime = estimatedTime + designTime + testTime;
  const nearestFibonacci = findNearestFibonacci(totalTime);

  return (
    <div>
      <TimeInput label="予想時間: " time={estimatedTime} setTime={setEstimatedTime} />
      <CheckboxInput label="デザイン " checked={designChecked} setChecked={setDesignChecked} />
      <CheckboxInput label="テスト " checked={testChecked} setChecked={setTestChecked} />
      <p>合計時間: {totalTime}</p>
      <p>最終結果: {nearestFibonacci}</p>
    </div>
  );
};

export default TaskTimeCalculator;
