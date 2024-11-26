import React, { useState } from 'react';
import { Calendar, Clock, AlertCircle } from 'lucide-react';

export default function PeriodTracker() {
  const [cycleLength, setCycleLength] = useState(28);
  const [lastPeriod, setLastPeriod] = useState('2024-03-01');

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Period Tracker</h1>
        <p className="mt-2 text-gray-600">Keep track of your menstrual cycle</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Cycle Information</h2>
            <Clock className="h-6 w-6 text-rose-500" />
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Period Start Date
              </label>
              <input
                type="date"
                value={lastPeriod}
                onChange={(e) => setLastPeriod(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cycle Length (days)
              </label>
              <input
                type="number"
                value={cycleLength}
                onChange={(e) => setCycleLength(Number(e.target.value))}
                min="21"
                max="35"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Predictions</h2>
            <Calendar className="h-6 w-6 text-rose-500" />
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-rose-50 rounded-lg">
              <h3 className="font-medium text-rose-800">Next Period</h3>
              <p className="text-rose-600">March 29, 2024</p>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-medium text-purple-800">Fertile Window</h3>
              <p className="text-purple-600">March 12 - March 17</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center mb-4">
          <AlertCircle className="h-5 w-5 text-rose-500 mr-2" />
          <h2 className="text-lg font-semibold text-gray-800">Symptoms Tracker</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Cramps', 'Headache', 'Fatigue', 'Bloating'].map((symptom) => (
            <button
              key={symptom}
              className="px-4 py-2 rounded-full border border-gray-200 hover:border-rose-500 hover:bg-rose-50 transition-colors"
            >
              {symptom}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}