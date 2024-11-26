import React, { useState } from 'react';
import { Moon, Sun, Cloud, CloudRain } from 'lucide-react';

export default function MoodJournal() {
  const [selectedMood, setSelectedMood] = useState('');
  const [journalEntry, setJournalEntry] = useState('');

  const moods = [
    { emoji: '😊', label: 'Happy', icon: Sun },
    { emoji: '😌', label: 'Calm', icon: Moon },
    { emoji: '😔', label: 'Sad', icon: Cloud },
    { emoji: '😤', label: 'Angry', icon: CloudRain },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Mood Journal</h1>
        <p className="mt-2 text-gray-600">Track your emotional wellbeing</p>
      </header>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">How are you feeling today?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {moods.map(({ emoji, label, icon: Icon }) => (
            <button
              key={label}
              onClick={() => setSelectedMood(label)}
              className={`p-4 rounded-xl flex flex-col items-center space-y-2 transition-colors ${
                selectedMood === label
                  ? 'bg-purple-100 text-purple-700 border-2 border-purple-500'
                  : 'bg-gray-50 text-gray-700 hover:bg-purple-50'
              }`}
            >
              <span className="text-2xl">{emoji}</span>
              <Icon className="h-6 w-6" />
              <span className="font-medium">{label}</span>
            </button>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Journal Entry</h2>
          <textarea
            value={journalEntry}
            onChange={(e) => setJournalEntry(e.target.value)}
            placeholder="Write about your day..."
            className="w-full h-40 p-4 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
          />
          <button className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            Save Entry
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Mood History</h2>
        <div className="space-y-4">
          {[
            { date: 'March 10', mood: 'Happy', note: 'Had a great day at work!' },
            { date: 'March 9', mood: 'Calm', note: 'Peaceful meditation session' },
            { date: 'March 8', mood: 'Sad', note: 'Missing family' },
          ].map((entry) => (
            <div
              key={entry.date}
              className="p-4 bg-gray-50 rounded-lg flex items-center justify-between"
            >
              <div>
                <p className="font-medium text-gray-800">{entry.date}</p>
                <p className="text-gray-600">{entry.note}</p>
              </div>
              <span className="text-2xl">
                {moods.find((m) => m.label === entry.mood)?.emoji}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}