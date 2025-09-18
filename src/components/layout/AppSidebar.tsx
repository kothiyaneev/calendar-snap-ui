import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Calendar,
  Users,
  UserCheck,
  BarChart3,
  Settings,
  Home,
  BookOpen,
  ClipboardList,
  Bell,
  User
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';

const navigationItems = [
  {
    title: 'Dashboard',
    url: '/',
    icon: Home,
    group: 'Main'
  },
  {
    title: 'Student Management',
    url: '/students',
    icon: Users,
    group: 'Management'
  },
  {
    title: 'Teacher Management', 
    url: '/teachers',
    icon: User,
    group: 'Management'
  },
  {
    title: 'Attendance',
    url: '/attendance',
    icon: UserCheck,
    group: 'Management'
  },
  {
    title: 'Academic Calendar',
    url: '/calendar',
    icon: Calendar,
    group: 'Academic'
  },
  {
    title: 'Timetable',
    url: '/timetable',
    icon: BookOpen,
    group: 'Academic'
  },
  {
    title: 'Reports',
    url: '/reports',
    icon: BarChart3,
    group: 'Analytics'
  },
  {
    title: 'Announcements',
    url: '/announcements',
    icon: Bell,
    group: 'Communication'
  },
  {
    title: 'Settings',
    url: '/settings',
    icon: Settings,
    group: 'System'
  }
];

const groupedItems = navigationItems.reduce((acc, item) => {
  if (!acc[item.group]) {
    acc[item.group] = [];
  }
  acc[item.group].push(item);
  return acc;
}, {} as Record<string, typeof navigationItems>);

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const isCollapsed = state === 'collapsed';

  const isActive = (path: string) => {
    if (path === '/') {
      return currentPath === '/';
    }
    return currentPath.startsWith(path);
  };

  const getNavClassName = (path: string) => {
    const active = isActive(path);
    return `flex items-center w-full px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
      active
        ? 'bg-dashboard-accent-blue text-white shadow-md'
        : 'text-dashboard-text-secondary hover:text-dashboard-text-primary hover:bg-dashboard-hover'
    }`;
  };

  return (
    <Sidebar
      variant="sidebar"
      className="bg-dashboard-card border-r border-dashboard-border"
    >
      <SidebarContent className="px-4 py-6">
        {/* Sidebar Header */}
        <div className={`mb-8 ${isCollapsed ? 'text-center' : ''}`}>
          {!isCollapsed ? (
            <div>
              <h2 className="text-xl font-bold text-dashboard-text-primary">
                📊 QuickRoll
              </h2>
              <p className="text-sm text-dashboard-text-muted">
                Attendance Management
              </p>
            </div>
          ) : (
            <div className="text-2xl">📊</div>
          )}
        </div>

        {/* Navigation Groups */}
        {Object.entries(groupedItems).map(([groupName, items]) => (
          <SidebarGroup key={groupName} className="mb-6">
            {!isCollapsed && (
              <SidebarGroupLabel className="text-xs font-semibold text-dashboard-text-muted uppercase tracking-wider mb-3">
                {groupName}
              </SidebarGroupLabel>
            )}
            
            <SidebarGroupContent>
              <SidebarMenu className="space-y-1">
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink to={item.url} className={getNavClassName(item.url)}>
                        <item.icon className={`${isCollapsed ? 'w-5 h-5' : 'w-4 h-4 mr-3'} flex-shrink-0`} />
                        {!isCollapsed && (
                          <span className="truncate">{item.title}</span>
                        )}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}