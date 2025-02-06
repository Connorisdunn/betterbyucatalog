// src/App.jsx
import React, { useState } from 'react';
import { FaStar, FaExternalLinkAlt } from 'react-icons/fa';
import { courses } from './data/courses';
import { departments } from './data/departments';
import { Dropdown } from './components/Dropdown';
import { highlightText, searchCourse } from './utils/search';
import DOMPurify from 'dompurify';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSemester, setSelectedSemester] = useState("Fall '25");

  const semesters = ["Fall '25", "Winter '25", "Fall '26", "Winter '26"];
  const interests = ['Python', 'Calc', 'React', 'Java', 'R', 'HTML', 'JavaScript', 'C++'];

  const renderStars = (difficulty) => {
    return [...Array(difficulty)].map((_, index) => (
      <FaStar key={index} />
    ));
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

  const renderHighlightedText = (text, type) => {
    if (!searchTerm) return text;
    const highlighted = highlightText(text, searchTerm);
    // Sanitize the HTML to prevent XSS attacks
    return <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(highlighted) }} />;
  };

  return (
    <>
      <header className="header">
        <h1>BYU Course Catalog</h1>
      </header>

      <div className="container">
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
              <div key={course.id} className="course-card">
              <div className="card-header">
                <div className="title-section">
                  <span className="course-title">
                    {renderHighlightedText(course.code)}
                  </span>
                  <span className="stars">
                    {renderStars(course.difficulty)}
                  </span>
                </div>
                <span className="credit-hours">{course.credits} Credits</span>
              </div>
              <p className="description">
                {renderHighlightedText(course.description)}
              </p>
            </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
