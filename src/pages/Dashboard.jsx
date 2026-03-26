import React, { useState } from 'react';
import CategorySection from '../components/dashboard/CategorySection.jsx';
import pgData from '../data/pgData.js';
import hostelData from '../data/hostelData.js';
import lodgeData from '../data/lodgeData.js';
import '../styles/dashboard.css';

function Dashboard() {
  const [search, setSearch] = useState("");

  // Filter function
  const filterData = (data) => {
    return data.filter(item =>
      item.name?.toLowerCase().includes(search.toLowerCase())
    );
  };

  return (
    <div className="dashboard">
      <h1>Welcome to StaySearch</h1>

      {/* 🔍 Search Input */}
      <input
        type="text"
        placeholder="Search PG, Hostel, Lodge..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          margin: "20px 0",
          fontSize: "16px"
        }}
      />

      {/* Filtered Sections */}
      <CategorySection 
        title="PG" 
        properties={filterData(pgData)} 
      />

      <CategorySection 
        title="Hostel" 
        properties={filterData(hostelData)} 
      />

      <CategorySection 
        title="Lodge" 
        properties={filterData(lodgeData)} 
      />
    </div>
  );
}

export default Dashboard;