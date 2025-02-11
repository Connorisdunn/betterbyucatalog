// components/filters/SearchBar.jsx
import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

export function SearchBar({ value, onChange }) {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Search courses..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button className="mymap-button">
        <FaExternalLinkAlt />
        Link to MyMap
      </button>
    </div>
  );
}