// src/utils/search.js
export function highlightText(text, searchTerm) {
    // A simple implementation that wraps matching text in a <mark> tag
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }
  
  export function searchCourse(course, searchTerm) {
    // Check if the search term is present in the course code or description
    const lowerTerm = searchTerm.toLowerCase();
    const inCode = course.code.toLowerCase().includes(lowerTerm);
    const inDescription = course.description.toLowerCase().includes(lowerTerm);
    return {
      match: inCode || inDescription,
      score: (inCode ? 1 : 0) + (inDescription ? 1 : 0)
    };
  }
  