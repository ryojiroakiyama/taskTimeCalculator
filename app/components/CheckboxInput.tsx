import React from 'react';

interface CheckboxInputProps {
  onClick: () => void;
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
