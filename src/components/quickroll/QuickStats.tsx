import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export const QuickStats = () => {
  const stats = [
    { icon: '🏫', label: 'Total Users', value: '53' },
    { icon: '📅', label: 'Today', value: '17 Sep' },
    { icon: '⏰', label: 'Time', value: '10:15 AM' },
    { icon: '✅', label: 'Present', value: '38' },
    { icon: '❌', label: 'Absent', value: '7' },
    { icon: '🔄', label: 'Active', value: '2' },
    { icon: '📊', label: 'Rate', value: '84.4%' },
    { icon: '🛡', label: 'Security', value: 'ON' },
    { icon: '💾', label: 'DB', value: 'Healthy' },
  ];

  return (
    <Card className="bg-gradient-to-r from-quickroll-primary to-quickroll-secondary text-white">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
          📈 TODAY'S OVERVIEW
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-200 hover:scale-105"
            >
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};