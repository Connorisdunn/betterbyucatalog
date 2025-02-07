import React, { useState } from 'react';
import { FaStar, FaExternalLinkAlt, FaThumbtack, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { courses } from './data/courses';
import { departments } from './data/departments';
import { Dropdown } from './components/Dropdown';
import { highlightText, searchCourse } from './utils/search';
import DOMPurify from 'dompurify';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSemester, setSelectedSemester] = useState("Fall '25");
  const [pinnedCourses, setPinnedCourses] = useState([]);
  const [isPinnedPanelOpen, setIsPinnedPanelOpen] = useState(true);

  const semesters = ["Fall '25", "Winter '25", "Fall '26", "Winter '26"];
  const interests = ['Python', 'Calc', 'React', 'Java', 'R', 'HTML', 'JavaScript', 'C++'];

  const renderStars = (difficulty) => {
    return [...Array(difficulty)].map((_, index) => (
      <FaStar key={index} />
    ));
  };

  const togglePin = (course) => {
    setPinnedCourses(prev => 
      prev.some(c => c.id === course.id)
        ? prev.filter(c => c.id !== course.id)
        : [...prev, course]
    );
    // Open the panel when a course is pinned
    if (!isPinnedPanelOpen) {
      setIsPinnedPanelOpen(true);
    }
  };

  const getFilteredAndSortedCourses = () => {
    if (!searchTerm) return courses;

    return courses
      .map(course => ({
        ...course,
        searchResult: searchCourse(course, searchTerm)
      }))
      .filter(course => course.searchResult.match)
      .sort((a, b) => b.searchResult.score - a.searchResult.score);
  };

  const renderHighlightedText = (text) => {
    if (!searchTerm) return text;
    const highlighted = highlightText(text, searchTerm);
    return <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(highlighted) }} />;
  };

  const CourseCard = ({ course, isPinned, showPin = true }) => (
    <div className={`course-card ${isPinned ? 'border-2 border-blue-600' : ''}`}>
      <div className="card-header">
        <div className="title-section">
          <span className="course-title">
            {renderHighlightedText(course.code)}
          </span>
          <span className="stars">
            {renderStars(course.difficulty)}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="credit-hours">{course.credits} Credits</span>
          {showPin && (
            <button 
              onClick={() => togglePin(course)}
              className={`pin-button ${isPinned ? 'text-blue-600' : 'text-gray-400'}`}
              title={isPinned ? 'Unpin course' : 'Pin course'}
            >
              <FaThumbtack />
            </button>
          )}
        </div>
      </div>
      <p className="description">
        {renderHighlightedText(course.description)}
      </p>
    </div>
  );

  return (
    <>
      <header className="header">
        <h1>BYU Course Catalog</h1>
      </header>

      <div className={`container ${isPinnedPanelOpen ? 'panel-open' : 'panel-closed'}`}>
        <div className="filters">
          <h2 className="filters-title">Filters</h2>

          <div className="filter-section">
            <h3>Sections Offered</h3>
            <div className="semester-filters">
              {semesters.map(semester => (
                <button
                  key={semester}
                  className={`semester-pill ${selectedSemester === semester ? 'active' : ''}`}
                  onClick={() => setSelectedSemester(semester)}
                >
                  {semester}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <Dropdown
              title="Department"
              options={departments}
              onChange={(selected) => console.log('Selected departments:', selected)}
            />
          </div>

          <div className="filter-section">
            <h3>Days Taught</h3>
            <div className="days-group">
              <div className="days-boxes">
                {['M', 'T', 'W', 'TH', 'F'].map(day => (
                  <div key={day} className="day-item">
                    <input type="checkbox" id={`day-${day}`} />
                    <label className="day-label" htmlFor={`day-${day}`}>{day}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="filter-section">
            <h3>Type of Class</h3>
            <div className="checkbox-group">
              {['Online', 'In-Person', 'Hybrid'].map(type => (
                <label key={type} className="checkbox-label">
                  <input type="checkbox" /> {type}
                </label>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <Dropdown
              title="Interests"
              options={interests}
              onChange={(selected) => console.log('Selected interests:', selected)}
            />
          </div>
        </div>

        <div className="main-content">
          <div className="search-container">
            <input
              type="text"
              className="search-bar"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="mymap-button">
              <FaExternalLinkAlt />
              Link to MyMap
            </button>
          </div>

          <div className="course-grid">
            {getFilteredAndSortedCourses().map(course => (
              <CourseCard 
                key={course.id} 
                course={course}
                isPinned={pinnedCourses.some(c => c.id === course.id)}
              />
            ))}
          </div>
        </div>

        <div className={`pinned-courses-wrapper ${isPinnedPanelOpen ? 'open' : 'closed'}`}>
          <button 
            className="toggle-panel-button"
            onClick={() => setIsPinnedPanelOpen(!isPinnedPanelOpen)}
            title={isPinnedPanelOpen ? 'Hide pinned courses' : 'Show pinned courses'}
          >
            {isPinnedPanelOpen ? <FaChevronRight /> : <FaChevronLeft />}
          </button>
          <div className="pinned-courses">
            <h2 className="pinned-title">
              Pinned Courses
              {pinnedCourses.length > 0 && <span className="pinned-count">({pinnedCourses.length})</span>}
            </h2>
            <div className="pinned-list">
              {pinnedCourses.length === 0 ? (
                <p className="text-gray-500 text-center py-4">
                  Pin courses to add them to this list
                </p>
              ) : (
                pinnedCourses.map(course => (
                  <CourseCard 
                    key={course.id} 
                    course={course}
                    isPinned={true}
                    showPin={false}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;