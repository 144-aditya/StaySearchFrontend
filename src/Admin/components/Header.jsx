import React from 'react';
import '../../Admin/styles/admin.css';

function Header({ title }) {
  const userName = localStorage.getItem('userName');
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="admin-header">
      <div>
        <h1>{title}</h1>
        <p className="admin-date">{currentDate}</p>
      </div>
      <div className="admin-info">
        <span className="admin-name">👋 {userName}</span>
      </div>
    </div>
  );
}

export default Header;