// hooks/usePinnedCourses.js
import { useState, useCallback } from 'react';

export function usePinnedCourses() {
  const [pinnedCourses, setPinnedCourses] = useState([]);
  const [isPinnedPanelOpen, setIsPinnedPanelOpen] = useState(true);

  const togglePin = useCallback((course) => {
    setPinnedCourses(prev => 
      prev.some(c => c.id === course.id)
        ? prev.filter(c => c.id !== course.id)
        : [...prev, course]
    );
    if (!isPinnedPanelOpen) setIsPinnedPanelOpen(true);
  }, [isPinnedPanelOpen]);

  return {
    pinnedCourses,
    isPinnedPanelOpen,
    setIsPinnedPanelOpen,
    togglePin
  };
}