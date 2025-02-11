// utils/search.js
export function highlightText(text, searchTerm) {
  if (!searchTerm) return text;
  const regex = new RegExp(`(${searchTerm})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
}

export function searchCourse(course, searchTerm) {
  const searchLower = searchTerm.toLowerCase();
  const fields = [
    course.code,
    course.name,
    course.description,
    course.department
  ];
  
  let maxScore = 0;
  let hasMatch = false;

  fields.forEach(field => {
    if (!field) return;
    const fieldLower = field.toLowerCase();
    if (fieldLower.includes(searchLower)) {
      hasMatch = true;
      const score = fieldLower === searchLower ? 3 :
                    fieldLower.startsWith(searchLower) ? 2 : 1;
      maxScore = Math.max(maxScore, score);
    }
  });

  return {
    match: hasMatch,
    score: maxScore
  };
}