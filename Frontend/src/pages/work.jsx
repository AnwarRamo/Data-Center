import { useState } from "react";
import LeftSidebar from "../components/LeftSidebar";
import Sidebar from "../components/Sidebar";

export default function FamilyWorkPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [workForm, setWorkForm] = useState("");
  const [workDescription, setWorkDescription] = useState("");
  const [ownership, setOwnership] = useState("");
  const [otherOwnership, setOtherOwnership] = useState("");
  const [income, setIncome] = useState("");
  const [date, setDate] = useState("");

  const mainContentMarginClasses = "ml-[120px] lg:ml-[150px] mr-[120px] lg:mr-[150px]";

  return (
    <div className="w-full min-h-screen font-sans text-right bg-[#E0E5EB] overflow-y-auto">
      <LeftSidebar />
      <Sidebar members={[]} addMember={() => {}} removeMember={() => {}} />

      <div className={`${mainContentMarginClasses} py-4 px-2`}>
        <div className="max-w-md mx-auto"> {/* Narrower container for middle-aligned form */}

          <h1 className="text-2xl font-bold text-[#1A1F33] text-center mb-6">عمل أفراد الأسرة</h1>

          {/* First Section - Two Inputs Side by Side */}
          <div className="flex gap-4 mb-6">
            <div className="flex-1">
             
              <input
                type="text"
                value={workForm}
                placeholder="فئة العمل "
                onChange={(e) => setWorkForm(e.target.value)}
                className="w-full text-right text-sm py-2 px-3 bg-white border border-gray-300 rounded-md"
                disabled={!isEditing}
              />
            </div>
            <div className="flex-1">
            
              <input
                type="text"
                value={workForm}
                placeholder="مكان العمل"
                onChange={(e) => setDate(e.target.value)}
                className="w-full text-right text-sm py-2 px-3 border border-gray-300 bg-white rounded-md"
                disabled={!isEditing}
              />
            </div>
          </div>

          {/* Second Section - Single Input */}
          <div className="mb-6">
            <input
              type="text"
              value={workDescription}
              placeholder="شرح مختصر طبيعة العمل"
              onChange={(e) => setWorkDescription(e.target.value)}
              className="w-[20rem] text-right text-sm py-2 px-3 mr-20 bg-white border border-white rounded-md"
              disabled={!isEditing}
            />
          </div>

          {/* Third Section - Title + 3 Radio Buttons */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2 text-right">ملكية العمل</h3>
            <div className="space-y-2">
              {["شريك","استثمار","أيجار", "عامل", "ملك"].map((option) => (
                <div key={option} className="flex-row justify-center items-center gap-2 ">
                  <label className="text-sm">{option}</label>
                  <input
                    type="radio"
                    name="ownership"
                    checked={ownership === option}
                    onChange={() => setOwnership(option)}
                    disabled={!isEditing}
                    className="h-4 w-4"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Fourth Section - Title + 2 Radio Buttons */}
          <div className="mb-6">
            <div className="space-y-2">
              {[ "غير ذلك"].map((option) => (
                <div key={option} className="flex justify-end items-center gap-2">
                  <label className="text-sm">{option}</label>
                  <input
                    type="radio"
                    name="ownership"
                    checked={ownership === option}
                    onChange={() => setOwnership(option)}
                    disabled={!isEditing}
                    className="h-4 w-4"
                  />
                </div>
              ))}
            </div>
            {ownership === "غير ذلك" && (
              <input
                type="text"
                value={otherOwnership}
                onChange={(e) => setOtherOwnership(e.target.value)}
                className="w-full mt-2 text-right text-sm py-2 px-3 border border-gray-300 rounded-md"
                disabled={!isEditing}
                placeholder="حدد الملكية"
              />
            )}
          </div>

          {/* Fifth Section - Title + 4 Radio Buttons */}
          <div className="mb-8">
            <h3 className="text-sm font-medium text-gray-700 mb-2 text-right">متوسط الدخل الشهري</h3>
            <div className="grid grid-cols-2 gap-2">
              {["$50", "$100-50", "$200-100", "$500"].map((option) => (
                <div key={option} className="flex justify-end items-center gap-2">
                  <label className="text-sm">{option}</label>
                  <input
                    type="radio"
                    name="income"
                    checked={income === option}
                    onChange={() => setIncome(option)}
                    disabled={!isEditing}
                    className="h-4 w-4"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4">
            <button className="px-6 py-2 bg-gray-400 text-white rounded-md">
              رجوع
            </button>
            <button 
              onClick={() => setIsEditing(!isEditing)}
              className={`px-6 py-2 rounded-md ${
                isEditing ? "bg-green-500" : "bg-[#5141FF]"
              } text-white`}
            >
              {isEditing ? "حفظ" : "تعديل"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}