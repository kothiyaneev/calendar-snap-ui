import React from 'react';
import { Bell, Settings, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export const DashboardHeader = () => {
  return (
    <header className="bg-dashboard-surface border-b border-dashboard-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left Side - Logo and Title */}
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-dashboard-accent-blue rounded-lg flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-dashboard-text-primary">Student Dashboard</h1>
              <p className="text-sm text-dashboard-text-secondary">Welcome back, Alex! 👋</p>
            </div>
          </div>
          
          {/* Right Side - Actions and Profile */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-dashboard-text-secondary hover:text-dashboard-text-primary hover:bg-dashboard-hover"
            >
              <Bell className="w-5 h-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="text-dashboard-text-secondary hover:text-dashboard-text-primary hover:bg-dashboard-hover"
            >
              <Settings className="w-5 h-5" />
            </Button>
            
            <div className="flex items-center space-x-3 pl-4 border-l border-dashboard-border">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/avatar.jpg" alt="Alex Chen" />
                <AvatarFallback className="bg-dashboard-accent-purple text-white text-sm">AC</AvatarFallback>
              </Avatar>
              <div className="text-right">
                <p className="text-sm font-medium text-dashboard-text-primary">Alex Chen</p>
                <p className="text-xs text-dashboard-text-secondary">Student ID: 12345</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};