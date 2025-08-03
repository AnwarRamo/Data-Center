import { useState } from "react";
import { Plus, Minus, User } from "lucide-react";

export default function Sidebar({ members, addMember, removeMember, currentIndex, setCurrentIndex }) {
  const [isDeleteMode, setIsDeleteMode] = useState(false);

  // Handle adding a new member
  const handleAddMember = () => {
    addMember({
      lastName: "",
      firstName: "اضافة ولد",
      motherName: "",
      fatherName: "",
      gender: "",
      nationalId: "",
      birthDate: "",
      phone: "",
      relation: "",
      mobile: "",
    });
  };

  // Toggle delete mode
  const toggleDeleteMode = () => {
    setIsDeleteMode(!isDeleteMode);
  };

  // Handle deleting a specific member
  const handleRemoveMember = (index) => {
    removeMember(index);
    setIsDeleteMode(false); // Exit delete mode after deletion
  };

  return (
    <div
      className="fixed top-0 right-0 h-screen w-full max-w-[120px] lg:max-w-[150px] 
                 bg-[#DCFFF7] p-3 md:p-4 
                 rounded-none lg:rounded-r-3xl 
                 flex flex-col items-center 
                 shadow-[0_4px_15px_rgba(0,0,0,0.05)] z-10"
    >
      <style>
        {`
          @keyframes pulseScale {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          .animate-pulse-scale {
            animation: pulseScale 0.3s ease-in-out;
          }
        `}
      </style>

      {/* Header */}
      <div className="flex flex-col items-center justify-center w-full gap-1 mb-3 md:mb-4 flex-shrink-0 text-center">
        <User className="w-4 h-4 md:w-5 md:h-5 text-[#1A1F33]" />
        <h2 className="text-xs md:text-sm font-semibold text-[#1A1F33]">
          أسم رب الأسرة
        </h2>
      </div>

      {/* Members and actions */}
      <div className="space-y-2 md:space-y-3 w-full overflow-y-auto flex-grow">
        {members.map((member, i) => (
          <button
            key={i}
            onClick={() => {
              if (isDeleteMode) {
                handleRemoveMember(i);
              } else {
                setCurrentIndex(i);
              }
            }}
            className={`bg-white w-full max-w-[calc(100%-0.5rem)] h-[28px] md:h-[32px] 
                       rounded-3xl text-[8px] md:text-[9px] font-medium text-center text-[#1A1F33] 
                       shadow-[inset_5px_6px_8px_rgba(0,0,0,0.25)] 
                       hover:bg-gray-50 flex items-center justify-center mx-auto truncate px-1
                       ${currentIndex === i && !isDeleteMode ? "bg-gray-300 animate-pulse-scale" : ""}`}
          >
            {isDeleteMode ? (
              <span className="flex items-center gap-1">
                <Minus className="w-2.5 h-2.5 md:w-3 md:h-3" />
                {member.firstName}
              </span>
            ) : (
              member.firstName
            )}
          </button>
        ))}
        <button
          onClick={handleAddMember}
          className="flex items-center justify-center gap-1 bg-white w-full max-w-[calc(100%-0.5rem)] h-[28px] md:h-[32px] 
                     rounded-3xl text-[8px] md:text-[9px] font-medium text-[#1A1F33] 
                     shadow-[inset_5px_6px_8px_rgba(0,0,0,0.25)] hover:bg-gray-50 mx-auto px-1"
        >
          <Plus className="w-2.5 h-2.5 md:w-3 md:h-3" />
          <span className="truncate">إضافة عميل</span>
        </button>
        <button
          onClick={toggleDeleteMode}
          className="flex items-center justify-center gap-1 bg-white w-full max-w-[calc(100%-0.5rem)] h-[28px] md:h-[32px] 
                     rounded-3xl text-[8px] md:text-[9px] font-medium text-[#1A1F33] 
                     shadow-[inset_5px_6px_8px_rgba(0,0,0,0.25)] hover:bg-gray-50 mx-auto px-1"
          disabled={members.length === 0}
        >
          <Minus className="w-2.5 h-2.5 md:w-3 md:h-3" />
          <span className="truncate">{isDeleteMode ? "إلغاء" : "حذف عميل"}</span>
        </button>
      </div>
    </div>
  );
}