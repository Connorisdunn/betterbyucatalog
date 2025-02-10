import React, { useState } from 'react';
import { FaStar, FaTimes } from 'react-icons/fa';

// New circular progress component
const CircularProgress = ({ current, total }) => {
  const percentage = ((total - current) / total) * 100;
  const strokeDasharray = `${percentage} ${100 - percentage}`;
  const color = percentage > 75 ? '#ef4444' : percentage > 50 ? '#f59e0b' : '#22c55e';

  return (
    <div className="progress-wrapper" title={`${current}/${total} seats remaining`}>
      <svg width="24" height="24" viewBox="0 0 24 24">
        <circle
          cx="12"
          cy="12"
          r="10"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="2"
        />
        <circle
          cx="12"
          cy="12"
          r="10"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeDasharray={strokeDasharray}
          strokeDashoffset="25"
          transform="rotate(-90 12 12)"
        />
        <text
          x="12"
          y="12"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="8"
          fill="#4b5563"
        >
          {current}
        </text>
      </svg>
    </div>
  );
};

function FeaturedClass({ selectedCourse, onClose }) {
  const [isExpanded, setIsExpanded] = useState(true);

  if (!selectedCourse) {
    return (
      <div className="featured-class-placeholder">
        <p>Click a class to see its details</p>
      </div>
    );
  }

  const renderTimeSlot = (timeSlot) => {
    return `${timeSlot.days.join('/')} ${timeSlot.startTime}-${timeSlot.endTime}`;
  };

  return (
    <div className={`featured-class ${isExpanded ? 'expanded' : ''}`}>
      <div 
        className="featured-header"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="featured-title">
          <div className="title-content">
            <h2>{selectedCourse.code}: {selectedCourse.name}</h2>
            <div className="difficulty">
              {[...Array(selectedCourse.difficulty)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
            </div>
          </div>
          <div className="credits-badge">
            {selectedCourse.credits} Credits
          </div>
        </div>
        <button className="close-button" onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}>
          <FaTimes />
        </button>
      </div>
      {isExpanded && (
        <div className="featured-content">
          <p className="course-description">{selectedCourse.description}</p>
          <div className="course-meta">
            <span>Type: {selectedCourse.type}</span>
            <span>Department: {selectedCourse.department}</span>
          </div>
          <h3>Available Sections</h3>
          <div className="sections-table">
            <table>
              <thead>
                <tr>
                  <th>Section</th>
                  <th>Semester</th>
                  <th>Time</th>
                  <th>Professor</th>
                  <th>Location</th>
                  <th>Seats</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(selectedCourse.Sections_available).map(([sectionId, section]) => (
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
          </div>
        </div>
      )}
    </div>
  );
}

export default FeaturedClass;