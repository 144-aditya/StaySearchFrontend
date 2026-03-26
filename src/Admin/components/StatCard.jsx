import React from 'react';
import '../../Admin/styles/admin-stats.css';

function StatCard({ icon, title, value, color, trend }) {
  return (
    <div className="stat-card">
      <div className={`stat-icon ${color}`}>
        {icon}
      </div>
      <div className="stat-info">
        <h3>{title}</h3>
        <p>{value}</p>
        {trend && <span className="stat-trend">{trend}</span>}
      </div>
    </div>
  );
}

export default StatCard;