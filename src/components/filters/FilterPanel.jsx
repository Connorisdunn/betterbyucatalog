// components/filters/FilterPanel.jsx
import React from 'react';
import { Dropdown } from '../common/Dropdown';
import { departments } from '../../data/departments';
import { interests } from '../../data/interests';
import { SemesterFilter } from './SemesterFilter';

export function FilterPanel({ filters, onFilterChange, filteredCount, totalCount }) {
  return (
    <div className="filters">
      <div className="filters-header">
        <h2 className="filters-title">Filters</h2>
        <div className="course-count text-sm text-gray-600">
          Displaying {filteredCount} of {totalCount} courses
        </div>
      </div>

      <SemesterFilter 
        selected={filters.semester}
        onChange={(semester) => onFilterChange({...filters, semester})}
      />

      <Dropdown
        title="Department"
        options={departments}
        selected={filters.departments}
        onChange={(departments) => onFilterChange({...filters, departments})}
      />

      <div className="filter-section">
        <h3>Days Taught</h3>
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
                  onFilterChange({...filters, days});
                }}
              />
              <label className="day-label" htmlFor={`day-${day}`}>{day}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h3>Type of Class</h3>
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
                  onFilterChange({...filters, types});
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
        onChange={(interests) => onFilterChange({...filters, interests})}
      />
    </div>
  );
}