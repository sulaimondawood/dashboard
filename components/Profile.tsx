import { AiFillCloseCircle, AiOutlineCloseCircle } from "react-icons/ai";
import Avatar from "../data/avatar.jpg";
import { userProfileData } from "../data/dummy";

export default function Profile() {
  return (
    <article className="bg-white rounded-lg w-[350px] z-50 p-8 absolute right-0 top-12 shadow-md">
      <div className="flex justify-between items-center ">
        <p className="text-xl font-semibold">User Profile </p>
        <AiOutlineCloseCircle className="text-gray-400 text-2xl" />
      </div>
      <div className="flex items-center justify-center gap-4 mt-7">
        <img
          className="w-24 h-24 rounded-full
        "
          src={Avatar.src}
          alt=""
        />
        <div className="flex flex-col ">
          <p className="text-xl font-semibold">Dawood Sulaimon</p>
          <p className="capitalize text-sm text-gray-400">Frontend Engineer</p>
          <p className="text-sm text-gray-500">sulaimondawod@gmail.com</p>
        </div>
      </div>
      <hr className="border-gray-200 border-1 my-4" />

      <div className="flex items-center gap-4 flex-col ">
        {userProfileData.map((data) => {
          const { icon, desc, iconBg, iconColor, title } = data;
          return (
            <>
              <div className="flex gap-4 items-center justify-start w-full ">
                <div
                  className="text-2xl p-4 rounded-lg"
                  style={{ backgroundColor: iconBg, color: iconColor }}
                >
                  {icon}
                </div>
                <div className="">
                  <p className="text-xl font-semibold">{title}</p>
                  <p className="text-gray-400">{desc}</p>
                </div>
              </div>
              <hr className="border-gray-200 border-1 border-solid w-full " />
            </>
          );
        })}
      </div>
      <button className="text-lg bg-blue-500 text-white w-full mt-6 p-3 rounded-md">
        Logout
      </button>
    </article>
  );
}
