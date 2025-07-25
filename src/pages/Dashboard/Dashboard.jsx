import React, { useState } from "react";
import { TbUsers } from "react-icons/tb";
import { LuUserX } from "react-icons/lu";
import { Search, Eye, EyeOff } from "lucide-react";
import langIcon from "../../assets/translate.svg"
import { useTranslation } from "react-i18next";
import { ChevronDown, Calendar } from "lucide-react";
// const [isOpen, setIsOpen] = useState(false);


const users = [
  {
    id: 1,
    name: "John De",
    email: "johnde@gmail.com",
    user_type: "Subscriber",
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Farabi Hasan",
    email: "farabihasan@gmail.com",
    user_type: "Non-Subscriber",
    profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Sifat Hasan",
    email: "sifathasan@gmail.com",
    user_type: "Subscriber",
    profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Shariful Islam",
    email: "sharifulislam@gmail.com",
    user_type: "Non-Subscriber",
    profileImage: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    name: "Sohag ",
    email: "sohag@gmail.com",
    user_type: "Subscriber",
    profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "Furkan ",
    email: "furkan@gmail.com",
    user_type: "Non-Subscriber",
    profileImage: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const Dashboard = () => {
  const { t, i18n } = useTranslation();
  const [visibleUsers, setVisibleUsers] = useState({});
  const [language, setLanguage] = useState(i18n.language === "pl" ? "Polish" : "English");
  const [isOpenT, setIsOpenT] = useState(false);
  const languageList = ["English", "Polish"];

  const toggleVisibility = (id) => {
    setVisibleUsers((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  

   const changeLanguage = (ln)=>{
    const langCode = ln === "English" ? "en" : "pl";
    i18n.changeLanguage(langCode);
    setLanguage(ln);
  }
 

  return (
    <div className="p-4 font-Roboto">
     
       <div className="flex md:items-center justify-between flex-col md:flex-row gap-3">
        <h1 className="font-semibold text-textClr text-[2rem] mt-6 md:mt-0">{t("dashboard.title")}</h1>
        
        {/* Custom Dropdown */}
          <div className="flex gap-5 justify-end">
            <div className="relative font-Inter">
              <button
                onClick={() => {
                  setIsOpenT(!isOpenT);
                }}
                className="flex items-center border border-Primary p-2 rounded-lg cursor-pointer"
              >
                <div className="flex items-center  gap-2">
                  <img src={langIcon} alt="translate ico" />
                  <span className="font-medium">
                    {language === "English" ? "English" : "Polish"}
                  </span>
                </div>
                <ChevronDown
                  size={16}
                  className={`text-gray-400 transition-transform duration-200 ${
                    isOpenT ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpenT && (
                <>
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-blue-500 rounded-md shadow-lg z-20 overflow-hidden">
                    {languageList.map((ln, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setIsOpenT(false);
                          changeLanguage(ln);
                        }}
                        className={`flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors duration-150 ${
                          language === ln ? "text-blue-600" : "text-gray-600"
                        }`}
                      >
                        {ln}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
            
          </div>
      </div>

      {/* Subscriber and Non-Subscriber Summary */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-8.5">
        <div className="bg-[#F4F4F4] w-full md:w-1/2 p-5 shadow-[0_0_2px_0_rgba(0,0,0,0.25)]">
          <h1 className="text-[2rem] font-medium leading-5 tracking-[.5px] mb-2 text-textClr/40">
            {t("dashboard.totalSubscriber")}
          </h1>
          <p className="flex items-center gap-x-2 font-medium text-3xl text-Primary">
            <TbUsers /> <span>313</span>
          </p>
        </div>
        <div className="bg-[#F4F4F4] w-full md:w-1/2 p-5 shadow-[0_0_2px_0_rgba(0,0,0,0.25)]">
          <h1 className="text-[2rem] font-medium leading-5 tracking-[.5px] mb-2 text-textClr/40">
            {t("dashboard.nonSubsciber")}
          </h1>
          <p className="flex items-center gap-x-2 font-medium text-3xl text-red-400">
            <LuUserX /> <span>313</span>
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mt-10.5">
        <h1 className="font-medium text-[1.75rem] text-textClr mb-6.5">
         {t("dashboard.managerUser")}
        </h1>
        <div className="flex items-center w-full px-3 py-2 bg-white border border-Primary h-11 rounded-sm">
          <Search className="text-Primary w-5 h-5 mr-2" />
          <input
            type="text"
            placeholder={t("dashboard.searchPlaceholder")}
            className="w-full outline-none text-sm text-gray-700 placeholder-Primary bg-transparent"
          />
        </div>
      </div>
     

      {/* User List */}
      <div className="w-full mt-4">
        {users.map((emp) => (
          <div
            key={emp.id}
            className="flex items-center justify-between bg-white p-4 mb-3 border border-textClr/20 rounded"
          >
            {/* Left side: Image, Name, Email (conditionally shown) */}
            <div className="flex items-center gap-4">
              {visibleUsers[emp.id] && (
                <>
                  <img
                    src={emp.profileImage}
                    alt={emp.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium">{emp.name}</div>
                    <div className="text-gray-500 text-sm">{emp.email}</div>
                  </div>
                </>
              )}
            </div>

            {/* Right side: Eye toggle & Subscriber status button */}
            <div className="flex flex-col md:flex-row gap-3 items-center">
              <button
                type="button"
                onClick={() => toggleVisibility(emp.id)}
                className="text-[#797979] hover:text-textClr/70 transition duration-300"
              >
                {visibleUsers[emp.id] ? (
                  <Eye className="w-5 h-5" />
                ) : (
                  <EyeOff className="w-5 h-5" />
                )}
              </button>

              <button
                className={`cursor-not-allowed text-sm text-white px-4 py-3 w-[140px] rounded-full ${
                  emp.user_type === "Subscriber"
                    ? "bg-[#77E9D6]"
                    : "bg-[#CCCCCC]"
                }`}
              >
                {emp.user_type === "Subscriber" ? t("dashboard.subscriber") : t("dashboard.non")}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
