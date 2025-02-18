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
          const columnCount = Math.max(1, Math.floor(width / CARD_MIN_WIDTH));
          const itemWidth = width / columnCount;
          const rowHeight = 180;

          return (
            <List
              height={height}
              width={width}
              itemCount={Math.ceil(courses.length / columnCount)}
              itemSize={rowHeight}
              overscanCount={3}
            >
              {({ index, style }) => {
                const items = [];
                const fromIndex = index * columnCount;
                const toIndex = Math.min(fromIndex + columnCount, courses.length);
                
                for (let i = fromIndex; i < toIndex; i++) {
                  items.push(
                    <div key={courses[i].id} style={{ width: itemWidth }}>
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
                  <div style={style} className="flex justify-start gap-6 px-4">
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