import { useState } from "react";
import OptionSelectorButton from "../components/OptionSelectorButton";

// Import icons
import person from "../assets/images/pirsonal deatels.png";
import work from "../assets/images/work.png";
import school from "../assets/images/study.png";
import warning from "../assets/images/dangeros.png";
import favorite from "../assets/images/health.png";
import home from "../assets/images/house.png";
import assignment from "../assets/images/antherneed.png";

export default function StudyPage() {
  // State for family members
  const [familyMembers, setFamilyMembers] = useState([
    "اسم الزوجة",
    "اسم الابن الاول",
    "اسم الابن الثاني",
    "اسم الابن الثالث",
  ]);

  // Form state
  const [isEditing, setIsEditing] = useState(false);
  const [studyLevel, setStudyLevel] = useState("");
  const [lastDegree, setLastDegree] = useState("");

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

  // Navigation sections data
  const navigationSections = [
    { label: "المعلومات الشخصية", icon: person },
    { label: "مستوى الدراسة", icon: school },
    { label: "عمل أفراد الأسرة", icon: work },
    { label: "المسكن", icon: home },
    { label: "الحالة الصحية", icon: favorite },
    { label: "التأثر بأزمة", icon: warning },
    { label: "احتياجات أخرى", icon: assignment },
  ];

  return (
    <div className="flex h-screen bg-[#E0E5EB] font-sans">
      {/* Left Sidebar - Navigation */}
      <div className="w-60 bg-[#DCFFF7] rounded-tl-[4rem] flex flex-col items-center py-6">
        <div className="space-y-8">
          {navigationSections.map((section, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-20 h-20 bg-[#DCFFF7] rounded-full flex items-center justify-center border-2 border-black mb-3 shadow-lg drop-shadow-lg">
                <img src={section.icon} alt={section.label} className="w-10 h-10" />
              </div>
              <p className="text-sm font-medium text-black text-center">{section.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content - Study Form */}
      <div className="flex-1 flex flex-col items-center justify-start p-12 bg-[#E0E5EB]">
        {/* Main Title */}
        <h1 className="text-4xl font-bold text-black mb-20 text-center">
          مستوى الدراسة
        </h1>

        {/* Form Content */}
        <div className="w-full max-w-6xl">
          {/* Study Level Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-8 text-center">مستوى الدراسة</h2>
                         <div className="grid grid-cols-4 gap-4 justify-items-center">
              <OptionSelectorButton
                label="طالب أبتدائي"
                icon="📚"
                selected={studyLevel === "طالب أبتدائي"}
                onClick={() => isEditing && setStudyLevel("طالب أبتدائي")}
                className={!isEditing ? "opacity-50 cursor-not-allowed" : ""}
              />
              <OptionSelectorButton
                label="طالب مدرسة"
                icon="🏫"
                selected={studyLevel === "طالب مدرسة"}
                onClick={() => isEditing && setStudyLevel("طالب مدرسة")}
                className={!isEditing ? "opacity-50 cursor-not-allowed" : ""}
              />
              <OptionSelectorButton
                label="طالب جامعة"
                icon="🎓"
                selected={studyLevel === "طالب جامعة"}
                onClick={() => isEditing && setStudyLevel("طالب جامعة")}
                className={!isEditing ? "opacity-50 cursor-not-allowed" : ""}
              />
              <OptionSelectorButton
                label="طالب دراسات عليا"
                icon="📖"
                selected={studyLevel === "طالب دراسات عليا"}
                onClick={() => isEditing && setStudyLevel("طالب دراسات عليا")}
                className={!isEditing ? "opacity-50 cursor-not-allowed" : ""}
              />
            </div>
          </div>

          {/* Last Degree Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-8 text-center">ما هي آخر شهادة دراسية حصلت عليها</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <input
                type="text"
                placeholder="أدخل الشهادة"
                value={lastDegree}
                onChange={(e) => setLastDegree(e.target.value)}
                disabled={!isEditing}
                className="w-full text-center text-xl py-6 px-8 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5141FF] focus:border-transparent"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-8">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className={`px-12 py-6 text-white text-xl font-medium rounded-xl transition-all duration-300 ${
                isEditing 
                  ? "bg-green-500 hover:bg-green-600" 
                  : "bg-[#5141FF] hover:bg-[#4338CA]"
              }`}
            >
              {isEditing ? "حفظ" : "تعديل"}
            </button>
            <button className="px-12 py-6 bg-gray-400 text-white text-xl font-medium rounded-xl hover:bg-gray-500 transition-all duration-300">
              رجوع
            </button>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Family Head */}
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
  );
}