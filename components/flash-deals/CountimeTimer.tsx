"use client"

import React, { useEffect, useState } from 'react'
import { ClockIcon } from 'lucide-react'
interface CountdownTimerProps {
  endTime: Date
  className?: string
}
export function CountdownTimer({
  endTime,
  className = '',
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  function calculateTimeLeft() {
    const difference = endTime.getTime() - new Date().getTime()
    if (difference <= 0) {
      return {
        hours: 0,
        minutes: 0,
        seconds: 0,
      }
    }
    return {
      hours: Math.floor(difference / (1000 * 60 * 60)),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  }, [endTime])
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 bg-hot-pink text-white rounded-lg font-semibold text-sm animate-pulse ${className}`}
    >
      <ClockIcon className="w-4 h-4" />
      <span>
        {String(timeLeft.hours).padStart(2, '0')}:
        {String(timeLeft.minutes).padStart(2, '0')}:
        {String(timeLeft.seconds).padStart(2, '0')}
      </span>
    </div>
  )
}
