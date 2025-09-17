import React from 'react';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { AttendanceOverview } from '@/components/dashboard/AttendanceOverview';
import { AcademicCalendar } from '@/components/dashboard/AcademicCalendar';
import { RecentAttendance } from '@/components/dashboard/RecentAttendance';
import { MonthlyTrend } from '@/components/dashboard/MonthlyTrend';
import { Announcements } from '@/components/dashboard/Announcements';

const Index = () => {
  return (
    <div className="min-h-screen bg-dashboard-bg">
      <DashboardHeader />
      
      <main className="container mx-auto px-6 py-8 space-y-8">
        {/* Top Row - Overview Stats */}
        <AttendanceOverview />
        
        {/* Main Content Row */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Left Column - Calendar and Trend */}
          <div className="xl:col-span-2 space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <MonthlyTrend />
              <AcademicCalendar />
            </div>
            
            {/* Recent Attendance - Full Width */}
            <RecentAttendance />
          </div>
          
          {/* Right Column - Announcements */}
          <div className="xl:col-span-1">
            <Announcements />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;