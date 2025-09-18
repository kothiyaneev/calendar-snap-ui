import React from 'react';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { AcademicCalendar } from '@/components/dashboard/AcademicCalendar';
import { AttendanceOverview } from '@/components/dashboard/AttendanceOverview';
import { RecentAttendance } from '@/components/dashboard/RecentAttendance';
import { MonthlyTrend } from '@/components/dashboard/MonthlyTrend';
import { Announcements } from '@/components/dashboard/Announcements';

const Index = () => {
  return (
    <div className="min-h-screen bg-dashboard-background text-dashboard-text-primary">
      <DashboardHeader />
      
      {/* Main Dashboard Content */}
      <main className="container mx-auto px-6 py-8 space-y-8">
        {/* Top Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AttendanceOverview />
          <MonthlyTrend />
          <Announcements />
        </div>
        
        {/* Calendar and Recent Attendance */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <AcademicCalendar />
          </div>
          <div className="lg:col-span-1">
            <RecentAttendance />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;