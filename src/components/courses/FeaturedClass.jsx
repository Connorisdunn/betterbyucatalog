// components/courses/FeaturedClass.jsx
import React, { useState, useEffect } from 'react';
import { FaTimes, FaThumbtack, FaChevronDown, FaChevronUp, FaListOl, FaCalendarAlt, FaClock, FaChalkboardTeacher, FaMapMarkerAlt, FaChair } from 'react-icons/fa';
import { CircularProgress } from '../common/CircularProgress';
import { DifficultyDial } from '../common/DifficultyDial';

export function FeaturedClass({ selectedCourse, onClose, togglePin, pinnedCourses, selectedSemester }) {
  const [isExpanded, setIsExpanded] = useState(true);
  useEffect(() => {
    if (selectedCourse) {
      setIsExpanded(true);
    }
  }, [selectedCourse]);
  
  if (!selectedCourse) {
    return (
      <div className="featured-class-placeholder" style={{ marginTop: 0 }}>
        <p>Click a class to see its details</p>
      </div>
    );
  }
  
  const isPinned = pinnedCourses?.some(course => course.id === selectedCourse.id);
  const renderTimeSlot = (timeSlot) => {
    return `${timeSlot.days.join('/')} ${timeSlot.startTime}-${timeSlot.endTime}`;
  };
  const getFilteredSections = () => {
    if (!selectedSemester) return Object.entries(selectedCourse.Sections_available);
    
    return Object.entries(selectedCourse.Sections_available)
      .filter(([_, section]) => section.Semester === selectedSemester);
  };
  
  return (
    <div className={`featured-class ${isExpanded ? 'expanded' : ''}`} style={{ marginTop: 0 }}>
      <div 
        className="featured-header"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="featured-title">
          <div className="title-content">
            <h2>{selectedCourse.code}: {selectedCourse.name}</h2>
            <div className="difficulty">
              <DifficultyDial difficulty={selectedCourse.difficulty} />
            </div>
          </div>
          <div className="credit-hours">
            {selectedCourse.credits} Credits
          </div>
          <span className="toggle-icon" title={isExpanded ? 'Collapse' : 'Expand'}>
            {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
          </span>
          <button 
            className="pin-button"
            onClick={(e) => {
              e.stopPropagation();
              togglePin(selectedCourse);
            }}
            title={isPinned ? 'Unpin course' : 'Pin course'}
          >
            <FaThumbtack className={isPinned ? 'text-blue-600' : 'text-gray-400'} />
          </button>
          <button 
            className="close-button" 
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            title="Close details"
          >
            <FaTimes />
          </button>
        </div>
      </div>
      {isExpanded && (
        <div className="featured-content">
          <p className="course-description">{selectedCourse.description}</p>
          <div className="course-meta">
            <span><strong>Type:</strong> {selectedCourse.type}</span>
            <span><strong>Department: </strong>{selectedCourse.department}</span>
          </div>
          <div className="sections-table">
            <table>
            <thead>
  <tr>
    <th className="table-header">
      <div className="flex items-center justify-center">
        <FaListOl className="mr-2" />
        <span>Section</span>
      </div>
    </th>
    <th className="table-header">
      <div className="flex items-center justify-center">
        <FaCalendarAlt className="mr-2" />
        <span>Semester</span>
      </div>
    </th>
    <th className="table-header">
      <div className="flex items-center justify-center">
        <FaClock className="mr-2" />
        <span>Time</span>
      </div>
    </th>
    <th className="table-header">
      <div className="flex items-center justify-center">
        <FaChalkboardTeacher className="mr-2" />
        <span>Professor</span>
      </div>
    </th>
    <th className="table-header">
      <div className="flex items-center justify-center">
        <FaMapMarkerAlt className="mr-2" />
        <span>Location</span>
      </div>
    </th>
    <th className="table-header">
      <div className="flex items-center justify-center">
        <FaChair className="mr-2" />
        <span>Seats Left</span>
      </div>
    </th>
  </tr>
</thead>


              <tbody className="table-body-small">
                {getFilteredSections().map(([sectionId, section]) => (
                  <tr key={sectionId}>
                    <td>{sectionId}</td>
                    <td>{section.Semester}</td>
                    <td>{renderTimeSlot(section.Time_slot)}</td>
                    <td>{section.Professor_name}</td>
                    <td>{section.Location}</td>
                    <td>
                      <CircularProgress
                        current={section.Remaining_Seats}
                        total={section.Total_Seats}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {getFilteredSections().length === 0 && (
              <p className="text-gray-500 text-center py-4">
                No sections available for {selectedSemester}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
