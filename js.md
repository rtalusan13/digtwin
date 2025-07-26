<div id="text"></div>
 
<script>
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const App = () => {
  const [peaches, setPeaches] = useState(0);
  const [peachRate, setPeachRate] = useState(0);
  const [upgrades, setUpgrades] = useState([
    { id: 1, name: 'Digging for Twin', cost: 15, rate: 1, owned: 0, description: 'Search for that perfect peach match' },
    { id: 2, name: 'Peach Picker', cost: 100, rate: 5, owned: 0, description: 'Hire someone to pick peaches for you' },
    { id: 3, name: 'Orchard Expansion', cost: 500, rate: 20, owned: 0, description: 'Expand your peach growing operation' },
    { id: 4, name: 'Peach Processing Plant', cost: 2000, rate: 80, owned: 0, description: 'Automate peach production' },
    { id: 5, name: 'Peach Empire', cost: 10000, rate: 400, owned: 0, description: 'Dominate the global peach market' }
  ]);

  const [clickPower, setClickPower] = useState(1);
  const [notifications, setNotifications] = useState([]);

  // Auto-generate peaches based on rate
  useEffect(() => {
    if (peachRate > 0) {
      const interval = setInterval(() => {
        setPeaches(prev => prev + peachRate);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [peachRate]);

  const handlePeachClick = () => {
    setPeaches(prev => prev + clickPower);
    
    // Add floating +1 animation
    const newNotification = {
      id: Date.now(),
      text: `+${clickPower}`,
      x: Math.random() * 100 + 25,
      y: Math.random() * 100 + 25
    };
    
    setNotifications(prev => [...prev, newNotification]);
    
    // Remove notification after animation
    setTimeout(() => {
      setNotifications(prev => prev.filter(notif => notif.id !== newNotification.id));
    }, 1000);
  };

  const buyUpgrade = (upgradeId) => {
    const upgrade = upgrades.find(u => u.id === upgradeId);
    if (peaches >= upgrade.cost) {
      setPeaches(prev => prev - upgrade.cost);
      
      // Update upgrades
      setUpgrades(prev => prev.map(u => 
        u.id === upgradeId 
          ? { ...u, owned: u.owned + 1, cost: Math.floor(u.cost * 1.5) }
          : u
      ));
      
      // Update rates and click power
      setPeachRate(prev => prev + upgrade.rate);
      if (upgradeId === 1) {
        setClickPower(prev => prev + 1);
      }
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,218,185,0.1),transparent_50%)]"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 p-6 text-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 via-pink-400 to-red-400 bg-clip-text text-transparent mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Peach Empire
        </motion.h1>
        <motion.p 
          className="text-gray-300 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Dig for the perfect peach!
        </motion.p>
      </div>

      {/* Main Game Area */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-[60vh] px-6 gap-8">
        {/* Peach Clicker */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.button
            onClick={handlePeachClick}
            className="relative w-64 h-64 rounded-full bg-gradient-to-br from-orange-400 via-pink-400 to-red-400 shadow-2xl hover:shadow-pink-500/25 transition-all duration-200 focus:outline-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'radial-gradient(circle at 30% 30%, #ffb7c5, #ff6b9d 70%, #ff4785)'
            }}
          >
            <span className="text-8xl">🍑</span>
            
            {/* Floating Notifications */}
            {notifications.map(notification => (
              <motion.div
                key={notification.id}
                className="absolute text-2xl font-bold text-yellow-300 pointer-events-none"
                style={{ left: `${notification.x}%`, top: `${notification.y}%` }}
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 0, y: -50 }}
                transition={{ duration: 1 }}
              >
                {notification.text}
              </motion.div>
            ))}
          </motion.button>
        </motion.div>

        {/* Stats Panel */}
        <motion.div 
          className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-xl"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <div className="text-center mb-6">
            <div className="text-3xl font-bold text-orange-400 mb-2">
              {formatNumber(peaches)} 🍑
            </div>
            <div className="text-gray-300">
              {peachRate > 0 && (
                <span>+{peachRate} per second</span>
              )}
            </div>
            <div className="text-sm text-gray-400 mt-1">
              Click Power: {clickPower}
            </div>
          </div>

          {/* Upgrades */}
          <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
            {upgrades.map((upgrade) => (
              <motion.button
                key={upgrade.id}
                onClick={() => buyUpgrade(upgrade.id)}
                disabled={peaches < upgrade.cost}
                className={`w-full p-4 rounded-xl border transition-all duration-200 text-left ${
                  peaches >= upgrade.cost
                    ? 'bg-gray-700/50 border-orange-500/30 hover:border-orange-500 hover:bg-gray-700 cursor-pointer'
                    : 'bg-gray-900/30 border-gray-600/30 cursor-not-allowed opacity-60'
                }`}
                whileHover={peaches >= upgrade.cost ? { scale: 1.02 } : {}}
                whileTap={peaches >= upgrade.cost ? { scale: 0.98 } : {}}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-semibold text-orange-300">{upgrade.name}</div>
                    <div className="text-xs text-gray-400">{upgrade.description}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-orange-400 font-bold">{formatNumber(upgrade.cost)} 🍑</div>
                    <div className="text-xs text-green-400">+{upgrade.rate}/sec</div>
                  </div>
                </div>
                <div className="text-xs text-gray-300">
                  Owned: {upgrade.owned}
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="relative z-10 text-center p-6 text-gray-400 text-sm">
        <p>Keep digging for that perfect peach! 🍑</p>
      </div>
    </div>
  );
};

export default App;
</script>
