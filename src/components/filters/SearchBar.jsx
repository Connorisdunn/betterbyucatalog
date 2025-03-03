// src/components/filters/SearchBar.jsx
import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { SortOptions } from './SortOptions';

export function SearchBar({ value, onChange, sortBy, sortOrder, onSortChange }) {
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
      <SortOptions 
        sortBy={sortBy}
        sortOrder={sortOrder}
        onChange={onSortChange}
      />
      <button className="mymap-button" onClick={handleLinkClick}>
        <FaExternalLinkAlt />
        Link to MyMap
      </button>
    </div>
  );
}