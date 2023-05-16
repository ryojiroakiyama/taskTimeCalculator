import React from 'react';

interface TimeInputProps {
  label: string;
  time: number;
  setTime: (time: number) => void;
}

const TimeInput: React.FC<TimeInputProps> = ({ label, time, setTime }) => {
  return (
    <label>
      {label}
      <input
        type="number"
        value={time}
        onChange={(e) => setTime(Number(e.target.value))}
      />
    </label>
  );
};

export default TimeInput;
