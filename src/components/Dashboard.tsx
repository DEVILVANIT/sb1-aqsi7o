import React from 'react';
import { Calendar, Moon, Droplets, Sun } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Welcome Back, Beautiful</h1>
        <p className="mt-2 text-gray-600">Track your wellness journey with Bloom</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Period Preview */}
        <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Period Tracker</h2>
            <Calendar className="h-6 w-6 text-rose-500" />
          </div>
          <p className="text-gray-600">Next period in 12 days</p>
          <div className="mt-4 h-2 bg-rose-100 rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-rose-500 rounded-full"></div>
          </div>
        </div>

        {/* Mood Preview */}
        <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Today's Mood</h2>
            <Moon className="h-6 w-6 text-purple-500" />
          </div>
          <div className="flex space-x-4">
            <button className="p-2 rounded-full bg-purple-100 text-purple-500 hover:bg-purple-200">
              😊
            </button>
            <button className="p-2 rounded-full bg-purple-100 text-purple-500 hover:bg-purple-200">
              😌
            </button>
            <button className="p-2 rounded-full bg-purple-100 text-purple-500 hover:bg-purple-200">
              😔
            </button>
          </div>
        </div>

        {/* Wellness Preview */}
        <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Daily Tips</h2>
            <Sun className="h-6 w-6 text-amber-500" />
          </div>
          <p className="text-gray-600">Stay hydrated! Aim for 8 glasses today.</p>
          <div className="mt-4 flex items-center">
            <Droplets className="h-5 w-5 text-blue-500 mr-2" />
            <div className="flex-1 h-2 bg-blue-100 rounded-full overflow-hidden">
              <div className="h-full w-1/2 bg-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Wellness Overview</h2>
        <div className="aspect-w-16 aspect-h-9">
          <img
            src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80"
            alt="Wellness"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}