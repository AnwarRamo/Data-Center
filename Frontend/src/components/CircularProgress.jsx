import React from "react";

export default function CircularProgress({
  percentage,
  label,
  value,
  unit = "شخص",
  size = 120,
  strokeWidth = 8,
  primaryColor = "#3b82f6",
  secondaryColor = "#e5e7eb",
  showLabel = true,
  showValue = true,
  showPercentage = true,
  className = "",
}) {
  const radius = size / 2;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div
      className={`w-[${size}px] h-[${size}px] flex flex-col items-center justify-center relative ${className}`}
    >
      <svg
        height={size}
        width={size}
        viewBox={`0 0 ${size} ${size}`}
        className="-rotate-90"
      >
        <circle
          stroke={secondaryColor}
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke={primaryColor}
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="transition-all duration-1000 ease-out"
        />
      </svg>

      {/* Text Overlay using negative margin to overlap */}
      <div className="flex flex-col items-center justify-center -mt-[90px] pointer-events-none">
        {showPercentage && (
          <span className="text-lg font-bold text-[#1A1F33]">
            {percentage}%
          </span>
        )}
        {showLabel && showValue && (
          <span className="text-xs leading-4 mt-1 text-center text-gray-600">
            {label}:<br />
            {value} {unit}
          </span>
        )}
        {showLabel && !showValue && (
          <span className="text-xs leading-4 mt-1 text-center text-gray-600">
            {label}
          </span>
        )}
        {!showLabel && showValue && (
          <span className="text-xs leading-4 mt-1 text-center text-gray-600">
            {value} {unit}
          </span>
        )}
      </div>
    </div>
  );
}
