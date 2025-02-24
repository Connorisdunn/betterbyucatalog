import React, { useState } from 'react';
import { useCourseFilters } from './hooks/useCourseFilters';
import { usePinnedCourses } from './hooks/usePinnedCourses';
import { FilterPanel } from './components/filters/FilterPanel';
import { SearchBar } from './components/filters/SearchBar';
import { CourseList } from './components/courses/CourseList';
import { FeaturedClass } from './components/courses/FeaturedClass';
import { PinnedCourses } from './components/courses/PinnedCourses';
import { courses } from './data/courses';

function App() {
  const { filters, setFilters, filteredCourses } = useCourseFilters();
  const { pinnedCourses, isPinnedPanelOpen, setIsPinnedPanelOpen, togglePin } = usePinnedCourses();
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Add handleFilterChange function to handle complete reset
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    // Clear search input if searchTerm is empty
    if (!newFilters.searchTerm) {
      const searchInput = document.querySelector('.search-bar');
      if (searchInput) searchInput.value = '';
    }
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="header-left">
            <h1 className="logo pb-0">BYU Course Catalog</h1>
          </div>
          <div className={'header-search'}>
            <SearchBar
              value={filters.searchTerm}
              onChange={(value) => setFilters({ ...filters, searchTerm: value })}
            />
          </div>
        </div>
      </header>
      <div className={`container ${isPinnedPanelOpen ? 'panel-open' : 'panel-closed'}`}>
        <FilterPanel 
          filters={filters} 
          onFilterChange={handleFilterChange}
          filteredCount={filteredCourses.length}
          totalCount={courses.length}
        />
        <main className="main-content">
          <FeaturedClass 
            selectedCourse={selectedCourse}
            onClose={() => setSelectedCourse(null)}
            togglePin={togglePin}
            pinnedCourses={pinnedCourses}
            selectedSemester={filters.semester}
          />
          <CourseList 
            courses={filteredCourses}
            pinnedCourses={pinnedCourses}
            togglePin={togglePin}
            onSelectCourse={setSelectedCourse}
            searchTerm={filters.searchTerm}
          />
        </main>
        <PinnedCourses 
          courses={pinnedCourses}
          isOpen={isPinnedPanelOpen}
          onToggle={setIsPinnedPanelOpen}
          togglePin={togglePin}
          onSelect={setSelectedCourse}
        />
      </div>
    </>
  );
}

export default App;
