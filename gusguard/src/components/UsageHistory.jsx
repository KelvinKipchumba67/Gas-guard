import React from 'react';

export default function UsageHistory({ history }) {
  if (!history || history.length === 0) {
    return (
      <div className="bg-gray-800 text-white p-6 md:p-8 rounded-2xl shadow-2xl w-full border border-gray-700 h-full flex flex-col justify-center items-center">
        <h2 className="text-xl font-bold text-sky-400 mb-4">Usage History</h2>
        <p className="text-gray-400">Your refill history will appear here once you confirm your first new cylinder.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 text-white p-6 md:p-8 rounded-2xl shadow-2xl w-full border border-gray-700 h-full">
      <h2 className="text-xl font-bold text-sky-400 mb-6">Usage History</h2>
      <div className="space-y-4 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
        <style jsx>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: #374151;
            border-radius: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #4B5563;
            border-radius: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #6B7280;
          }
        `}</style>
        {history.map((item, index) => (
          <div key={index} className="bg-gray-700 p-4 rounded-lg flex justify-between items-center">
            <div>
              <p className="font-semibold text-gray-200">Refill Cycle</p>
              <p className="text-sm text-gray-400">
                {new Date(item.startDate).toLocaleDateString()} - {new Date(item.endDate).toLocaleDateString()}
              </p>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-sky-300">{item.duration} days</p>
              <p className="text-sm text-gray-400">Duration</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
