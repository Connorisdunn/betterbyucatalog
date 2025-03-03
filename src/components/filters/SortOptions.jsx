// src/components/filters/SortOptions.jsx
import React from 'react';
import { FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';

export function SortOptions({ sortBy, sortOrder, onChange }) {
  const handleSortByChange = (event) => {
    onChange({ sortBy: event.target.value, sortOrder });
  };

  const toggleSortOrder = () => {
    onChange({ sortBy, sortOrder: sortOrder === 'asc' ? 'desc' : 'asc' });
  };

  return (
    <div className="sort-options">
      <label htmlFor="sort-select" className="sort-label">Sort by:</label>
      <select 
        id="sort-select"
        value={sortBy}
        onChange={handleSortByChange}
        className="sort-select"
      >
        <option value="code">Course Code</option>
        <option value="name">Course Name</option>
        <option value="credits">Credit Hours</option>
      </select>
      <button 
        className="sort-order-toggle"
        onClick={toggleSortOrder}
        title={sortOrder === 'asc' ? 'Ascending order' : 'Descending order'}
      >
        {sortOrder === 'asc' ? <FaSortAmountDown /> : <FaSortAmountUp />}
      </button>
    </div>
  );
}