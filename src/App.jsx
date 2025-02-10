import React, { useState } from 'react';
import { FaStar, FaExternalLinkAlt, FaThumbtack, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { courses } from './data/courses';
import { departments } from './data/departments';
import { Dropdown } from './components/Dropdown';
import { highlightText, searchCourse } from './utils/search';
import DOMPurify from 'dompurify';
import FeaturedClass from './components/FeaturedClass';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('Fall 2025');
  const [pinnedCourses, setPinnedCourses] = useState([]);
  const [isPinnedPanelOpen, setIsPinnedPanelOpen] = useState(true);
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const semesters = [
    { term: 'Fall 2025', type: 'fall' },
    { term: 'Winter 2026', type: 'winter' },
    { term: 'Spring 2026', type: 'spring' },
    { term: 'Fall 2026', type: 'fall' }
  ];
  
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
    return courses
      .filter(course => {
        // Search term filter
        const searchResult = searchTerm ? searchCourse(course, searchTerm) : { match: true };
        if (!searchResult.match) return false;
  
        // Semester filter
        console.log(course.semesters);
        if (!course.semesters.includes(selectedSemester)) return false;
  
        // Department filter
        if (selectedDepartments.length > 0 && 
            !selectedDepartments.includes(course.department)) return false;
  
        // Days filter
        if (selectedDays.length > 0 && 
            !selectedDays.some(day => course.days.includes(day))) return false;
  
        // Type filter
        if (selectedTypes.length > 0 && 
            !selectedTypes.includes(course.type)) return false;
  
        // Interests filter
        if (selectedInterests.length > 0 && 
            !course.interests.some(interest => selectedInterests.includes(interest))) return false;
  
        return true;
      })
      .sort((a, b) => {
        if (searchTerm) {
          const scoreA = searchCourse(a, searchTerm).score;
          const scoreB = searchCourse(b, searchTerm).score;
          return scoreB - scoreA;
        }
        return a.code.localeCompare(b.code);
      });
  };

  const renderHighlightedText = (text) => {
    if (!searchTerm) return text;
    const highlighted = highlightText(text, searchTerm);
    return <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(highlighted) }} />;
  };

  const CourseCard = ({ course, isPinned, showPin = true }) => (
    <div 
      className={`course-card ${isPinned ? 'border-2 border-blue-600' : ''}`}
      onClick={() => setSelectedCourse(course)}
    >
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
        <div className="filters-header">
          <h2 className="filters-title">Filters</h2>
          <div className="course-count text-sm text-gray-600">
            Displaying {getFilteredAndSortedCourses().length} of {courses.length} courses
          </div>
        </div>

        <div className="filter-section">
          <h3>Semesters</h3>
          <div className="semester-filters">
            {semesters.map(({ term, type }) => (
              <button
                key={term}
                className={`semester-pill ${type} ${selectedSemester === term ? 'active' : ''}`}
                onClick={() => setSelectedSemester(term)}
              >
                {term}
              </button>
            ))}
          </div>
        </div>

          <div className="filter-section">
          <Dropdown
            title="Department"
            options={departments}
            onChange={setSelectedDepartments}
          />
          </div>

          <div className="filter-section">
            <h3>Days Taught</h3>
            <div className="days-group">
              <div className="days-boxes">
                {['M', 'T', 'W', 'TH', 'F'].map(day => (
                  <div key={day} className="day-item">
                    <input 
                      type="checkbox"
                      id={`day-${day}`}
                      checked={selectedDays.includes(day)}
                      onChange={(e) => {
                        setSelectedDays(prev => 
                          e.target.checked 
                            ? [...prev, day]
                            : prev.filter(d => d !== day)
                        );
                      }}
                    />
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
                  <input 
                    type="checkbox"
                    checked={selectedTypes.includes(type)}
                    onChange={(e) => {
                      setSelectedTypes(prev => 
                        e.target.checked 
                          ? [...prev, type]
                          : prev.filter(t => t !== type)
                      );
                    }}
                  /> {type}
                </label>
              ))}
            </div>
          </div>

          <div className="filter-section">
          <Dropdown
            title="Interests"
            options={interests}
            onChange={setSelectedInterests}
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

          <FeaturedClass 
            selectedCourse={selectedCourse}
            onClose={() => setSelectedCourse(null)}
          />

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