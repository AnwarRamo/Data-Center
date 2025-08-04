import React, { useState } from "react";
import { Link } from "react-router-dom";
import DashboardHeader from "../components/DashboardHeader";
import CircularProgress from "../components/CircularProgress";
import { IoArrowBack } from "react-icons/io5";

export default function HealthAnalyser() {
  // Better data structure that's more database-friendly
  const [healthData] = useState({
    category: "health",
    title: "تحليل الحالة الصحية",
    description: "إحصائيات الحالة الصحية للمجتمع",
    totalCases: 1720,
    lastUpdated: "2024-01-15",
    data: [
      {
        id: "chronic_diseases",
        category: "أمراض مزمنة",
        count: 120,
        percentage: 10,
        unit: "شخص",
        color: "#3b82f6",
        description: "حالات الأمراض المزمنة المسجلة",
      },
      {
        id: "incurable_diseases",
        category: "أمراض مستعصية",
        count: 240,
        percentage: 20,
        unit: "شخص",
        color: "#ef4444",
        description: "حالات الأمراض المستعصية",
      },
      {
        id: "elderly",
        category: "كبار السن",
        count: 200,
        percentage: 30,
        unit: "شخص",
        color: "#f59e0b",
        description: "الأفراد من كبار السن",
      },
      {
        id: "patients",
        category: "المرضى",
        count: 1000,
        percentage: 60,
        unit: "شخص",
        color: "#10b981",
        description: "إجمالي المرضى المسجلين",
      },
      {
        id: "special_needs",
        category: "ذوي احتياجات",
        count: 160,
        percentage: 15,
        unit: "شخص",
        color: "#8b5cf6",
        description: "الأفراد ذوي الاحتياجات الخاصة",
      },
    ],
  });

  // Calculate summary statistics
  const totalCount = healthData.data.reduce((sum, item) => sum + item.count, 0);
  const averagePercentage = Math.round(
    healthData.data.reduce((sum, item) => sum + item.percentage, 0) /
      healthData.data.length
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col gap-6">
      <DashboardHeader />

      {/* Back Button */}
      <div className="flex items-center mb-6">
        <Link
          to="/analyser"
          className="text-2xl text-gray-700 hover:text-black transition"
        >
          <IoArrowBack />
        </Link>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-[#1A1F33] mb-12 tracking-wide text-center">
        {healthData.title}
      </h2>

      {/* Analyzer Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 w-full max-w-7xl mx-auto">
        {healthData.data.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow cursor-pointer"
          >
            <CircularProgress
              percentage={item.percentage}
              label={item.category}
              value={item.count}
              unit={item.unit}
              primaryColor={item.color}
              size={120}
              strokeWidth={8}
            />
            <div className="mt-6 text-center">
              <div className="text-lg font-semibold text-[#1A1F33]">
                {item.category}
              </div>
              <div className="text-3xl font-bold text-[#1A1F33] mt-2">
                {item.count.toLocaleString()}
              </div>
              <div className="text-sm text-gray-500 mt-1">
                ({item.percentage}%)
              </div>
              <div className="text-xs text-gray-400 mt-2">
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary section */}
      <div className="mt-12 w-full max-w-4xl mx-auto">
        <div className="bg-white shadow-md rounded-lg p-8">
          <h3 className="text-2xl font-bold text-[#1A1F33] mb-6 text-center">
            ملخص التحليل الصحي
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <div className="text-3xl font-bold text-[#1A1F33]">
                {totalCount.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">إجمالي الحالات</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-xl">
              <div className="text-3xl font-bold text-[#1A1F33]">
                {averagePercentage}%
              </div>
              <div className="text-sm text-gray-600">متوسط النسبة</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-xl">
              <div className="text-3xl font-bold text-[#1A1F33]">
                {healthData.data.length}
              </div>
              <div className="text-sm text-gray-600">فئات التحليل</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-xl">
              <div className="text-sm font-bold text-[#1A1F33]">
                {healthData.lastUpdated}
              </div>
              <div className="text-sm text-gray-600">آخر تحديث</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
