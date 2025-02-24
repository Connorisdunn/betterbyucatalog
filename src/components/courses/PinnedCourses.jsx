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
        <div className="pinned-list">
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
                showPin={true} // Changed from false to true to show pin button
                togglePin={togglePin}
                onSelect={onSelect}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
