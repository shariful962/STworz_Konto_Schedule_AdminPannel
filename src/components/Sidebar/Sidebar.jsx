import React, { useRef, useState } from "react";
import WebIcons from "../../assets/images";
import { IoHomeOutline } from "react-icons/io5";
import { FaCamera, FaUserFriends } from "react-icons/fa";
import { MdOutlineSchedule } from "react-icons/md";
import { TbFileExport } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { useTranslation } from "react-i18next";
import { RxCross2 } from "react-icons/rx";
import { MdDashboard } from "react-icons/md";


const Sidebar = ({ isOpen, toggleSidebar }) => {
  const {t} = useTranslation()
  const [selectedNav, setSelectedNav] = useState("dashboard");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("John Kabir");
  const [email, setEmail] = useState("askf@gmail.com");
  const [profileImage, setProfileImage] = useState(WebIcons.profilePic);
  const fileInputRef = useRef(null);

  const menuItems = [
    // { name: "Dashboard", path: "/dashboard", ico: MdDashboard },
    {id:"dashboard", name: t("dashboard.title"), path: "/dashboard", ico: MdDashboard },
  ];

  const navigate = useNavigate();

   const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className={`fixed sm:static top-0 left-0 h-full w-[260px] bg-white z-50 shadow-md transform transition-transform duration-300
        ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 p-6 flex flex-col justify-between border-r border-gray-400`}
    >
      {/* Logo + Nav */}
      <div className="flex flex-col gap-10 mt-8.5 md:mt-0">
        <img src={WebIcons.logo} alt="Logo" className="w-32" />

        <div className="flex flex-col gap-3">
          {menuItems.map((e) => {
            const isSelected = selectedNav === e.id;
            return (
              <div
                key={e.name}
                onClick={() => {
                  setSelectedNav(e.id);
                  navigate(e.path);
                  toggleSidebar(); // Close on mobile click
                }}
                className={`flex items-center gap-3 text-lg font-semibold p-2 rounded-lg cursor-pointer transition
                  ${
                    isSelected
                      ? "bg-Primary text-white"
                      : "text-black hover:bg-gray-100"
                  }`}
              >
                <e.ico className="text-2xl" />
                {e.name}
              </div>
            );
          })}
        </div>
      </div>

      {/* Profile */}
      <div className="flex flex-col gap-6 relative">
        <div className="flex gap-4 items-center  relative">
          <img
            src={profileImage}
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold">{name}</h2>
            <p className="text-sm text-gray-500">{email}</p>
          </div>
          <div><CiEdit size={24} className="absolute top-0 right-0 cursor-pointer" onClick={() => setIsModalOpen(true)}/></div>
        </div>
        <button
          onClick={() => navigate("/")}
          className="w-full py-2 border-2 border-Primary text-Primary hover:bg-Primary hover:text-white rounded-lg font-semibold text-lg"
        >
          {t("auth.logout")}
        </button>

         {/* profile section editable modal  */}
        {/* Modal */}
        {isModalOpen && (
          <div className="absolute bottom-[100%] left-1/2 -translate-x-1/2 w-[95%] bg-white border border-gray-200 rounded-xl p-4 shadow-xl z-50 transition-all duration-300">
            <div className="flex justify-center  relative mb-4">
              <img
                src={profileImage}
                alt="Editable Profile"
                className="w-20 h-20 rounded-full object-cover"
              />
              <button
                className="absolute bottom-0 right-[calc(50%-40px)] bg-white border p-2 rounded-full"
                onClick={() => fileInputRef.current.click()}
              >
                <FaCamera className="text-gray-600" />
              </button>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImageChange}
                className="hidden"
              />
            </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-textClr">{t("sidebar.name")}</label>
              <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mb-2 p-2 border rounded outline-0"
              placeholder="Name"
            />
          </div>
            

            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-2 w-full bg-Primary text-white py-2 rounded font-semibold"
            >
              {t("sidebar.save")}
            </button>
            <button>
              <RxCross2
                className="absolute top-2 right-2 text-gray-600 cursor-pointer"
                onClick={() => setIsModalOpen(false)}
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
