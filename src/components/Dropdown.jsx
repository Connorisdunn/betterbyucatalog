import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export function Dropdown({ title, options, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [direction, setDirection] = useState('down'); // 'down' or 'up'
  const [selected, setSelected] = useState([]);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Check available space when opening the dropdown
  useEffect(() => {
    if (isOpen && dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const dropdownHeight = 200; // Assume a max height for dropdown-content
      if (spaceBelow < dropdownHeight) {
        setDirection('up');
      } else {
        setDirection('down');
      }
    }
  }, [isOpen]);

  const toggleOption = (option) => {
    const newSelected = selected.includes(option)
      ? selected.filter(item => item !== option)
      : [...selected, option];
    setSelected(newSelected);
    onChange(newSelected);
  };

  return (
    <div className="filter-section" ref={dropdownRef}>
      <div 
        className="dropdown-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title} ({selected.length} selected)</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      
      {isOpen && (
        <div 
          className="dropdown-content" 
          style={direction === 'up' ? { bottom: '100%', top: 'auto', marginBottom: '4px' } : {}}
        >
          {options.map((option) => (
            <label key={option.code || option} className="checkbox-label">
              <input
                type="checkbox"
                checked={selected.includes(option.code || option)}
                onChange={() => toggleOption(option.code || option)}
              />
              {option.name || option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
