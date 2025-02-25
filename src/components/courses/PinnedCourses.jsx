// components/courses/PinnedCourses.jsx
import React from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { CourseCard } from './CourseCard';

export function PinnedCourses({ courses, isOpen, onToggle, togglePin, onSelect }) {
  return (
    <div className={`pinned-courses-wrapper ${isOpen ? 'open' : 'closed'}`}>
      <button 
        className="toggle-panel-button"
        onClick={() => onToggle(!isOpen)}
        title={isOpen ? 'Hide pinned courses' : 'Show pinned courses'}
      >
        {isOpen ? <FaChevronRight /> : <FaChevronLeft />}
      </button>
      <div className="pinned-courses">
        <h2 className="pinned-title">
          Pinned Courses
          {courses.length > 0 && <span className="pinned-count">({courses.length})</span>}
        </h2>
        <div className="pinned-list" style={{ 
          maxHeight: 'calc(100vh - 120px)', // Adjust this value based on your header height
          overflowY: 'auto',
          paddingRight: '8px' // Add some padding for the scrollbar
        }}>
          {courses.length === 0 ? (
            <p className="text-gray-500 text-center py-4">
              Pin courses to add them to this list
            </p>
          ) : (
            courses.map(course => (
              <CourseCard 
                key={course.id} 
                course={course}
                isPinned={true}
                showPin={true} // Allow unpinning
                togglePin={togglePin}
                onSelect={onSelect}
                hideDescription={true} // Hide description in pinned courses
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
