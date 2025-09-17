import React from 'react';

export const QuickRollHeader = () => {
  return (
    <header className="bg-gradient-to-r from-quickroll-primary to-quickroll-secondary text-white py-8 px-6">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          📊 QuickRoll Dashboard
        </h1>
        <p className="text-xl text-blue-100">
          Face Recognition Attendance Management System
        </p>
      </div>
    </header>
  );
};