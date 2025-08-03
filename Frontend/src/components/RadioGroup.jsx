// components/RadioGrid.jsx
 const RadioGrid = ({ label, options, selected, onChange, disabled, columns }) => (
  <div className="mb-4">
    {label && <label className="block text-sm font-medium text-[#1A1F33] mb-2">{label}</label>}
    <div className={`grid grid-cols-${columns} gap-2`}>
      {options.map((option, i) => (
        <label key={i} className={`flex items-center gap-2 ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}>
          <input
            type="radio"
            className="w-4 h-4 text-[#1A1F33] border-gray-300 focus:ring-2 focus:ring-[#1A1F33] focus:border-transparent"
            name={label?.replace(/ /g, '_')}
            value={option}
            checked={selected === option}
            onChange={() => onChange(option)}
            disabled={disabled}
          />
          <span className="text-sm">{option}</span>
        </label>
      ))}
    </div>
  </div>
);
export default RadioGrid