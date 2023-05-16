import React from 'react';

interface TimeButtonProps {
  label: string;
  value: number;
  estimatedTime: number;
  setTime: (time: number) => void;
}

const TimeButton: React.FC<TimeButtonProps> = ({ label, value, estimatedTime, setTime }) => {
  const isSelected = value === estimatedTime;
  const backgroundColor = isSelected ? "orange" : "white";

  return (
    <div onClick={() => setTime(value)} style={{margin: "10px", backgroundColor, height: "30px", width: "30px", color: "black", display: "flex", justifyContent: "center", alignItems: "center"}}>
      {label}
    </div>
  );
};

export default TimeButton;
