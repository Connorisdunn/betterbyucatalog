// components/common/DifficultyDial.jsx
import React from 'react';

export function DifficultyDial({ difficulty }) {
  // Determine which dial to show based on difficulty level
  const getDifficultyType = (level) => {
    if (level <= 2) return "easy";
    if (level <= 4) return "medium";
    return "hard";
  };

  // Get tooltip text based on difficulty type
  const getTooltipText = (type) => {
    if (type === "easy") return "Light courseload";
    if (type === "medium") return "Typical courseload";
    return "Heavy courseload";
  };

  const type = getDifficultyType(difficulty);
  const tooltipText = getTooltipText(type);
  
  // Set colors and rotation based on difficulty type
  const colors = {
    easy: "#4CAF50",
    medium: "#FFC107",
    hard: "#F44336"
  };
  
  const rotations = {
    easy: -45,
    medium: 0,
    hard: 45
  };

  const color = colors[type];
  const rotation = rotations[type];
  
  // Wrapping SVG in a div with tooltip attributes
  return (
    <div 
      className="difficulty-container mb-[-20px]" 
      title={`Difficulty: ${tooltipText}`}
      style={{ display: 'inline-block' }}
    >
      <svg 
        width="72" 
        height="72" 
        viewBox="0 0 100 100" 
        xmlns="http://www.w3.org/2000/svg" 
        className="difficulty-dial"
        role="img"
        aria-label={`Difficulty: ${tooltipText}`}
        title={`Difficulty: ${tooltipText}`}
      >
        {/* Added a group with transform to move everything up */}
        <g transform="translate(0, -30)">
          {/* Gauge Track */}
          <path d="M 20 70 A 35 35 0 0 1 80 70" fill="none" stroke={`rgba(${type === 'easy' ? '76, 175, 80' : type === 'medium' ? '255, 193, 7' : '244, 67, 54'}, 0.2)`} strokeWidth="8" strokeLinecap="round" />
          {/* Needle */}
          <g transform={`rotate(${rotation}, 50, 70)`}>
            <path d="M 50 70 
                     C 48 70, 46 69, 46 67 
                     L 45 55 
                     C 45 53, 47 51, 50 50 
                     C 53 51, 55 53, 55 55 
                     L 54 67 
                     C 54 69, 52 70, 50 70 Z" 
                  fill={color} />
          </g>
          <circle cx="50" cy="70" r="4" fill={color} />
          {/* Text */}
          <text x="50" y="88" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill={color}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </text>
        </g>
      </svg>
    </div>
  );
}