import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, UserPlus, Search, Filter } from 'lucide-react';

export default function StudentsPage() {
  const students = [
    { id: 1, name: 'Arjun Patel', class: '12th A', rollNo: '001', status: 'Present', attendance: '92%' },
    { id: 2, name: 'Priya Sharma', class: '12th A', rollNo: '002', status: 'Present', attendance: '88%' },
    { id: 3, name: 'Rahul Kumar', class: '12th B', rollNo: '003', status: 'Absent', attendance: '75%' },
    { id: 4, name: 'Sneha Mehta', class: '12th A', rollNo: '004', status: 'Present', attendance: '95%' },
    { id: 5, name: 'Kiran Shah', class: '12th C', rollNo: '005', status: 'Present', attendance: '85%' },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-dashboard-text-primary flex items-center gap-2">
            <Users className="w-6 h-6 text-dashboard-accent-blue" />
            Student Management
          </h1>
          <p className="text-dashboard-text-secondary">Manage student records and attendance</p>
        </div>
        
        <Button className="bg-dashboard-accent-blue hover:bg-dashboard-accent-blue/90 text-white">
          <UserPlus className="w-4 h-4 mr-2" />
          Add New Student
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-dashboard-card border-dashboard-border">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-dashboard-text-primary">245</div>
            <div className="text-sm text-dashboard-text-secondary">Total Students</div>
          </CardContent>
        </Card>
        <Card className="bg-dashboard-card border-dashboard-border">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-dashboard-accent-green">198</div>
            <div className="text-sm text-dashboard-text-secondary">Present Today</div>
          </CardContent>
        </Card>
        <Card className="bg-dashboard-card border-dashboard-border">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-dashboard-accent-red">47</div>
            <div className="text-sm text-dashboard-text-secondary">Absent Today</div>
          </CardContent>
        </Card>
        <Card className="bg-dashboard-card border-dashboard-border">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-dashboard-accent-blue">87.2%</div>
            <div className="text-sm text-dashboard-text-secondary">Average Attendance</div>
          </CardContent>
        </Card>
      </div>

      {/* Student List */}
      <Card className="bg-dashboard-card border-dashboard-border">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-dashboard-text-primary">Student List</CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-dashboard-border">
                  <th className="text-left py-3 px-4 text-dashboard-text-secondary font-medium">Roll No</th>
                  <th className="text-left py-3 px-4 text-dashboard-text-secondary font-medium">Name</th>
                  <th className="text-left py-3 px-4 text-dashboard-text-secondary font-medium">Class</th>
                  <th className="text-left py-3 px-4 text-dashboard-text-secondary font-medium">Status</th>
                  <th className="text-left py-3 px-4 text-dashboard-text-secondary font-medium">Attendance</th>
                  <th className="text-left py-3 px-4 text-dashboard-text-secondary font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id} className="border-b border-dashboard-border hover:bg-dashboard-hover">
                    <td className="py-3 px-4 text-dashboard-text-primary font-medium">{student.rollNo}</td>
                    <td className="py-3 px-4 text-dashboard-text-primary">{student.name}</td>
                    <td className="py-3 px-4 text-dashboard-text-secondary">{student.class}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        student.status === 'Present' 
                          ? 'bg-dashboard-accent-green/20 text-dashboard-accent-green'
                          : 'bg-dashboard-accent-red/20 text-dashboard-accent-red'
                      }`}>
                        {student.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-dashboard-text-secondary">{student.attendance}</td>
                    <td className="py-3 px-4">
                      <Button variant="ghost" size="sm" className="text-dashboard-accent-blue hover:bg-dashboard-accent-blue/10">
                        View Details
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}