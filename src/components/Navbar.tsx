import React from 'react';
import { Calendar, Moon, Heart, BookHeart, Menu, X } from 'lucide-react';

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Heart },
  { id: 'period', label: 'Period Tracker', icon: Calendar },
  { id: 'mood', label: 'Mood Journal', icon: Moon },
  { id: 'wellness', label: 'Wellness Tips', icon: BookHeart },
];

export default function Navbar({ activeTab, setActiveTab, isMobileMenuOpen, setIsMobileMenuOpen }) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-rose-500" />
            <span className="ml-2 text-xl font-semibold text-gray-800">Bloom</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                  activeTab === id
                    ? 'text-rose-600 bg-rose-50'
                    : 'text-gray-600 hover:text-rose-500 hover:bg-rose-50'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-rose-500 hover:bg-rose-50"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => {
                    setActiveTab(id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                    activeTab === id
                      ? 'text-rose-600 bg-rose-50'
                      : 'text-gray-600 hover:text-rose-500 hover:bg-rose-50'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}