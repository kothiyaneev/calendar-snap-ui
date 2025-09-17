import React from 'react';
import { Bell, ArrowRight, AlertTriangle, Calendar, Book } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const announcements = [
  {
    id: 1,
    title: 'Assignment Submission',
    description: 'Physics lab report due by Sept 22nd. Submit to Prof. Johnson\'s office or upload online.',
    date: 'Sep 17, 2024',
    priority: 'high',
    type: 'assignment',
    icon: Book
  },
  {
    id: 2,
    title: 'Library Hours Extended',
    description: 'Library will now remain open until 10 PM during exam season starting Sept 20th.',
    date: 'Sep 16, 2024',
    priority: 'medium',
    type: 'general',
    icon: Calendar
  },
  {
    id: 3,
    title: 'Prioritize Mathematics',
    description: 'Attend all remaining Math classes (highest risk)',
    date: 'Today',
    priority: 'high',
    type: 'alert',
    icon: AlertTriangle
  },
  {
    id: 4,
    title: 'Weekly Goal',
    description: 'Attend minimum 4 classes per week to improve trend',
    date: 'Today',
    priority: 'medium',
    type: 'goal',
    icon: Calendar
  },
  {
    id: 5,
    title: 'Pattern Alert',
    description: 'Friday attendance is consistently low - focus improvement',
    date: 'Today',
    priority: 'high',
    type: 'pattern',
    icon: AlertTriangle
  }
];

const getIcon = (type: string) => {
  switch (type) {
    case 'assignment': return Book;
    case 'alert': return AlertTriangle;
    case 'pattern': return AlertTriangle;
    case 'goal': return Calendar;
    default: return Bell;
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high': return 'text-status-absent';
    case 'medium': return 'text-status-warning';
    case 'low': return 'text-dashboard-accent-green';
    default: return 'text-dashboard-text-secondary';
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'assignment': return 'bg-dashboard-accent-blue/20 text-dashboard-accent-blue';
    case 'alert': return 'bg-status-absent/20 text-status-absent';
    case 'pattern': return 'bg-status-warning/20 text-status-warning';
    case 'goal': return 'bg-dashboard-accent-green/20 text-dashboard-accent-green';
    default: return 'bg-dashboard-accent-purple/20 text-dashboard-accent-purple';
  }
};

export const Announcements = () => {
  return (
    <Card className="bg-dashboard-card border-dashboard-border h-fit">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-dashboard-text-primary flex items-center gap-2">
            <Bell className="w-5 h-5 text-dashboard-accent-blue" />
            Announcements
          </CardTitle>
          <Badge className="bg-status-absent/20 text-status-absent border-status-absent/30">
            3 New
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {announcements.map((announcement) => {
          const IconComponent = getIcon(announcement.type);
          
          return (
            <div
              key={announcement.id}
              className="p-4 rounded-lg border border-dashboard-border hover:bg-dashboard-hover transition-all duration-200 cursor-pointer group"
            >
              <div className="flex items-start space-x-3">
                <div className={`
                  w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0
                  ${getTypeColor(announcement.type)}
                `}>
                  <IconComponent className="w-4 h-4" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium text-dashboard-text-primary text-sm group-hover:text-dashboard-accent-blue transition-colors">
                      {announcement.title}
                    </h4>
                    <span className={`text-xs ${getPriorityColor(announcement.priority)}`}>
                      {announcement.priority === 'high' ? 'HOT' : announcement.priority.toUpperCase()}
                    </span>
                  </div>
                  
                  <p className="text-sm text-dashboard-text-secondary leading-relaxed mb-2">
                    {announcement.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-dashboard-text-muted">
                      {announcement.date}
                    </span>
                    
                    {announcement.type === 'assignment' && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-dashboard-accent-blue hover:text-dashboard-accent-blue hover:bg-dashboard-accent-blue/10 p-1 h-auto"
                      >
                        <span className="text-xs mr-1">View Details</span>
                        <ArrowRight className="w-3 h-3" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        
        <Button
          variant="ghost"
          className="w-full text-dashboard-accent-blue hover:text-dashboard-accent-blue hover:bg-dashboard-accent-blue/10 mt-4"
        >
          View All Announcements
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
  );
};