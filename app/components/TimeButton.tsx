import React, { useState } from 'react';

interface TimeButtonProps {
  label: string;
  value: number;
  setTime: (time: number) => void;
}

const TimeButton: React.FC<TimeButtonProps> = ({ label, value, setTime }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    setTime(value);
  };

  const backgroundColor = isActive ? "orange" : "white";

  return (
    <div onClick={handleClick} style={{margin: "10px", backgroundColor, height: "30px", width: "30px", color: "black", display: "flex", justifyContent: "center", alignItems: "center"}}>
      {label}
    </div>
  );
};

export default TimeButton;
