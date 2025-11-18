"use client";

// CountdownTimer.tsx
import React, { useEffect, useState } from 'react'

interface CountdownTimerProps {
  endTime: Date
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ endTime }) => {
  const [timeLeft, setTimeLeft] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = Math.max(0, new Date(endTime).getTime() - new Date().getTime())
      setTimeLeft(diff)
    }, 1000)

    return () => clearInterval(interval)
  }, [endTime])

  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000)
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  return <span>{formatTime(timeLeft)}</span>
}
