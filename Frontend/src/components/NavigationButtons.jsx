// src/components/NavigationButtons.jsx
export default function NavigationButtons({ onPrevious, onNext }) {
  return (
    <div className="flex justify-between mt-6">
      <button
        onClick={onPrevious}
        className="px-4 py-2 bg-gray-300 text-sm text-[#1A1F33] rounded hover:bg-gray-400"
      >
        السابق
      </button>
      <button
        onClick={onNext}
        className="px-4 py-2 bg-[#5141FF] text-white text-sm rounded hover:bg-blue-700"
      >
        التالي
      </button>
    </div>
  );
}
