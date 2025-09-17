import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Clock, User, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface TimetableEntry {
  time: string;
  subject: string;
  faculty: string;
  type: 'theory' | 'lab' | 'break';
}

const generateTimetable = (date: number): TimetableEntry[] => {
  const subjects = ['Mathematics', 'Physics', 'Chemistry', 'English', 'History', 'Computer Science'];
  const faculties = ['Dr. Smith', 'Prof. Johnson', 'Dr. Wilson', 'Ms. Davis', 'Mr. Brown', 'Prof. Anderson'];
  const labs = ['Physics Lab', 'Chemistry Lab', 'Computer Lab', 'Biology Lab'];
  
  // Use date to create variation but keep it consistent
  const subjectIndex = date % subjects.length;
  const facultyIndex = date % faculties.length;
  const labIndex = date % labs.length;
  
  return [
    {
      time: '9:00 AM – 10:00 AM',
      subject: subjects[subjectIndex],
      faculty: faculties[facultyIndex],
      type: 'theory'
    },
    {
      time: '10:00 AM – 11:00 AM',
      subject: subjects[(subjectIndex + 1) % subjects.length],
      faculty: faculties[(facultyIndex + 1) % faculties.length],
      type: 'theory'
    },
    {
      time: '11:00 AM – 12:00 PM',
      subject: subjects[(subjectIndex + 2) % subjects.length],
      faculty: faculties[(facultyIndex + 2) % faculties.length],
      type: 'theory'
    },
    {
      time: '12:00 PM – 12:40 PM',
      subject: 'Break',
      faculty: '',
      type: 'break'
    },
    {
      time: '12:40 PM – 2:00 PM',
      subject: labs[labIndex],
      faculty: faculties[(facultyIndex + 1) % faculties.length],
      type: 'lab'
    }
  ];
};

export const AcademicCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [expandedTimetable, setExpandedTimetable] = useState<TimetableEntry[] | null>(null);
  
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const startDate = new Date(firstDayOfMonth);
  startDate.setDate(startDate.getDate() - firstDayOfMonth.getDay());
  
  const days = [];
  const currentDateObj = new Date(startDate);
  
  for (let i = 0; i < 42; i++) {
    days.push(new Date(currentDateObj));
    currentDateObj.setDate(currentDateObj.getDate() + 1);
  }
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  const handleDateClick = (date: number) => {
    if (selectedDate === date) {
      // Close if same date clicked
      setSelectedDate(null);
      setExpandedTimetable(null);
    } else {
      // Open new timetable
      setSelectedDate(date);
      setExpandedTimetable(generateTimetable(date));
    }
  };
  
  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    newDate.setMonth(month + (direction === 'next' ? 1 : -1));
    setCurrentDate(newDate);
    setSelectedDate(null);
    setExpandedTimetable(null);
  };
  
  return (
    <Card className="bg-dashboard-card border-dashboard-border">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-dashboard-text-primary flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-dashboard-accent-blue" />
            Academic Calendar
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigateMonth('prev')}
              className="text-dashboard-text-secondary hover:text-dashboard-text-primary hover:bg-dashboard-hover"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <span className="text-sm font-medium text-dashboard-text-primary min-w-[140px] text-center">
              {monthNames[month]} {year}
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigateMonth('next')}
              className="text-dashboard-text-secondary hover:text-dashboard-text-primary hover:bg-dashboard-hover"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1">
          {/* Day Headers */}
          {dayNames.map((day) => (
            <div key={day} className="p-2 text-center text-xs font-medium text-dashboard-text-muted">
              {day}
            </div>
          ))}
          
          {/* Calendar Days */}
          {days.map((date, index) => {
            const isCurrentMonth = date.getMonth() === month;
            const isToday = date.toDateString() === new Date().toDateString();
            const dayNumber = date.getDate();
            
            return (
              <button
                key={index}
                onClick={() => isCurrentMonth && handleDateClick(dayNumber)}
                className={`
                  p-2 text-sm relative rounded-lg border transition-all duration-200
                  ${isCurrentMonth 
                    ? 'text-dashboard-text-primary border-dashboard-border hover:bg-dashboard-hover cursor-pointer' 
                    : 'text-dashboard-text-muted border-transparent cursor-default'
                  }
                  ${isToday ? 'bg-dashboard-accent-blue text-white' : ''}
                  ${selectedDate === dayNumber && isCurrentMonth ? 'ring-2 ring-dashboard-accent-blue' : ''}
                `}
                disabled={!isCurrentMonth}
              >
                {dayNumber}
                {isCurrentMonth && (
                  <div className="absolute bottom-0.5 left-1/2 transform -translate-x-1/2 flex space-x-0.5">
                    <div className="w-1 h-1 bg-dashboard-accent-green rounded-full"></div>
                    <div className="w-1 h-1 bg-dashboard-accent-orange rounded-full"></div>
                  </div>
                )}
              </button>
            );
          })}
        </div>
        
        {/* Expanded Timetable */}
        {expandedTimetable && (
          <div className="mt-6 p-4 bg-dashboard-surface rounded-lg border border-dashboard-border animate-in slide-in-from-top-2 duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-dashboard-text-primary flex items-center gap-2">
                <Clock className="w-4 h-4 text-dashboard-accent-blue" />
                Daily Timetable - {monthNames[month]} {selectedDate}
              </h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setSelectedDate(null);
                  setExpandedTimetable(null);
                }}
                className="text-dashboard-text-secondary hover:text-dashboard-text-primary hover:bg-dashboard-hover"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="space-y-3">
              {expandedTimetable.map((entry, index) => (
                <div
                  key={index}
                  className={`
                    p-3 rounded-lg border transition-all duration-200
                    ${entry.type === 'break' 
                      ? 'bg-dashboard-accent-orange/10 border-dashboard-accent-orange/20' 
                      : entry.type === 'lab'
                        ? 'bg-dashboard-accent-purple/10 border-dashboard-accent-purple/20'
                        : 'bg-dashboard-accent-blue/10 border-dashboard-accent-blue/20'
                    }
                  `}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`
                        w-3 h-3 rounded-full
                        ${entry.type === 'break' 
                          ? 'bg-dashboard-accent-orange' 
                          : entry.type === 'lab'
                            ? 'bg-dashboard-accent-purple'
                            : 'bg-dashboard-accent-blue'
                        }
                      `} />
                      <div>
                        <p className="font-medium text-dashboard-text-primary">{entry.subject}</p>
                        {entry.faculty && (
                          <p className="text-sm text-dashboard-text-secondary flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {entry.faculty}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-dashboard-text-primary">{entry.time}</p>
                      <p className="text-xs text-dashboard-text-muted capitalize">{entry.type}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
