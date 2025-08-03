import { useState } from "react";
import {
  FaRegAddressCard,
  FaRegIdCard,
  FaFemale,
  FaUserTie,
  FaOrcid,
  FaUsers,
  FaPhone,
  FaMobileAlt,
} from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

import Sidebar from "../components/Sidebar";
import LeftSidebar from "../components/LeftSidebar";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";

export default function PersonalInfoPage() {
  const [people, setPeople] = useState([
    {
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
    },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (field, value) => {
    if (currentIndex >= 0 && currentIndex < people.length && isEditing) {
      console.log(`Updating ${field} to ${value}`);
      const updatedPeople = [...people];
      updatedPeople[currentIndex][field] = value;
      setPeople(updatedPeople);
    }
  };

  const addMember = (newMember) => {
    setPeople([...people, newMember]);
  };

  const removeMember = (index) => {
    const updatedPeople = people.filter((_, i) => i !== index);
    setPeople(updatedPeople);
    if (updatedPeople.length === 0) {
      setCurrentIndex(0);
    } else if (currentIndex >= updatedPeople.length) {
      setCurrentIndex(updatedPeople.length - 1);
    } else if (currentIndex > index) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const toggleEditMode = () => {
    console.log("Toggling edit mode. Current isEditing:", isEditing);
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex min-h-screen bg-[#E0E5EB] font-sans text-right">
      <LeftSidebar />
      <div className="flex-1 overflow-y-auto py-6 px-6 sm:pl-[90px] sm:pr-[120px] md:pl-[120px] md:pr-[150px] lg:pl-[150px] lg:pr-[150px]">
        {people.length > 0 && currentIndex < people.length ? (
          <div className="bg-white p-6 rounded-lg shadow-md max-w-6xl mx-auto">
            <h2 className="text-xl font-bold text-center mb-6">
              المعلومات الشخصية: {people[currentIndex].firstName}
            </h2>
            <div className="grid grid-cols-2 gap-6 mb-6 text-sm">
              {/* Left Column */}
              <div className="flex flex-col gap-6">
                <InputField
                  placeholder="الاسم الأول"
                  value={people[currentIndex].firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                  icon={<FaRegIdCard />}
                  disabled={!isEditing}
                />
                <InputField
                  placeholder="اسم الأب"
                  value={people[currentIndex].fatherName}
                  onChange={(e) => handleChange("fatherName", e.target.value)}
                  icon={<FaUserTie />}
                  disabled={!isEditing}
                />
                <InputField
                  placeholder="الرقم الوطني"
                  value={people[currentIndex].nationalId}
                  onChange={(e) => handleChange("nationalId", e.target.value)}
                  icon={<FaOrcid />}
                  disabled={!isEditing}
                />
                <InputField
                  placeholder="صفة القرابة"
                  value={people[currentIndex].relation}
                  onChange={(e) => handleChange("relation", e.target.value)}
                  icon={<FaUsers />}
                  disabled={!isEditing}
                />
                <InputField
                  placeholder="رقم الموبايل"
                  value={people[currentIndex].mobile}
                  onChange={(e) => handleChange("mobile", e.target.value)}
                  icon={<FaMobileAlt />}
                  disabled={!isEditing}
                />
              </div>
              {/* Right Column */}
              <div className="flex flex-col gap-6">
                <InputField
                  placeholder="الكنية"
                  value={people[currentIndex].lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                  icon={<FaRegAddressCard />}
                  disabled={!isEditing}
                />
                <InputField
                  placeholder="اسم الأم"
                  value={people[currentIndex].motherName}
                  onChange={(e) => handleChange("motherName", e.target.value)}
                  icon={<FaFemale />}
                  disabled={!isEditing}
                />
                <SelectField
                  placeholder="اختر الجنس"
                  value={people[currentIndex].gender}
                  onChange={(e) => handleChange("gender", e.target.value)}
                  icon={<FaUsers />}
                  options={[
                    { value: "", label: "اختر الجنس" },
                    { value: "male", label: "ذكر" },
                    { value: "female", label: "أنثى" },
                  ]}
                  disabled={!isEditing}
                />
                <InputField
                  placeholder="تاريخ الميلاد"
                  type="date"
                  value={people[currentIndex].birthDate}
                  onChange={(e) => handleChange("birthDate", e.target.value)}
                  icon={<MdDateRange />}
                  disabled={!isEditing}
                />
                <InputField
                  placeholder="رقم الهاتف"
                  value={people[currentIndex].phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  icon={<FaPhone />}
                  disabled={!isEditing}
                />
              </div>
            </div>
            <div className="flex justify-center gap-4 mt-6">
              <button className="px-6 py-2 bg-[#5141FF] text-white text-sm font-medium rounded-md hover:bg-opacity-90">
                حفظ
              </button>
              <button
                onClick={toggleEditMode}
                className="px-6 py-2 bg-gray-400 text-white text-sm font-medium rounded-md hover:bg-opacity-90"
              >
                {isEditing ? "إلغاء" : "تعديل"}
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-md max-w-6xl mx-auto text-center">
            <p className="text-gray-700">لا يوجد أعضاء لعرضهم. أضف عضوًا من الشريط الجانبي.</p>
          </div>
        )}
      </div>
      <Sidebar
        members={people}
        addMember={addMember}
        removeMember={removeMember}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  );
}