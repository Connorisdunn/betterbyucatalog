// components/courses/CourseList.jsx
import React from 'react';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { CourseCard } from './CourseCard';

export function CourseList({ 
  courses, 
  pinnedCourses, 
  togglePin, 
  onSelectCourse,
  searchTerm 
}) {
  return (
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
          const rowHeight = 200; // Increased for better mobile display

          return (
            <List
              height={height}
              width={width}
              itemCount={Math.ceil(courses.length / columnCount)}
              itemSize={rowHeight}
              overscanCount={2}
            >
              {({ index, style }) => {
                const items = [];
                const fromIndex = index * columnCount;
                const toIndex = Math.min(fromIndex + columnCount, courses.length);
                
                for (let i = fromIndex; i < toIndex; i++) {
                  const isLastInRow = i === toIndex - 1;
                  items.push(
                    <div 
                      key={courses[i].id} 
                      style={{ 
                        width: itemWidth,
                        marginRight: isLastInRow ? 0 : GAP
                      }}
                    >
                      <CourseCard
                        course={courses[i]}
                        isPinned={pinnedCourses.some(c => c.id === courses[i].id)}
                        showPin={true}
                        togglePin={togglePin}
                        searchTerm={searchTerm}
                        onSelect={onSelectCourse}
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
  );
}