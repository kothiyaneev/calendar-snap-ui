import React from 'react';
import { QuickRollHeader } from '@/components/quickroll/QuickRollHeader';
import { StudentManagement } from '@/components/quickroll/StudentManagement';
import { TeacherManagement } from '@/components/quickroll/TeacherManagement';
import { Administration } from '@/components/quickroll/Administration';
import { QuickStats } from '@/components/quickroll/QuickStats';

const Index = () => {
  return (
    <div className="min-h-screen bg-quickroll-bg">
      <QuickRollHeader />
      
      <main className="container mx-auto px-6 py-8 space-y-8">
        {/* Main Management Components */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <StudentManagement />
          <TeacherManagement />
          <Administration />
        </div>
        
        {/* Quick Statistics Overview */}
        <QuickStats />
      </main>
    </div>
  );
};

export default Index;