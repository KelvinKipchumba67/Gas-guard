import React from 'react';

export default function GasGauge({ percentage }) {
  const radius = 85;
  const circumference = 2 * Math.PI * radius;
  // Ensure percentage is a number between 0 and 100
  const safePercentage = Math.max(0, Math.min(100, percentage));
  const offset = circumference - (safePercentage / 100) * circumference;

  let strokeColorClass = 'text-green-500'; // Good state
  if (safePercentage <= 40) {
    strokeColorClass = 'text-yellow-500'; // Warning state
  }
  if (safePercentage <= 15) {
    strokeColorClass = 'text-red-500'; // Critical state
  }

  return (
    <div className="relative w-52 h-52">
      <svg className="transform -rotate-90 w-full h-full" viewBox="0 0 208 208">
        {/* Background Circle */}
        <circle
          cx="104" cy="104" r={radius}
          stroke="currentColor"
          strokeWidth="30"
          fill="transparent"
          className="text-gray-700"
        />
        {/* Progress Circle */}
        <circle
          cx="104" cy="104" r={radius}
          stroke="currentColor"
          strokeWidth="30"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round" // Makes the end of the line rounded
          className={`transition-all duration-700 ease-in-out ${strokeColorClass}`}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-5xl font-bold text-white tracking-tighter">{Math.round(safePercentage)}%</span>
        <span className="text-sm font-medium text-gray-400">Remaining</span>
      </div>
    </div>
  );
}
