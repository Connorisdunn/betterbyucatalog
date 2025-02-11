// components/common/Dropdown.jsx
import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export function Dropdown({ title, options, selected, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [direction, setDirection] = useState('down');
  const dropdownRef = useRef(null);

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

  const toggleOption = (option) => {
    const value = option.code || option;
    const newSelected = selected.includes(value)
      ? selected.filter(item => item !== value)
      : [...selected, value];
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
                onChange={() => toggleOption(option)}
              />
              {option.name || option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}