import React from 'react';
import { TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const monthlyData = [
  { month: 'Jan', percentage: 95 },
  { month: 'Feb', percentage: 78 },
  { month: 'Mar', percentage: 92 },
  { month: 'Apr', percentage: 88 },
  { month: 'May', percentage: 75 },
  { month: 'Jun', percentage: 90 },
  { month: 'Jul', percentage: 95 },
  { month: 'Aug', percentage: 85 },
  { month: 'Sep', percentage: 92 },
];

export const MonthlyTrend = () => {
  const maxPercentage = Math.max(...monthlyData.map(d => d.percentage));
  
  return (
    <Card className="bg-dashboard-card border-dashboard-border">
      <CardHeader className="pb-4">
        <CardTitle className="text-dashboard-text-primary flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-dashboard-accent-green" />
          Monthly Attendance Trend
        </CardTitle>
        <div className="flex items-center space-x-6 mt-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-dashboard-accent-green">92%</p>
            <p className="text-xs text-dashboard-text-secondary">Best Month</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-dashboard-accent-blue">84.7%</p>
            <p className="text-xs text-dashboard-text-secondary">Average</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-dashboard-accent-orange">87%</p>
            <p className="text-xs text-dashboard-text-secondary">This Month</p>
          </div>
        </div>
        <div className="text-sm text-dashboard-accent-green flex items-center gap-1 mt-2">
          <TrendingUp className="w-4 h-4" />
          +5.0% vs last month
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="flex items-end justify-between space-x-2 h-32">
          {monthlyData.map((data, index) => (
            <div key={data.month} className="flex flex-col items-center flex-1">
              <div className="w-full flex items-end justify-center mb-2">
                <div
                  className={`w-full rounded-t-sm transition-all duration-500 ${
                    data.percentage >= 90 ? 'bg-dashboard-accent-green' :
                    data.percentage >= 75 ? 'bg-dashboard-accent-blue' :
                    'bg-dashboard-accent-orange'
                  }`}
                  style={{ 
                    height: `${(data.percentage / 100) * 100}px`,
                    opacity: 0.8 + (data.percentage / maxPercentage) * 0.2
                  }}
                />
              </div>
              <span className="text-xs text-dashboard-text-muted">{data.month}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};