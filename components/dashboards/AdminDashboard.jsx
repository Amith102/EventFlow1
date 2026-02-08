'use  client';

import React from 'react';
import './AdminDashboard.css';

/**
 * Admin Dashboard Component
 * @param {import('./types').DashboardProps} props
 */
export default function AdminDashboard({ userId, role }) {
  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <p className="welcome-text">Welcome, Admin {userId}</p>
      </div>
      
      <div className="dashboard-content">
        <p>Dashboard widgets coming soon...</p>
      </div>
    </div>
  );
}