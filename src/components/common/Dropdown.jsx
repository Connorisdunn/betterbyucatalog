// components/common/Dropdown.jsx
import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown, FaChevronUp, FaSearch } from 'react-icons/fa';

export function Dropdown({ title, options, selected, onChange, enableSearch = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [direction, setDirection] = useState('down');
  const [searchQuery, setSearchQuery] = useState('');
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

  // Reset search when dropdown closes
  useEffect(() => {
    if (!isOpen) {
      setSearchQuery('');
    }
  }, [isOpen]);

  const toggleOption = (option) => {
    const value = option.code || option;
    const newSelected = selected.includes(value)
      ? selected.filter(item => item !== value)
      : [...selected, value];
    onChange(newSelected);
  };
  
  // Filter options based on search query
  const filteredOptions = searchQuery 
    ? options.filter(option => 
        (option.name || option).toLowerCase().includes(searchQuery.toLowerCase()))
    : options;

  return (
    <div className="filter-section" ref={dropdownRef}>
      <div 
        className="dropdown-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      <div className="selected-count text-sm text-gray-600">
        {selected.length} selected
      </div>
      
      {isOpen && (
        <div 
          className="dropdown-content" 
          style={direction === 'up' ? { bottom: '100%', top: 'auto', marginBottom: '4px' } : {}}
        >
          {enableSearch && (
            <div className="dropdown-search">
              <input
                type="text"
                placeholder="Search options..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onClick={(e) => e.stopPropagation()}
                className="dropdown-search-input"
              />
              <FaSearch className="dropdown-search-icon" />
            </div>
          )}
          
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <label key={option.code || option} className="checkbox-label">
                <input
                  type="checkbox"
                  checked={selected.includes(option.code || option)}
                  onChange={() => toggleOption(option)}
                />
                {option.name || option}
              </label>
            ))
          ) : (
            <div className="no-results">No matching options</div>
          )}
        </div>
      )}
    </div>
  );
}
