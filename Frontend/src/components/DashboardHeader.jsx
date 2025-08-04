import React from "react";
import { FiBell, FiCalendar } from "react-icons/fi";

export default function Header() {
    const today = new Date();
    const formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

    return (
        <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-8 rtl:space-x-reverse text-[#415A5A]">
                <FiBell size={18} />
                <div className="flex items-center space-x-2">
                    <FiCalendar size={16} />
                    <span>{formattedDate}</span>
                </div>
            </div>
            <div className="flex items-center space-x-4 rtl:space-x-reverse text-[#415A5A]">
                <span>اسم المشرف</span>
            </div>
        </div>
    );
}