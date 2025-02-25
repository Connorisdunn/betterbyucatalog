// components/courses/CourseCard.jsx
import React from 'react';
import { FaThumbtack } from 'react-icons/fa';
import DOMPurify from 'dompurify';
import { highlightText } from '../../utils/search';
import { DifficultyDial } from '../common/DifficultyDial';

export const CourseCard = React.memo(({ 
    course, 
    isPinned, 
    showPin = true, 
    togglePin,
    searchTerm,
    onSelect,
    hideDescription = false // Default to false
}) => {
    
    const renderHighlightedText = (text) => {
      if (!searchTerm) return text;
      const highlighted = highlightText(text, searchTerm);
      return <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(highlighted) }} />;
    };
  
    return (
      <div 
        className={`course-card ${isPinned ? 'border-2 border-blue-600' : ''}`}
        onClick={() => onSelect(course)}
      >  
        <div className="card-header">
          <div className="header-content">
            <span className="course-code">
              {renderHighlightedText(course.code)}
            </span>
            <span className="difficulty-indicator">
              <DifficultyDial difficulty={course.difficulty} />
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="credit-hours">{course.credits} Credits</span>
            {showPin && (
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  togglePin(course);
                }}
                className={`pin-button ${isPinned ? 'text-blue-600' : 'text-gray-400'}`}
                title={isPinned ? 'Unpin course' : 'Pin course'}
              >
                <FaThumbtack />
              </button>
            )}
          </div>
        </div>
        <h3 className="course-title">
          {renderHighlightedText(course.name)}
        </h3>

        {/* Conditionally render description */}
        {!hideDescription && (
          <p className="description truncate">
            {renderHighlightedText(course.description)}
          </p>
        )}
      </div>
    );
});
