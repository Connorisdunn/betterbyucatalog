// components/filters/SemesterFilter.jsx
import React from 'react';

export function SemesterFilter({ selected, onChange }) {
  const semesters = [
    { term: 'Spring 2025', type: 'spring' },
    { term: 'Summer 2025', type: 'spring' },
    { term: 'Fall 2025', type: 'fall' },
    { term: 'Winter 2026', type: 'winter' },
  ];

  return (
    <div className="filter-section">
      <h3>Semesters</h3>
      <div className="semester-filters">
        {semesters.map(({ term, type }) => (
          <button
            key={term}
            className={`semester-pill ${type} ${selected === term ? 'active' : ''}`}
            onClick={() => onChange(term)}
          >
            {term}
          </button>
        ))}
      </div>
    </div>
  );
}