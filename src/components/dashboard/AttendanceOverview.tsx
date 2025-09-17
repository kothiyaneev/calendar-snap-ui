import React from 'react';
import { TrendingUp, Calendar, Clock, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const stats = [
  {
    title: 'This Semester Attendance',
    value: '92%',
    change: 'Excellent Attendance!',
    trend: 'up',
    icon: TrendingUp,
    color: 'green'
  },
  {
    title: 'Classes This Month',
    value: '24/26',
    change: 'Good',
    trend: 'up',
    icon: Calendar,
    color: 'blue'
  },
  {
    title: 'Average Attendance',
    value: '84.7%',
    change: 'This Month',
    trend: 'up',
    icon: Target,
    color: 'purple'
  },
  {
    title: 'Total Classes',
    value: '87%',
    change: 'This Month',
    trend: 'up',
    icon: Clock,
    color: 'orange'
  }
];

export const AttendanceOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="bg-dashboard-card border-dashboard-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm text-dashboard-text-secondary">{stat.title}</p>
                <p className="text-2xl font-bold text-dashboard-text-primary mt-1">{stat.value}</p>
                <p className={`text-xs mt-2 ${
                  stat.color === 'green' ? 'text-dashboard-accent-green' :
                  stat.color === 'blue' ? 'text-dashboard-accent-blue' :
                  stat.color === 'purple' ? 'text-dashboard-accent-purple' :
                  'text-dashboard-accent-orange'
                }`}>
                  {stat.change}
                </p>
              </div>
              <div className={`
                w-12 h-12 rounded-lg flex items-center justify-center
                ${stat.color === 'green' ? 'bg-dashboard-accent-green/20' :
                  stat.color === 'blue' ? 'bg-dashboard-accent-blue/20' :
                  stat.color === 'purple' ? 'bg-dashboard-accent-purple/20' :
                  'bg-dashboard-accent-orange/20'
                }
              `}>
                <stat.icon className={`w-6 h-6 ${
                  stat.color === 'green' ? 'text-dashboard-accent-green' :
                  stat.color === 'blue' ? 'text-dashboard-accent-blue' :
                  stat.color === 'purple' ? 'text-dashboard-accent-purple' :
                  'text-dashboard-accent-orange'
                }`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};