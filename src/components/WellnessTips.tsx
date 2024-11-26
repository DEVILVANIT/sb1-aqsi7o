import React from 'react';
import { Leaf, Heart, Brain, Utensils } from 'lucide-react';

export default function WellnessTips() {
  const categories = [
    {
      icon: Heart,
      title: 'Physical Health',
      tips: [
        'Take a 30-minute walk daily',
        'Practice good posture',
        'Get 7-8 hours of sleep',
      ],
    },
    {
      icon: Brain,
      title: 'Mental Wellness',
      tips: [
        'Practice daily meditation',
        'Take regular breaks',
        'Set healthy boundaries',
      ],
    },
    {
      icon: Utensils,
      title: 'Nutrition',
      tips: [
        'Eat more leafy greens',
        'Stay hydrated',
        'Limit processed foods',
      ],
    },
    {
      icon: Leaf,
      title: 'Self-Care',
      tips: [
        'Take relaxing baths',
        'Practice skincare routine',
        'Read a book you enjoy',
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Wellness Tips</h1>
        <p className="mt-2 text-gray-600">Daily inspiration for your wellbeing journey</p>
      </header>

      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Tip of the Day</h2>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80"
            alt="Wellness"
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent rounded-b-lg">
            <p className="text-white text-lg font-medium">
              "Take a moment to breathe deeply and center yourself"
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map(({ icon: Icon, title, tips }) => (
          <div key={title} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Icon className="h-6 w-6 text-rose-500" />
              <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
            </div>
            <ul className="space-y-3">
              {tips.map((tip) => (
                <li key={tip} className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-rose-500 rounded-full" />
                  <span className="text-gray-600">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-rose-100 to-purple-100 rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Weekly Challenge</h2>
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4">
          <p className="text-gray-800 font-medium">
            This week's focus: Mindful Movement
          </p>
          <p className="text-gray-600 mt-2">
            Try to incorporate 10 minutes of gentle stretching or yoga into your daily routine.
            Notice how your body feels before and after.
          </p>
        </div>
      </div>
    </div>
  );
}