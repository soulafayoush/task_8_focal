// src/components/Sidebar.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <img src="/src/assets/images/pexels-photo-2379004 1.png" alt="Profile" className="profile-image" />
        <p>Mohammed Alkordy</p>
      </div>
      <nav className="menu">
        <NavLink to="/products" activeClassName="active">
          <span role="img" aria-label="Products">📦</span> Products
        </NavLink>
        <NavLink to="/favorites" activeClassName="active">
          <span role="img" aria-label="Favorites">⭐</span> Favorites
        </NavLink>
        <NavLink to="/orders" activeClassName="active">
          <span role="img" aria-label="Orders">📜</span> Order List
        </NavLink>
      </nav>
      <button className="logout-button">Logout</button>
    </div>
  );
};

export default Sidebar;
