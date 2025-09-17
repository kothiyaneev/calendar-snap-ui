import React from 'react';
import { Filter, FileDown, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const attendanceRecords = [
  { date: 'Sep 15', subject: 'Mathematics', status: 'present', teacher: 'Dr. Smith', time: '09:00 AM' },
  { date: 'Sep 15', subject: 'Physics', status: 'late', teacher: 'Prof. Johnson', time: '11:30 AM' },
  { date: 'Sep 14', subject: 'Chemistry', status: 'absent', teacher: 'Dr. Wilson', time: '02:00 PM' },
  { date: 'Sep 14', subject: 'English', status: 'present', teacher: 'Ms. Davis', time: '10:00 AM' },
  { date: 'Sep 13', subject: 'History', status: 'present', teacher: 'Mr. Brown', time: '01:30 PM' },
  { date: 'Sep 13', subject: 'Mathematics', status: 'present', teacher: 'Dr. Smith', time: '09:00 AM' },
  { date: 'Sep 12', subject: 'Physics', status: 'late', teacher: 'Prof. Johnson', time: '11:30 AM' },
  { date: 'Sep 12', subject: 'Chemistry', status: 'present', teacher: 'Dr. Wilson', time: '02:00 PM' },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'present':
      return <Badge className="bg-status-present/20 text-status-present border-status-present/30">Present</Badge>;
    case 'absent':
      return <Badge className="bg-status-absent/20 text-status-absent border-status-absent/30">Absent</Badge>;
    case 'late':
      return <Badge className="bg-status-late/20 text-status-late border-status-late/30">Late</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

export const RecentAttendance = () => {
  return (
    <Card className="bg-dashboard-card border-dashboard-border">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-dashboard-text-primary flex items-center gap-2">
            <Clock className="w-5 h-5 text-dashboard-accent-blue" />
            Recent Attendance
          </CardTitle>
          <div className="flex space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-dashboard-text-secondary hover:text-dashboard-text-primary hover:bg-dashboard-hover"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-dashboard-text-secondary hover:text-dashboard-text-primary hover:bg-dashboard-hover"
            >
              <FileDown className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-dashboard-border">
                <th className="text-left py-3 px-4 text-sm font-medium text-dashboard-text-secondary">Date</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-dashboard-text-secondary">Subject</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-dashboard-text-secondary">Status</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-dashboard-text-secondary">Teacher</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-dashboard-text-secondary">Time</th>
              </tr>
            </thead>
            <tbody>
              {attendanceRecords.map((record, index) => (
                <tr key={index} className="border-b border-dashboard-border/50 hover:bg-dashboard-hover transition-colors">
                  <td className="py-3 px-4 text-sm text-dashboard-text-primary">{record.date}</td>
                  <td className="py-3 px-4 text-sm text-dashboard-text-primary">{record.subject}</td>
                  <td className="py-3 px-4">{getStatusBadge(record.status)}</td>
                  <td className="py-3 px-4 text-sm text-dashboard-text-secondary">{record.teacher}</td>
                  <td className="py-3 px-4 text-sm text-dashboard-text-secondary">{record.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-dashboard-border">
          <p className="text-sm text-dashboard-text-secondary">Showing 8 recent records</p>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-status-present rounded-full"></div>
              <span className="text-dashboard-text-secondary">Present: 5</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-status-late rounded-full"></div>
              <span className="text-dashboard-text-secondary">Late: 2</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-status-absent rounded-full"></div>
              <span className="text-dashboard-text-secondary">Absent: 1</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};