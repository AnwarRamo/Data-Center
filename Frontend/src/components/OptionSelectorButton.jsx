import React from 'react';

export default function OptionSelectorButton({ label, icon, selected, onClick, className = '' }) {
    return (
        <button
            onClick={onClick}
            className={`w-40 h-24 text-center rounded-lg border-2 transition-all duration-200 transform flex flex-col items-center justify-center gap-1 text-xs font-medium bg-white
                ${selected
                    ? 'border-[#A2FCE7] bg-[#A2FCE7]/20 text-[#1b4941] shadow-md scale-105'
                    : 'border-[#999999] text-gray-700 hover:border-[#A2FCE7] hover:bg-[#A2FCE7]/20 hover:scale-105 hover:shadow-sm'}
                active:scale-95 active:shadow-inner ${className}`}
        >
            {icon}
            <span>{label}</span>
        </button>
    );
} 