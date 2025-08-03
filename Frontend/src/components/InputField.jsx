import PropTypes from "prop-types";

function InputField({ placeholder, value, onChange, icon, type = "text", disabled = false }) {
  return (
    <div className={`relative w-full ${disabled ? "pointer-events-none" : ""}`}>
      <div
        className={`flex items-center w-full p-2 rounded-lg border-2 border-gray-300 bg-white focus-within:border-[#5141FF] ${
          disabled ? "bg-gray-200 opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full text-right outline-none text-gray-700 placeholder-gray-400 px-2 py-1 ${
            disabled ? "cursor-not-allowed" : ""
          }`}
          dir="rtl"
          disabled={disabled}
        />
        <span className="mr-2 text-gray-400">{icon}</span>
      </div>
    </div>
  );
}

InputField.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  icon: PropTypes.node,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

export default InputField;