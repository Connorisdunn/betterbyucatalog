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

  return (
    <>
      <header className="header">
        <h1 className="logo">BYU Course Catalog</h1>
        <div className="header-search">
          <SearchBar
            value={filters.searchTerm}
            onChange={(value) => setFilters({ ...filters, searchTerm: value })}
          />
        </div>
        <div className="header-spacer"></div>
      </header>
      <div className={`container ${isPinnedPanelOpen ? 'panel-open' : 'panel-closed'}`}>
        <FilterPanel 
          filters={filters} 
          onFilterChange={setFilters}
          filteredCount={filteredCourses.length}
          totalCount={courses.length}
        />
        <main className="main-content">
          <FeaturedClass 
            selectedCourse={selectedCourse}
            onClose={() => setSelectedCourse(null)}
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
        />
      </div>
    </>
  );
}

export default App;
