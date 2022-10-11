import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { BsMinecart } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import avatar from "../data/avatar.jpg";

const Nav = () => {
  return (
    <div>
      <nav className="flex justify-between items-center py-6 px-10   ">
        <div className="text-3xl">
          {/* <FaBars className="text-pink-500 text-xl" /> */}
        </div>
        <div className="flex gap-4 items-center">
          <BsMinecart className="text-pink-500 text-xl" />
          <FiMessageSquare className="text-pink-500 text-xl" />
          <IoMdNotificationsOutline className="text-pink-500 text-xl" />
          <img className="w-7 h-7 rounded-full" src={avatar.src} alt="image" />
          <p className="text-sm text-gray-400">Hi, Dawood</p>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
