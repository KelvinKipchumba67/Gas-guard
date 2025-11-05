// src/components/Dashboard.jsx
import React from 'react';
import GasGauge from './GasGauge';

export default function Dashboard({ appData, calculatedData, onConfirmRefill }) {
  // Use a fallback for the rare case calculatedData is not ready
  const percentage = calculatedData?.percentageLeft ?? 100;
  const days = calculatedData?.daysRemaining ?? '...';

  return (
    <div className="bg-gray-800 text-white p-4 sm:p-6 md:p-8 rounded-xl shadow-2xl w-full max-w-md mx-auto flex flex-col items-center">
      <h1 className="text-2xl sm:text-3xl font-bold text-sky-400 mb-2 sm:mb-4">Your Gas Level</h1>
      <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 text-center">Based on a {appData.cylinderSize}kg cylinder for a household of {appData.householdSize}.</p>
      
      <GasGauge percentage={percentage} />

      <p className="text-2xl font-light mt-8">
        You have approximately <span className="font-bold text-sky-400">{days} days</span> left.
      </p>

      <div className="w-full mt-8 space-y-4">
        <button
          className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-4 rounded-lg text-lg transition-transform transform hover:scale-105"
        >
          Reorder Gas
        </button>
        <button
          onClick={onConfirmRefill}
          className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          I just got a new cylinder
        </button>
      </div>
    </div>
  );
}