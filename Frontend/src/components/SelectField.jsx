import PropTypes from "prop-types";

function SelectField({ value, onChange, options, placeholder, icon, disabled = false }) {
  return (
    <div className={`relative w-full ${disabled ? "pointer-events-none" : ""}`}>
      <div
        className={`flex items-center w-full p-2 rounded-lg border-2 border-gray-300 bg-white focus-within:border-[#5141FF] ${
          disabled ? "bg-gray-200 opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <select
          value={value}
          onChange={onChange}
          className={`w-full text-right outline-none text-gray-700 px-2 py-1 bg-white appearance-none ${
            disabled ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          dir="rtl"
          disabled={disabled}
        >
          <option value="">{placeholder}</option>
          {options.map((opt, i) => (
            <option key={i} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <span className="mr-2 text-gray-400">{icon}</span>
      </div>
    </div>
  );
}

SelectField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  placeholder: PropTypes.string,
  icon: PropTypes.node,
  disabled: PropTypes.bool,
};

export default SelectField;