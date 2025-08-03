import { useState } from "react";
import { Link } from "react-router-dom";
import LeftSidebar from "../components/LeftSidebar";
import Sidebar from "../components/Sidebar";

export default function CrisisImpactPage() {
  const [members, setMembers] = useState([
    "الجميع الأول",
    "الجميع الثاني",
    "الجميع الثالث"
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [impactType, setImpactType] = useState("");
  const [need1, setNeed1] = useState("");
  const [need2, setNeed2] = useState("");
  const [need3, setNeed3] = useState("");
  const [fees, setFees] = useState("");

  const addMember = () => setMembers([...members, "فرد جديد"]);
  const removeMember = () => {
    if (members.length > 0) setMembers(members.slice(0, -1));
  };

  const mainContentMarginClasses = "ml-[120px] lg:ml-[150px] mr-[120px] lg:mr-[150px]";

  return (
    <div className="w-full min-h-screen font-sans text-right bg-[#E0E5EB] overflow-y-auto">
      {/* Left Sidebar (Fixed) */}
      <LeftSidebar />

      {/* Right Sidebar (Fixed - Member List) */}
      <Sidebar
        members={members}
        addMember={addMember}
        removeMember={removeMember}
      />

      {/* Main Content Area */}
      <div className={`${mainContentMarginClasses} py-4 sm:py-6 px-2 sm:px-4`}>
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-[#1A1F33]">التأثر بأزمة</h1>
       
          </div>

          <div className="space-y-6 bg-white p-6 rounded-lg shadow">
            {/* Nature of Impact - Radio Group */}
            <div className="flex flex-col space-y-4">
              <h2 className="text-lg font-semibold text-[#1A1F33]">طبيعة التأثر</h2>
              <div className="flex flex-col space-y-2">
                {[
                  "ضرح طبيعة التأثر",
                  "تصريح الحاجة للمساعدة",
                  "لست بحاجة للمساعدة"
                ].map((item) => (
                  <div key={item} className="flex items-center justify-end space-x-2">
                    <input
                      type="radio"
                      id={item}
                      name="impactType"
                      checked={impactType === item}
                      onChange={() => setImpactType(item)}
                      className="h-4 w-4"
                      disabled={!isEditing}
                    />
                    <label htmlFor={item} className="text-right text-sm">
                      {item}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Needs Section */}
            <div className="flex flex-col space-y-4">
              <h2 className="text-lg font-semibold text-[#1A1F33]">الاحتياجات</h2>
              <div className="space-y-3">
                <div className="flex flex-col">
                  <label className="text-right text-sm font-medium text-gray-700 mb-1">
                    الاحتياج الأول
                  </label>
                  <input
                    type="text"
                    value={need1}
                    onChange={(e) => setNeed1(e.target.value)}
                    className="w-full text-right text-sm py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#5141FF]"
                    disabled={!isEditing}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-right text-sm font-medium text-gray-700 mb-1">
                    الاحتياج الثاني
                  </label>
                  <input
                    type="text"
                    value={need2}
                    onChange={(e) => setNeed2(e.target.value)}
                    className="w-full text-right text-sm py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#5141FF]"
                    disabled={!isEditing}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-right text-sm font-medium text-gray-700 mb-1">
                    الاحتياج الثالث
                  </label>
                  <input
                    type="text"
                    value={need3}
                    onChange={(e) => setNeed3(e.target.value)}
                    className="w-full text-right text-sm py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#5141FF]"
                    disabled={!isEditing}
                  />
                </div>
              </div>
            </div>

            {/* Fees Input */}
            <div className="flex flex-col">
              <label className="text-right text-sm font-medium text-gray-700 mb-1">
                رسوم تسريع
              </label>
              <input
                type="text"
                value={fees}
                onChange={(e) => setFees(e.target.value)}
                className="w-full text-right text-sm py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#5141FF]"
                disabled={!isEditing}
              />
            </div>
                {/* Buttons */}
             <div className="flex gap-4">
              <Link 
                to="/" 
                className="bg-[#DCFFF7] px-6 py-2 rounded-2xl text-[#1A1F33] font-medium"
              >
                رجوع
              </Link>
              <button 
                onClick={() => setIsEditing(!isEditing)}
                className={`px-6 py-2 rounded-2xl font-medium ${
                  isEditing 
                    ? "bg-green-500 text-white" 
                    : "bg-[#5141FF] text-white"
                }`}
              >
                {isEditing ? "حفظ" : "تعديل"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}