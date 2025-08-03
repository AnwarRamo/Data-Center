import { useState } from "react";
import LeftSidebar from "../components/LeftSidebar";
import Sidebar from "../components/Sidebar";

export default function HealthStatusPage() {
  const [members, setMembers] = useState([
    "اسم الزوجة",
    "اسم الولد الأول",
    "اسم الولد الثاني",
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [healthStatus, setHealthStatus] = useState("");
  const [date, setDate] = useState("");
  const [costs, setCosts] = useState("");
  const [entities, setEntities] = useState("");

  const addMember = () => setMembers([...members, "اسم فرد جديد"]);
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
          <h1 className="text-2xl font-bold text-[#1A1F33] mb-6">حالة الصحية</h1>

          <div className="space-y-6 bg-white p-6 rounded-lg shadow">
            {/* Health Status Radio Group */}
            <div className="flex flex-col">
              <label className="text-right text-sm font-medium text-gray-700 mb-2">
                الحالة الصحية
              </label>
              <div className="flex flex-col space-y-2">
                {[' رعاية كبار السن ','مرض مزمن', 'مرض مستعصي', 'ذوي احتياجات خاصة'].map((item) => (
                  <div key={item} className="flex items-center justify-end space-x-2">
                    <input
                      type="radio"
                      id={item}
                      name="healthStatus"
                      checked={healthStatus === item}
                      onChange={() => setHealthStatus(item)}
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

          
            {/* Entities Input */}
            <div className="flex flex-col">
              <label className="text-right text-sm font-medium text-gray-700 mb-1">
                الشرح
              </label>
              <input
                type="text"
                placeholder="أدخل شرح عن الحالة"
                value={entities}
                onChange={(e) => setEntities(e.target.value)}
                className="w-full text-right text-sm py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#5141FF]"
                disabled={!isEditing}
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-4 justify-end mt-6">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className={`px-4 py-2 text-white text-sm rounded-md hover:bg-opacity-90 ${
                  isEditing ? "bg-green-500" : "bg-[#5141FF]"
                }`}
              >
                {isEditing ? "حفظ" : "تعديل"}
              </button>
              <button className="px-4 py-2 bg-gray-400 text-white text-sm rounded-md hover:bg-opacity-90">
                رجوع
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}