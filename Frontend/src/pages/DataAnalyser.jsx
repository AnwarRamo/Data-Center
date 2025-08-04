import { Link } from "react-router-dom";
import health from "../assets/images/medical.png";
import education from "../assets/images/Education.png";
import financial from "../assets/images/financial.png";
import population from "../assets/images/population.png";
import DashboardHeader from "../components/DashboardHeader";

export default function DataAnalayser() {
  const icons = [
    {
      label: "التوزع السكاني",
      icon: population,
      path: "population",
      color: "bg-blue-50 border-blue-200",
    },
    {
      label: "الصحة",
      icon: health,
      path: "health",
      color: "bg-green-50 border-green-200",
    },
    {
      label: "الوضع المادي",
      icon: financial,
      path: "financial",
      color: "bg-purple-50 border-purple-200",
    },
    {
      label: "التعليم",
      icon: education,
      path: "education",
      color: "bg-orange-50 border-orange-200",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col gap-6">
      <DashboardHeader />

      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#1A1F33] mb-4 tracking-wide">
          تحليل البيانات
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          اختر نوع التحليل الذي تريد عرضه من القائمة أدناه
        </p>
      </div>

      {/* Analyzer Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl mx-auto">
        {icons.map((item, index) => (
          <Link to={`/analyser/${item.path}`} key={index}>
            <div
              className={`bg-white shadow-md rounded-xl p-8 flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 ${item.color}`}
            >
              <div className="w-20 h-20 mb-6 flex items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-16 h-16 object-contain filter drop-shadow-md"
                />
              </div>
              <h3 className="text-xl font-bold text-[#1A1F33] text-center mb-2">
                {item.label}
              </h3>
              <div className="w-12 h-1 bg-[#1A1F33] rounded-full mt-2"></div>
            </div>
          </Link>
        ))}
      </div>

      {/* Summary Section */}
      <div className="mt-16 w-full max-w-4xl mx-auto">
        <div className="bg-white shadow-md rounded-lg p-8">
          <h3 className="text-2xl font-bold text-[#1A1F33] mb-6 text-center">
            نظرة عامة على التحليل
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <div className="text-3xl font-bold text-[#1A1F33]">4</div>
              <div className="text-sm text-gray-600">أنواع التحليل</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-xl">
              <div className="text-3xl font-bold text-[#1A1F33]">100%</div>
              <div className="text-sm text-gray-600">دقة البيانات</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-xl">
              <div className="text-3xl font-bold text-[#1A1F33]">24/7</div>
              <div className="text-sm text-gray-600">متاح دائماً</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-xl">
              <div className="text-3xl font-bold text-[#1A1F33]">✓</div>
              <div className="text-sm text-gray-600">محدث</div>
            </div>
          </div>
        </div>
      </div>

      {/* Instructions */}
     
    </div>
  );
}
