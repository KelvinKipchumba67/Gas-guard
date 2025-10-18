// src/components/Onboarding.jsx
import React, { useState } from 'react';

export default function Onboarding({ onSave }) {
  // State to hold user's selections
  const [cylinderSize, setCylinderSize] = useState('13');
  const [householdSize, setHouseholdSize] = useState('3-4');
  const [refillDate, setRefillDate] = useState(new Date().toISOString().split('T')[0]); // Defaults to today

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!refillDate) {
      alert("Please select the date of your last refill.");
      return;
    }
    // Pass the collected data up to the App component
    onSave({
      cylinderSize: parseInt(cylinderSize),
      householdSize,
      lastRefillDate: refillDate,
    });
  };

  return (
    <div className="bg-gray-800 text-white p-6 md:p-8 rounded-xl shadow-2xl w-full max-w-md lg:max-w-lg mx-auto border border-gray-700">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-sky-400">Welcome to GasGuard</h1>
      <p className="text-center text-gray-400 mb-6 sm:mb-8">Let's set up your cylinder profile.</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Cylinder Size Selection */}
        <div>
          <label htmlFor="cylinder-size" className="block text-sm font-medium text-gray-300 mb-2">
            1. What is your cylinder size?
          </label>
          <select
            id="cylinder-size"
            value={cylinderSize}
            onChange={(e) => setCylinderSize(e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 focus:ring-2 focus:ring-sky-500 focus:outline-none"
          >
            <option value="6">6 kg</option>
            <option value="13">13 kg</option>
            <option value="22">22 kg</option>
          </select>
        </div>

        {/* Household Size Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            2. How many people are in your household?
          </label>
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            {['1-2', '3-4', '5+'].map(size => (
              <button
                key={size}
                type="button"
                onClick={() => setHouseholdSize(size)}
                className={`p-3 rounded-lg text-center font-semibold transition-all ${householdSize === size ? 'bg-sky-500 text-white' : 'bg-gray-700 hover:bg-gray-600'}`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Last Refill Date Selection */}
        <div>
          <label htmlFor="refill-date" className="block text-sm font-medium text-gray-300 mb-2">
            3. When was your last refill?
          </label>
          <input
            type="date"
            id="refill-date"
            value={refillDate}
            onChange={(e) => setRefillDate(e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 focus:ring-2 focus:ring-sky-500 focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-sky-600 hover:bg-sky-500 text-white font-bold py-3 px-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-sky-900/50"
        >
          Save & Start Tracking
        </button>
      </form>
    </div>
  );
}

