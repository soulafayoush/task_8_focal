// src/components/Header.tsx
import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <input type="text" placeholder="Search product by name" className="search-input" />
      <button className="add-product-button">ADD NEW PRODUCT</button>
    </header>
  );
};

export default Header;
