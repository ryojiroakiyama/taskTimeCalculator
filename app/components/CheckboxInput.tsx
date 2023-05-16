import React from 'react';

interface CheckboxInputProps {
  label: string;
  checked: boolean;
  setChecked: (checked: boolean) => void;
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({ label, checked, setChecked }) => {
  return (
    <label>
      {label}
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    </label>
  );
};

export default CheckboxInput;
