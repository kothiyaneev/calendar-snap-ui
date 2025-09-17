import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, Settings, Database } from 'lucide-react';

export const Administration = () => {
  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-quickroll-green">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-xl font-bold text-quickroll-text flex items-center justify-center gap-2">
          🛠 ADMINISTRATION
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Statistics Display */}
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-gradient-to-br from-quickroll-green/10 to-quickroll-green/5 rounded-lg">
            <div className="text-2xl font-bold text-quickroll-text">1,247</div>
            <div className="text-sm text-dashboard-text-secondary">Database Records</div>
          </div>
          <div className="text-center p-3 bg-gradient-to-br from-quickroll-primary/10 to-quickroll-primary/5 rounded-lg">
            <div className="text-2xl font-bold text-quickroll-text">890</div>
            <div className="text-sm text-dashboard-text-secondary">Attendance Logs</div>
          </div>
          <div className="text-center p-3 bg-gradient-to-br from-quickroll-orange/10 to-quickroll-orange/5 rounded-lg">
            <div className="text-2xl font-bold text-quickroll-text">3</div>
            <div className="text-sm text-dashboard-text-secondary">Security Events (Today)</div>
          </div>
          <div className="text-center p-3 bg-gradient-to-br from-quickroll-purple/10 to-quickroll-purple/5 rounded-lg">
            <div className="text-xl font-bold text-quickroll-green">✅ Online</div>
            <div className="text-sm text-dashboard-text-secondary">System Status</div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="space-y-3">
          <Button 
            className="w-full bg-quickroll-primary hover:bg-quickroll-secondary text-white font-bold py-3 rounded-lg transition-all duration-200 hover:shadow-lg"
            size="lg"
          >
            <BarChart3 className="mr-2 h-4 w-4" />
            📈 View Reports
          </Button>
          
          <Button 
            variant="secondary"
            className="w-full bg-quickroll-gray hover:bg-dashboard-hover text-quickroll-text font-bold py-3 rounded-lg transition-all duration-200 hover:shadow-lg"
            size="lg"
          >
            <Settings className="mr-2 h-4 w-4" />
            ⚙ Settings
          </Button>
          
          <Button 
            className="w-full bg-quickroll-green hover:bg-quickroll-green/90 text-white font-bold py-3 rounded-lg transition-all duration-200 hover:shadow-lg"
            size="lg"
          >
            <Database className="mr-2 h-4 w-4" />
            💾 Database Management
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};