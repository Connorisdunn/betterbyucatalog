// components/filters/SemesterFilter.jsx
import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export function SemesterFilter({ selected, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [direction, setDirection] = useState('down');
  const dropdownRef = useRef(null);

  const semesters = [
    { term: 'Spring 2025', type: 'spring' },
    { term: 'Summer 2025', type: 'spring' },
    { term: 'Fall 2025', type: 'fall' },
    { term: 'Winter 2026', type: 'winter' },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const dropdownHeight = 200;
      setDirection(spaceBelow < dropdownHeight ? 'up' : 'down');
    }
  }, [isOpen]);

  return (
    <div className="filter-section" ref={dropdownRef}>
      <div 
        className="dropdown-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Semester {selected ? `(${selected})` : ''}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      
      {isOpen && (
        <div 
          className="dropdown-content" 
          style={direction === 'up' ? { bottom: '100%', top: 'auto', marginBottom: '4px' } : {}}
        >
          {semesters.map(({ term }) => (
            <label key={term} className="checkbox-label">
              <input
                type="radio"
                name="semester"
                checked={selected === term}
                onChange={() => {
                  onChange(term);
                  setIsOpen(false);
                }}
              />
              {term}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
