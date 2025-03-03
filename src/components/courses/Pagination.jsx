// components/courses/Pagination.jsx
import React from 'react';

export function Pagination({ 
  currentPage, 
  totalPages, 
  pageSize, 
  totalItems,
  onPageChange, 
  onPageSizeChange 
}) {
  const pageSizeOptions = [10, 20, 50, 100, 'All'];

  const handlePageSizeChange = (e) => {
    const newSize = e.target.value === 'All' ? 0 : parseInt(e.target.value);
    onPageSizeChange(newSize);
  };

  return (
    <div className="pagination-container">
      <div className="pagination-controls">
        <button 
          className="pagination-button" 
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
        >
          &laquo;
        </button>
        <button 
          className="pagination-button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lsaquo;
        </button>
        
        <span className="pagination-info">
          Page {currentPage} of {totalPages}
        </span>
        
        <button 
          className="pagination-button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &rsaquo;
        </button>
        <button 
          className="pagination-button"
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          &raquo;
        </button>
      </div>
      
      <div className="pagination-size-selector">
        <span>Show:</span>
        <select 
          value={pageSize === 0 ? 'All' : pageSize}
          onChange={handlePageSizeChange}
          className="page-size-select"
        >
          {pageSizeOptions.map(size => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
        <span>courses per page</span>
      </div>
      
      <div className="pagination-total">
        Showing {totalItems} courses
      </div>
    </div>
  );
}