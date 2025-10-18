import React, { useState, useEffect } from 'react';
import Onboarding from './components/Onboarding';
import Dashboard from './components/Dashboard';
import UsageHistory from './components/UsageHistory';
import './App.css';
// --- Baseline Assumptions ---
const baselineEstimates = {
  '1-2': 60,
  '3-4': 45,
  '5+': 30,
};

function App() {
  const [appData, setAppData] = useState(null);
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // --- Data Persistence ---
  useEffect(() => {
    try {
      const savedData = localStorage.getItem('gasGuardData');
      const savedHistory = localStorage.getItem('gasGuardHistory');
      if (savedData) {
        setAppData(JSON.parse(savedData));
      }
      if (savedHistory) {
        setHistory(JSON.parse(savedHistory));
      }
    } catch (error) {
      console.error("Failed to load data from localStorage", error);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      try {
        localStorage.setItem('gasGuardData', JSON.stringify(appData));
        localStorage.setItem('gasGuardHistory', JSON.stringify(history));
      } catch (error) {
        console.error("Failed to save data to localStorage", error);
      }
    }
  }, [appData, history, isLoading]);

  const handleSaveOnboarding = (data) => {
    const initialDuration = baselineEstimates[data.householdSize] || 45;
    setAppData({ ...data, estimatedDuration: initialDuration });
  };

  const handleConfirmRefill = () => {
    const today = new Date();
    const lastRefill = new Date(appData.lastRefillDate);
    const actualDuration = Math.max(1, Math.ceil(Math.abs(today - lastRefill) / (1000 * 60 * 60 * 24)));
    const newLearnedDuration = Math.round((appData.estimatedDuration + actualDuration) / 2);

    // Add the completed cycle to history
    const newHistoryEntry = {
      startDate: appData.lastRefillDate,
      endDate: today.toISOString().split('T')[0],
      duration: actualDuration,
    };
    setHistory(prevHistory => [newHistoryEntry, ...prevHistory]);

    // Update app data for the new cycle
    setAppData(prevData => ({
      ...prevData,
      estimatedDuration: newLearnedDuration,
      lastRefillDate: today.toISOString().split('T')[0],
    }));
  };

  const calculatedData = appData ? (() => {
    const today = new Date();
    const refillDate = new Date(appData.lastRefillDate);
    const duration = appData.estimatedDuration;
    const daysPassed = Math.ceil(Math.abs(today - refillDate) / (1000 * 60 * 60 * 24));
    const daysRemaining = Math.max(0, duration - daysPassed);
    const percentageLeft = Math.max(0, (daysRemaining / duration) * 100);
    return { daysRemaining, percentageLeft };
  })() : null;

  if (isLoading) {
    return <div className="min-h-screen bg-gray-900" />;
  }

  return (
    <main className="min-h-screen bg-gray-900 w-full flex items-center justify-center p-4">
      {!appData ? (
        <Onboarding onSave={handleSaveOnboarding} />
      ) : (
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
            {/* The Dashboard will always be visible */}
            <Dashboard 
              appData={appData}
              calculatedData={calculatedData}
              onConfirmRefill={handleConfirmRefill}
            />
            {/* The History panel appears on large screens */}
            <div className="hidden lg:block">
              <UsageHistory history={history} />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;

