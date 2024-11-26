import React, { useState } from 'react';
import { Calendar, Moon, Heart, BookHeart, Menu, X } from 'lucide-react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import PeriodTracker from './components/PeriodTracker';
import MoodJournal from './components/MoodJournal';
import WellnessTips from './components/WellnessTips';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'period':
        return <PeriodTracker />;
      case 'mood':
        return <MoodJournal />;
      case 'wellness':
        return <WellnessTips />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-purple-50">
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <main className="pt-20 px-4 md:px-8 max-w-7xl mx-auto">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;