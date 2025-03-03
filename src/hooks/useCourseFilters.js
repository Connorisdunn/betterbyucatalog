// hooks/useCourseFilters.js
import { useState, useMemo } from 'react';
import { searchCourse } from '../utils/search';
import { courses } from '../data/courses';

export function useCourseFilters() {
  const [filters, setFilters] = useState({
    searchTerm: '',
    semester: 'Fall 2025',
    departments: [],
    days: [],
    types: [],
    interests: [],
    sortBy: 'code', // Default sort by course code
    sortOrder: 'asc' // Default ascending order
  });

  const filteredCourses = useMemo(() => {
    return courses
      .filter(course => {
        const searchResult = filters.searchTerm ? searchCourse(course, filters.searchTerm) : { match: true };
        if (!searchResult.match) return false;
        if (!course.semesters.includes(filters.semester)) return false;
        if (filters.departments.length > 0 && !filters.departments.includes(course.department)) return false;
        if (filters.days.length > 0 && !filters.days.some(day => course.days.includes(day))) return false;
        if (filters.types.length > 0 && !filters.types.includes(course.type)) return false;
        if (filters.interests.length > 0 && !course.interests.some(interest => filters.interests.includes(interest))) return false;
        return true;
      })
      .sort((a, b) => {
        // If search term exists, sort by search score first
        if (filters.searchTerm) {
          const scoreA = searchCourse(a, filters.searchTerm).score;
          const scoreB = searchCourse(b, filters.searchTerm).score;
          if (scoreA !== scoreB) {
            return scoreB - scoreA;
          }
        }
        
        // Then apply user-selected sorting
        const sortOrder = filters.sortOrder === 'asc' ? 1 : -1;
        
        switch (filters.sortBy) {
          case 'name':
            return sortOrder * a.name.localeCompare(b.name);
          case 'code':
            return sortOrder * a.code.localeCompare(b.code);
          case 'credits':
            return sortOrder * (a.credits - b.credits);
          default:
            return sortOrder * a.code.localeCompare(b.code);
        }
      });
  }, [filters]);

  return { filters, setFilters, filteredCourses };
}