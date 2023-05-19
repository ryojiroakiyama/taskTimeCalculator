import React, { useState } from 'react'
import styles from './button.module.css'

interface TimeButtonProps {
  label: string
  isActive: boolean
  value: number
  setTime: (time: number) => void
}

const TimeButton: React.FC<TimeButtonProps> = ({ label, isActive, value, setTime }) => {
  const backgroundColor = isActive ? 'orange' : 'white'

  return (
    <div
      onClick={() => {
        setTime(value)
      }}
      className={styles.size}
      style={{
        backgroundColor,
        color: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {label}
    </div>
  )
}

export default TimeButton
