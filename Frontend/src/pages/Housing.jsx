import { useState } from "react";
import LeftSidebar from "../components/LeftSidebar";
import Sidebar from "../components/Sidebar";
import InputPair from "../components/InputField"; 
import RadioGrid from "../components/RadioGroup";

export default function Housing() {
  const [isEditing, setIsEditing] = useState(false);
  const [homeOwnership, setHomeOwnership] = useState("");
  const [hasCar, setHasCar] = useState("");
  const [carOwnership, setCarOwnership] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [familyHead, setFamilyHead] = useState("");

  const mainContentMarginClasses = "ml-[120px] lg:ml-[150px] mr-[120px] lg:mr-[150px]";

  return (
    <div className="w-full min-h-screen font-sans text-right bg-[#E0E5EB] overflow-y-auto">
      <LeftSidebar />
      <Sidebar members={[]} addMember={() => {}} removeMember={() => {}} />

      <div className={`${mainContentMarginClasses} py-4 px-2`}>
        <div className="max-w-md mx-auto ">

          <h1 className="text-2xl font-bold text-[#1A1F33] text-center mb-6">المسكن</h1>

          {/* Personal Information Section */}
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <h2 className="text-lg font-semibold text-[#1A1F33] mb-4">المعلومات الشخصية</h2>
            
            {/* Title with 2 inputs below */}
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-700 mb-2">مستوى الدراسة</h3>
              <InputPair 
                leftInput={{
                  value: educationLevel,
                  onChange: (e) => setEducationLevel(e.target.value),
                  disabled: !isEditing,
                  placeholder: "المستوى التعليمي"
                }}
                rightInput={{
                  value: familyHead,
                  onChange: (e) => setFamilyHead(e.target.value),
                  disabled: !isEditing,
                  placeholder: "اسم رب العائلة"
                }}
              />
            </div>

            {/* Title with 4 radio buttons in 2x2 grid */}
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-700 mb-2">ملكية المنزل</h3>
              <RadioGrid
                options={['ملك', 'إيجار', 'رهن', 'غير ذلك']}
                selected={homeOwnership}
                onChange={setHomeOwnership}
                disabled={!isEditing}
                columns={2}
              />
            </div>

            {/* Conditional Car Ownership Section */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">هل تملك سيارة</h3>
              <RadioGrid
                options={['نعم', 'لا']}
                selected={hasCar}
                onChange={setHasCar}
                disabled={!isEditing}
                columns={2}
              />

              {hasCar === 'نعم' && (
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">نوع الملكية</h3>
                  <div className="flex justify-between">
                    {['ملكية', 'إيجار'].map((option) => (
                      <div key={option} className="flex items-center gap-2">
                        <label className="text-sm">{option}</label>
                        <input
                          type="radio"
                          name="carOwnership"
                          checked={carOwnership === option}
                          onChange={() => setCarOwnership(option)}
                          disabled={!isEditing}
                          className="h-4 w-4"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-6">
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