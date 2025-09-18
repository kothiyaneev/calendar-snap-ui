import React from 'react';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from './AppSidebar';
import { Menu, Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <SidebarProvider defaultOpen={false}>
      <div className="min-h-screen flex w-full bg-dashboard-background">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-16 bg-dashboard-card border-b border-dashboard-border flex items-center justify-between px-6 sticky top-0 z-40">
            <div className="flex items-center gap-4">
              <SidebarTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-dashboard-text-secondary hover:text-dashboard-text-primary hover:bg-dashboard-hover"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SidebarTrigger>
              
              <div className="hidden md:block">
                <h1 className="text-lg font-semibold text-dashboard-text-primary">
                  QuickRoll Dashboard
                </h1>
                <p className="text-sm text-dashboard-text-secondary">
                  Face Recognition Attendance System
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="text-dashboard-text-secondary hover:text-dashboard-text-primary hover:bg-dashboard-hover relative"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-dashboard-accent-red rounded-full"></span>
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="text-dashboard-text-secondary hover:text-dashboard-text-primary hover:bg-dashboard-hover"
              >
                <User className="w-5 h-5" />
              </Button>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 p-6 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}