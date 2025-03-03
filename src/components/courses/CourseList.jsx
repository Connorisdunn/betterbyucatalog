// components/courses/CourseList.jsx
import React, { useState, useEffect } from 'react';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { CourseCard } from './CourseCard';
import { Pagination } from './Pagination';

export function CourseList({ 
  courses, 
  pinnedCourses, 
  togglePin, 
  onSelectCourse,
  searchTerm 
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(0); // 0 means show all
  const [paginatedCourses, setPaginatedCourses] = useState(courses);

  useEffect(() => {
    // Reset to page 1 when courses change due to filtering
    setCurrentPage(1);
    updatePaginatedCourses(courses, 1, pageSize);
  }, [courses]);

  useEffect(() => {
    updatePaginatedCourses(courses, currentPage, pageSize);
  }, [currentPage, pageSize]);

  const updatePaginatedCourses = (allCourses, page, size) => {
    if (size === 0) {
      // Show all courses
      setPaginatedCourses(allCourses);
    } else {
      // Calculate start and end indices for pagination
      const startIndex = (page - 1) * size;
      const endIndex = Math.min(startIndex + size, allCourses.length);
      setPaginatedCourses(allCourses.slice(startIndex, endIndex));
    }
  };

  const getTotalPages = () => {
    if (pageSize === 0) return 1;
    return Math.ceil(courses.length / pageSize);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (size) => {
    setPageSize(size);
    setCurrentPage(1); // Reset to first page when changing page size
  };

  return (
    <div className="course-list-container">
      <div className="course-grid">
        <AutoSizer>
          {({ height, width }) => {
            const CARD_MIN_WIDTH = 300;
            const CARD_PADDING = 24; // Total horizontal padding per card
            const GAP = 24; // Gap between cards
            
            // Calculate how many cards can fit
            const availableWidth = width - GAP; // Account for container padding
            const columnCount = Math.max(1, Math.floor(availableWidth / (CARD_MIN_WIDTH + CARD_PADDING)));
            const itemWidth = (availableWidth - (columnCount - 1) * GAP) / columnCount;
            
            // Adjust row height based on content
            const rowHeight = 200;

            return (
              <List
                height={height}
                width={width}
                itemCount={Math.ceil(paginatedCourses.length / columnCount)}
                itemSize={rowHeight}
                overscanCount={3}
              >
                {({ index, style }) => {
                  const items = [];
                  const fromIndex = index * columnCount;
                  const toIndex = Math.min(fromIndex + columnCount, paginatedCourses.length);
                  
                  for (let i = fromIndex; i < toIndex; i++) {
                    const isLastInRow = i === toIndex - 1;
                    items.push(
                      <div 
                        key={paginatedCourses[i].id} 
                        style={{ 
                          width: itemWidth,
                          marginRight: isLastInRow ? 0 : GAP,
                          overflow: 'hidden'
                        }}
                      >
                        <CourseCard
                          course={paginatedCourses[i]}
                          isPinned={pinnedCourses.some(c => c.id === paginatedCourses[i].id)}
                          showPin={true}
                          togglePin={togglePin}
                          searchTerm={searchTerm}
                          onSelect={onSelectCourse}
                          hideDescription={false} // Ensure descriptions are shown in the main section
                        />
                      </div>
                    );
                  }
                  
                  return (
                    <div style={{
                      ...style,
                      display: 'flex',
                      alignItems: 'flex-start',
                      paddingLeft: GAP / 2,
                      paddingRight: GAP / 2
                    }}>
                      {items}
                    </div>
                  );
                }}
              </List>
            );
          }}
        </AutoSizer>
      </div>
      <Pagination 
        currentPage={currentPage}
        totalPages={getTotalPages()}
        pageSize={pageSize}
        totalItems={courses.length}
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
      />
    </div>
  );
}