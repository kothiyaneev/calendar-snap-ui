import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UserPlus, Users, LayoutDashboard } from 'lucide-react';

export const TeacherManagement = () => {
  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-quickroll-purple">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-xl font-bold text-quickroll-text flex items-center justify-center gap-2">
          👨‍🏫 TEACHER MANAGEMENT
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Statistics Display */}
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-gradient-to-br from-quickroll-purple/10 to-quickroll-purple/5 rounded-lg">
            <div className="text-2xl font-bold text-quickroll-text">8</div>
            <div className="text-sm text-dashboard-text-secondary">Total Teachers</div>
          </div>
          <div className="text-center p-3 bg-gradient-to-br from-quickroll-green/10 to-quickroll-green/5 rounded-lg">
            <div className="text-2xl font-bold text-quickroll-text">2</div>
            <div className="text-sm text-dashboard-text-secondary">Active Sessions</div>
          </div>
          <div className="text-center p-3 bg-gradient-to-br from-quickroll-primary/10 to-quickroll-primary/5 rounded-lg">
            <div className="text-2xl font-bold text-quickroll-text">12</div>
            <div className="text-sm text-dashboard-text-secondary">Subjects Covered</div>
          </div>
          <div className="text-center p-3 bg-gradient-to-br from-quickroll-orange/10 to-quickroll-orange/5 rounded-lg">
            <div className="text-2xl font-bold text-quickroll-text">09:45 AM</div>
            <div className="text-sm text-dashboard-text-secondary">Last Activity</div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="space-y-3">
          <Button 
            className="w-full bg-quickroll-primary hover:bg-quickroll-secondary text-white font-bold py-3 rounded-lg transition-all duration-200 hover:shadow-lg"
            size="lg"
          >
            <UserPlus className="mr-2 h-4 w-4" />
            📝 Register New Teacher
          </Button>
          
          <Button 
            variant="secondary"
            className="w-full bg-quickroll-gray hover:bg-dashboard-hover text-quickroll-text font-bold py-3 rounded-lg transition-all duration-200 hover:shadow-lg"
            size="lg"
          >
            <Users className="mr-2 h-4 w-4" />
            👀 View All Teachers
          </Button>
          
          <Button 
            className="w-full bg-quickroll-green hover:bg-quickroll-green/90 text-white font-bold py-3 rounded-lg transition-all duration-200 hover:shadow-lg"
            size="lg"
          >
            <LayoutDashboard className="mr-2 h-4 w-4" />
            📋 Teacher Dashboard
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};