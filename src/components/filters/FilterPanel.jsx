// src/components/filters/FilterPanel.jsx
import React from 'react';
import { Dropdown } from '../common/Dropdown';
import { departments } from '../../data/departments';
import { interests } from '../../data/interests';
import { SemesterFilter } from './SemesterFilter';
import { FaFilter } from 'react-icons/fa';
import { FaCalendar } from 'react-icons/fa';
import { FaGraduationCap } from 'react-icons/fa';

export function FilterPanel({ filters, onFilterChange, filteredCount, totalCount }) {
  // Updated reset function to preserve the current semester filter
  const handleReset = () => {
    onFilterChange({
      searchTerm: '',
      semester: filters.semester, // Preserve the semester filter
      departments: [],
      days: [],
      types: [],
      interests: []
    });
  };

  return (
    <div className="filters">
      <div className="filters-header mb-0">
      <h2 className="filters-title m-0 p-0">
    <FaFilter className="mr-2 inline-block align-text-bottom" />
    <span>Filters</span>
  </h2>
        <button 
          className="reset-button"
          onClick={handleReset}
          style={{ 
            display: filters.searchTerm || filters.departments.length || filters.days.length || filters.types.length || filters.interests.length ? 'block' : 'none' 
          }}
        >
          Reset All
        </button>
      </div>
      
      <div className="course-count text-sm text-gray-600 mb-2 ml-0">
        {filteredCount} classes match your filters
      </div>

      <SemesterFilter 
        selected={filters.semester}
        onChange={(semester) => onFilterChange({ ...filters, semester })}
      />

      <Dropdown
        title="Department"
        options={departments}
        selected={filters.departments}
        onChange={(departments) => onFilterChange({ ...filters, departments })}
      />

      <div className="filter-section">
        <h3><FaCalendar className="mr-3 inline-block align-text-bottom" />Days Taught</h3>
        <div className="days-group">
          {['M', 'T', 'W', 'TH', 'F'].map(day => (
            <div key={day} className="day-item">
              <input 
                type="checkbox"
                id={`day-${day}`}
                checked={filters.days.includes(day)}
                onChange={(e) => {
                  const days = e.target.checked 
                    ? [...filters.days, day]
                    : filters.days.filter(d => d !== day);
                  onFilterChange({ ...filters, days });
                }}
              />
              <label className="day-label" htmlFor={`day-${day}`}>{day}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h3><FaGraduationCap className="mr-3 inline-block align-text-bottom" />Type of Class</h3>
        <div className="checkbox-group">
          {['Online', 'In-Person', 'Hybrid'].map(type => (
            <label key={type} className="checkbox-label">
              <input 
                type="checkbox"
                checked={filters.types.includes(type)}
                onChange={(e) => {
                  const types = e.target.checked 
                    ? [...filters.types, type]
                    : filters.types.filter(t => t !== type);
                  onFilterChange({ ...filters, types });
                }}
              /> {type}
            </label>
          ))}
        </div>
      </div>

      <Dropdown
        title="Interests"
        options={interests}
        selected={filters.interests}
        onChange={(interests) => onFilterChange({ ...filters, interests })}
        enableSearch={true} // Enable search for interests
      />
    </div>
  );
}
