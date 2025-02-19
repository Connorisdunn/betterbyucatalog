// src/components/filters/SearchBar.jsx
import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

export function SearchBar({ value, onChange }) {
  const handleLinkClick = () => {
    window.open('https://mymap.byu.edu/', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Search courses..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button className="mymap-button" onClick={handleLinkClick}>
        <FaExternalLinkAlt />
        Link to MyMap
      </button>
    </div>
  );
}

