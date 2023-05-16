import React from 'react';

interface CheckboxInputProps {
  label: string;
  value: number;
  setTime: (time: number) => void;
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({ label, value, setTime }) => {
  return (
    <label>
      {label}{value}: 
      <input
        type="checkbox"
        onChange={(e) => {
          if (e.target.checked) {
            setTime(value)
          } else {
            setTime(0)
          }
        }}
      />
    </label>
  );
};

export default CheckboxInput;
