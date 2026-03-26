import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Layout
import MainLayout from '../Layouts/MainLayout';

// Pages
import Dashboard from '../pages/Dashboard';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Booking from '../pages/Booking';
import Profile from '../pages/Profile';
import ViewDetails from '../pages/ViewDetails';

// Admin Pages
import AdminDashboard from '../Admin/AdminDashboard';
import AdminLayout from '../Admin/components/AdminLayout';
import AdminUsers from '../Admin/AdminUsers';
import AdminStats from '../Admin/AdminStats';
import AdminSettings from '../Admin/AdminSettings';


// ProtectedRoute wrapper for main pages
function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token');
  const isLoggedIn = token && token !== "undefined" && token !== "null";
  return isLoggedIn ? children : <Navigate to="/login" state={{ from: window.location.pathname }} />;
}

// ProtectedRoute wrapper for admin pages
function AdminRoute({ children }) {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('userRole')?.trim().toUpperCase();
  if (!token || role !== 'ADMIN') {
    return <Navigate to="/login" state={{ from: window.location.pathname }} />;
  }
  return children;
}

function AppRoutes() {
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('userRole')?.trim().toUpperCase();
  const isLoggedIn = token && token !== "undefined" && token !== "null";

  return (
    <Router>
      <Routes>

        {/* ================= ADMIN ROUTES ================= */}
        <Route 
          path="/admin" 
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >
          <Route index element={<AdminDashboard />} />   {/* /admin */}
          <Route path="users" element={<AdminUsers />} />   {/* /admin/users */}
          <Route path="stats" element={<AdminStats />} />   {/* /admin/stats */}
          <Route path="settings" element={<AdminSettings />} /> {/* /admin/settings */}
          <Route path="*" element={<Navigate to="/admin" />} />
        </Route>

        {/* ================= MAIN ROUTES ================= */}
        <Route path="/" element={<MainLayout />}>

          {/* Public */}
          <Route index element={<Dashboard />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="details/:category/:id" element={<ViewDetails />} />
          <Route path="Booking" element={<Booking />} />
          <Route path="Profile" element={<Profile />} />
          {/* Catch All */}
          <Route path="*" element={<Navigate to="/" />} />

        </Route>

      </Routes>
    </Router>
  );
}

export default AppRoutes;