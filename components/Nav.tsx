import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { BsMinecart } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import avatar from "../data/avatar.jpg";
import Profile from "./Profile";
import Notification from "./Notification";
import Message from "./Messages";
import { useState } from "react";
const Nav = () => {
  const [isMessage, setIsMessageActive] = useState(false);
  const [isProfile, setIsProfileActive] = useState(false)!;
  const [isNotification, setIsNotificationActive] = useState(false);

  return (
    <div>
      <nav className="flex w-screen lg:w-full justify-between items-center py-4 px-4 lg:py-6 lg:px-10   ">
        <div className=" lg:hidden">
          <FaBars className="text-blue-500 text-3xl " />
        </div>

        <div className="flex gap-4 items-center">
          <BsMinecart className="text-pink-500 text-2xl lg:text-xl" />
          <div className="relative">
            <FiMessageSquare
              onClick={() => setIsMessageActive(!isMessage) as any}
              className="text-pink-500 text-2xl lg:text-xl"
            />
            {isMessage && <Message />}
          </div>
          <div className="relative">
            <IoMdNotificationsOutline
              onClick={() => setIsNotificationActive(!isNotification) as any}
              className="text-pink-500 text-2xl lg:text-xl"
            />
            {isNotification && <Notification />}
          </div>
          <div
            onClick={() => setIsProfileActive(!isProfile) as any}
            className="flex gap-2 items-center relative justify-center"
          >
            <img
              className=" w-7 h-7 rounded-full"
              src={avatar.src}
              alt="image"
            />
            <p className="text-sm text-gray-400">Hi, Dawood</p>
            {isProfile && <Profile />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
