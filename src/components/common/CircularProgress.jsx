// components/common/CircularProgress.jsx
import React from 'react';

export function CircularProgress({ current, total }) {
  const percentage = ((total - current) / total) * 100;
  const strokeDasharray = `${percentage} ${100 - percentage}`;
  const color = percentage > 75 ? '#ef4444' : percentage > 50 ? '#f59e0b' : '#22c55e';

  return (
    <div className="progress-wrapper" title={`${current}/${total} seats remaining`}>
      <svg width="24" height="24" viewBox="0 0 24 24">
        <circle
          cx="16"
          cy="16"
          r="12"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="2"
        />
        <circle
          cx="16"
          cy="16"
          r="13"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeDasharray={strokeDasharray}
          strokeDashoffset="25"
          transform="rotate(-90 16 16)"
        />
        <text
          x="16"
          y="16"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="8"
          fill="#4b5563"
        >
          {current}/{total}
        </text>
      </svg>
    </div>
  );
}