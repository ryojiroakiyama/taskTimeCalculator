import React, { useState } from 'react';
import styles from './button.module.css'

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
    <div onClick={handleClick} className={styles.size} style={{backgroundColor, color: "black", display: "flex", justifyContent: "center", alignItems: "center"}}>
      {label}
    </div>
  );
};

export default TimeButton;
