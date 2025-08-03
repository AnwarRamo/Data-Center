import React, { useState } from "react";

export default function SidebarDashboard() {
    const [active, setActive] = useState("ادارة المستخدمين");

    const menuItems = [
        "ادارة المستخدمين",
        "الاشعارات",
        "محلل البيانات",
        "التقييمات",
    ];

    return (
        <div className="w-60 bg-[#CAFFF3] shadow-md flex flex-col items-center py-6 rounded-tl-[4rem]">
            <div className="bg-[#E0E5EB] rounded-full w-20 h-20 flex items-center justify-center text-center mb-8">
                Logo
            </div>

            <ul className="w-full space-y-4 px-6 text-center text-[#415A5A] font-medium">
                {menuItems.map((item) => (
                    <li
                        key={item}
                        onClick={() => setActive(item)}
                        className={`cursor-pointer px-4 py-2 rounded-tr-2xl rounded-bl-2xl transition-all duration-300 ${
                            active === item
                                ? "bg-white shadow-md text-[#415A5A]"
                                : "hover:bg-[#b2f0e4]"
                        }`}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
} 