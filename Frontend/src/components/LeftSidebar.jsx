import { Link } from "react-router-dom";
import person from "../assets/images/pirsonal deatels.png";
import work from "../assets/images/work.png";
import school from "../assets/images/study.png";
import warning from "../assets/images/dangeros.png";
import favorite from "../assets/images/health.png";
import home from "../assets/images/house.png";
import assignment from "../assets/images/antherneed.png";

export default function LeftSidebar() {
  const icons = [
    { label: "المعلومات الشخصية", image: person, path: "/personal-info" },
    { label: "مستندات الموارد", image: school, path: "/documents" },
    { label: "عمل أفراد الأسرة", image: work, path: "/work" },
    { label: "المسكن", image: home, path: "/housing" },
    { label: "الحالة الصحية", image: favorite, path: "/health" },
    { label: "تنبيهات السلامة", image: warning, path: "/safety" },
    { label: "أدوات ذكاء", image: assignment, path: "/tools" },
  ];

  const handleImageError = (e, label) => {
    console.error(`Failed to load image for ${label}: ${e.target.src}`);
    e.target.style.display = "none"; // Hide broken image
  };

  return (
    <div className="fixed top-0 left-0 h-screen w-full max-w-[90px] md:max-w-[120px] bg-[#D8FFF6] p-2 md:p-3 flex flex-col items-center rounded-none shadow-[-7px_4px_4px_rgba(0,0,0,0.25)] z-10">
      <div className="flex flex-col items-center space-y-1 md:space-y-2 w-full overflow-y-auto flex-grow">
        {icons.map(({ label, image, path }, index) => (
          <Link
            key={index}
            to={path}
            className="flex flex-col items-center w-full flex-shrink-0 hover:scale-105 transition-transform"
          >
            <div className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] rounded-full flex items-center justify-center bg-white overflow-hidden">
              <img
                src={image}
                alt={label}
                className="w-[14px] h-[14px] md:w-[20px] md:h-[20px] object-contain"
                onError={(e) => handleImageError(e, label)}
              />
            </div>
            <p className="text-[6px] md:text-[8px] font-medium text-[#1A1F33] text-center mt-1">
              {label}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}