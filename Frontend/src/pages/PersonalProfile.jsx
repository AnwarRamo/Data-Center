import { useState } from "react";

// Import icons
import person from "../assets/images/pirsonal deatels.png";
import work from "../assets/images/work.png";
import school from "../assets/images/study.png";
import warning from "../assets/images/dangeros.png";
import favorite from "../assets/images/health.png";
import home from "../assets/images/house.png";
import assignment from "../assets/images/antherneed.png";

export default function PersonalProfile() {
  // State for family members
  const [familyMembers, setFamilyMembers] = useState([
    "اسم الزوج",
    "اسم الابن الاول",
    "اسم الابن الثاني",
    "اسم الابن الثالث",
  ]);

  // Profile sections data
  const profileSections = [
    { label: "عمل أفراد الأسرة", icon: work },
    { label: "مستوى الدراسة", icon: school },
    { label: "المعلومات الشخصية", icon: person },
    { label: "التأثر بأزمة", icon: warning },
    { label: "الحالة الصحية", icon: favorite },
    { label: "المسكن", icon: home },
    { label: "احتياجات أخرى", icon: assignment },
  ];

  // Add new family member
  const handleAddMember = () => {
    setFamilyMembers(prev => [...prev, "اسم فرد جديد"]);
  };

  // Remove last family member
  const handleRemoveMember = () => {
    if (familyMembers.length > 0) {
      setFamilyMembers(prev => prev.slice(0, -1));
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Left Section - Personal Profile */}
        <div className="flex-1 flex flex-col items-center justify-start p-12 bg-gray-100">
          {/* Main Title */}
          <h1 className="text-4xl font-bold text-black mb-20 text-center">
            الملف الشخصي
          </h1>

          {/* Profile Sections Grid */}
          <div className="grid grid-cols-3 gap-20 w-full max-w-7xl">
            {/* First Row */}
            <div className="flex flex-col items-center">
              <div className="w-40 h-40 bg-[#DCFFF7] rounded-full flex items-center justify-center border-2 border-black mb-5 shadow-lg drop-shadow-lg">
                <img src={work} alt="عمل أفراد الأسرة" className="w-20 h-20" />
              </div>
              <p className="text-lg font-medium text-black text-center">عمل أفراد الأسرة</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-40 h-40 bg-[#DCFFF7] rounded-full flex items-center justify-center border-2 border-black mb-5 shadow-lg drop-shadow-lg">
                <img src={school} alt="مستوى الدراسة" className="w-20 h-20" />
              </div>
              <p className="text-lg font-medium text-black text-center">مستوى الدراسة</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-40 h-40 bg-[#DCFFF7] rounded-full flex items-center justify-center border-2 border-black mb-5 shadow-lg drop-shadow-lg">
                <img src={person} alt="المعلومات الشخصية" className="w-20 h-20" />
              </div>
              <p className="text-lg font-medium text-black text-center">المعلومات الشخصية</p>
            </div>

            {/* Second Row */}
            <div className="flex flex-col items-center">
              <div className="w-40 h-40 bg-[#DCFFF7] rounded-full flex items-center justify-center border-2 border-black mb-5 shadow-lg drop-shadow-lg">
                <img src={warning} alt="التأثر بأزمة" className="w-20 h-20" />
              </div>
              <p className="text-lg font-medium text-black text-center">التأثر بأزمة</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-40 h-40 bg-[#DCFFF7] rounded-full flex items-center justify-center border-2 border-black mb-5 shadow-lg drop-shadow-lg">
                <img src={favorite} alt="الحالة الصحية" className="w-20 h-20" />
              </div>
              <p className="text-lg font-medium text-black text-center">الحالة الصحية</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-40 h-40 bg-[#DCFFF7] rounded-full flex items-center justify-center border-2 border-black mb-5 shadow-lg drop-shadow-lg">
                <img src={home} alt="المسكن" className="w-20 h-20" />
              </div>
              <p className="text-lg font-medium text-black text-center">المسكن</p>
            </div>

            {/* Third Row - Centered */}
            <div className="col-span-3 flex justify-center">
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 bg-[#DCFFF7] rounded-full flex items-center justify-center border-2 border-black mb-5 shadow-lg drop-shadow-lg">
                  <img src={assignment} alt="احتياجات أخرى" className="w-20 h-20" />
                </div>
                <p className="text-lg font-medium text-black text-center">احتياجات أخرى</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Family Head */}
        <div className="w-80 bg-[#DCFFF7] rounded-l-3xl flex flex-col p-6 shadow-2xl drop-shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <h2 className="text-lg font-bold text-black">اسم رب العائلة</h2>
            <div className="w-6 h-6 border-2 border-black rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-black rounded-full"></div>
            </div>
          </div>

          {/* Family Members List */}
          <div className="space-y-8 flex-1">
            {familyMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-full px-8 py-4 text-center shadow-lg drop-shadow-lg mx-2 hover:shadow-xl transition-shadow duration-300"
              >
                <span className="text-black font-medium text-base">{member}</span>
              </div>
            ))}

            {/* Buttons Container */}
            <div className="space-y-6">
              {/* Add Member Button */}
              <button
                onClick={handleAddMember}
                className="w-full bg-white rounded-full px-8 py-4 text-center shadow-lg drop-shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 mx-2"
              >
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xl font-bold text-black">+</span>
                  <span className="text-black font-medium text-lg">اضافة فرد</span>
                </div>
              </button>

              {/* Remove Member Button */}
              <button
                onClick={handleRemoveMember}
                className="w-full bg-white rounded-full px-8 py-4 text-center shadow-lg drop-shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 disabled:opacity-50 mx-2"
                disabled={familyMembers.length === 0}
              >
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xl font-bold text-black">-</span>
                  <span className="text-black font-medium text-lg">حذف فرد</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
