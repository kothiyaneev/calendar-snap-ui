import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UserCheck, Camera, Calendar, Clock, Users, TrendingUp } from 'lucide-react';

export default function AttendancePage() {
  const [isScanning, setIsScanning] = useState(false);

  const todayAttendance = [
    { id: 1, name: 'Arjun Patel', time: '8:45 AM', status: 'Present', method: 'Face Recognition' },
    { id: 2, name: 'Priya Sharma', time: '8:50 AM', status: 'Present', method: 'Face Recognition' },
    { id: 3, name: 'Sneha Mehta', time: '9:15 AM', status: 'Late', method: 'Manual Entry' },
    { id: 4, name: 'Kiran Shah', time: '8:30 AM', status: 'Present', method: 'Face Recognition' },
  ];

  const handleStartScanning = () => {
    setIsScanning(true);
    // Simulate scanning process
    setTimeout(() => {
      setIsScanning(false);
    }, 3000);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-dashboard-text-primary flex items-center gap-2">
            <UserCheck className="w-6 h-6 text-dashboard-accent-green" />
            Attendance Management
          </h1>
          <p className="text-dashboard-text-secondary">Track and manage student attendance</p>
        </div>
        
        <div className="flex gap-3">
          <Button 
            onClick={handleStartScanning}
            disabled={isScanning}
            className="bg-dashboard-accent-green hover:bg-dashboard-accent-green/90 text-white"
          >
            <Camera className="w-4 h-4 mr-2" />
            {isScanning ? 'Scanning...' : 'Start Face Scan'}
          </Button>
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            View Reports
          </Button>
        </div>
      </div>

      {/* Today's Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-dashboard-card border-dashboard-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-dashboard-accent-green">198</div>
                <div className="text-sm text-dashboard-text-secondary">Present Today</div>
              </div>
              <Users className="w-8 h-8 text-dashboard-accent-green/30" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-dashboard-card border-dashboard-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-dashboard-accent-red">47</div>
                <div className="text-sm text-dashboard-text-secondary">Absent Today</div>
              </div>
              <UserCheck className="w-8 h-8 text-dashboard-accent-red/30" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-dashboard-card border-dashboard-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-dashboard-accent-orange">12</div>
                <div className="text-sm text-dashboard-text-secondary">Late Arrivals</div>
              </div>
              <Clock className="w-8 h-8 text-dashboard-accent-orange/30" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-dashboard-card border-dashboard-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-dashboard-accent-blue">87.2%</div>
                <div className="text-sm text-dashboard-text-secondary">Attendance Rate</div>
              </div>
              <TrendingUp className="w-8 h-8 text-dashboard-accent-blue/30" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Face Recognition Scanner */}
      {isScanning && (
        <Card className="bg-dashboard-card border-dashboard-border">
          <CardContent className="p-6">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-dashboard-accent-green/10 rounded-full flex items-center justify-center">
                <Camera className="w-16 h-16 text-dashboard-accent-green animate-pulse" />
              </div>
              <h3 className="text-lg font-semibold text-dashboard-text-primary mb-2">
                Face Recognition Active
              </h3>
              <p className="text-dashboard-text-secondary">
                Please look directly at the camera for attendance marking...
              </p>
              <div className="mt-4">
                <div className="w-full bg-dashboard-surface rounded-full h-2">
                  <div className="bg-dashboard-accent-green h-2 rounded-full animate-pulse" style={{width: '70%'}}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Today's Attendance Log */}
      <Card className="bg-dashboard-card border-dashboard-border">
        <CardHeader>
          <CardTitle className="text-dashboard-text-primary flex items-center gap-2">
            <Clock className="w-5 h-5 text-dashboard-accent-blue" />
            Today's Attendance Log
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {todayAttendance.map((record) => (
              <div key={record.id} className="flex items-center justify-between p-3 bg-dashboard-surface rounded-lg border border-dashboard-border">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${
                    record.status === 'Present' ? 'bg-dashboard-accent-green' :
                    record.status === 'Late' ? 'bg-dashboard-accent-orange' : 'bg-dashboard-accent-red'
                  }`} />
                  <div>
                    <p className="font-medium text-dashboard-text-primary">{record.name}</p>
                    <p className="text-sm text-dashboard-text-secondary">{record.method}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-dashboard-text-primary">{record.time}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    record.status === 'Present' ? 'bg-dashboard-accent-green/20 text-dashboard-accent-green' :
                    record.status === 'Late' ? 'bg-dashboard-accent-orange/20 text-dashboard-accent-orange' :
                    'bg-dashboard-accent-red/20 text-dashboard-accent-red'
                  }`}>
                    {record.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}