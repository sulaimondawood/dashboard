import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { BsMinecart } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import avatar from "../data/avatar.jpg";
import Profile from "./Profile";
import Notification from "./Notification";
import Message from "./Messages";
import { useState, useContext } from "react";
import { Provider } from "../pages/_app";
const Nav = ({ toggle, setToggle }: { toggle: boolean; setToggle: any }) => {
  const [isMessage, setIsMessageActive] = useState(false);
  const [isProfile, setIsProfileActive] = useState(false)!;
  const [isNotification, setIsNotificationActive] = useState(false);

  return (
    <div>
      <nav className="flex  justify-between lg:justify-end w-screen lg:w-full  items-center py-4 px-4 lg:py-6 lg:px-10   ">
        <div className=" lg:hidden">
          <FaBars
            onClick={() => setToggle(!toggle)}
            className="text-blue-500 text-xl "
          />
        </div>

        <div className="flex gap-4 items-center">
          <BsMinecart className="text-blue-500  text-xl" />
          <div className="relative">
            <FiMessageSquare
              onClick={() => setIsMessageActive(!isMessage) as any}
              className="text-blue-500 text-xl"
            />
            {isMessage && <Message />}
          </div>
          <div className="relative">
            <IoMdNotificationsOutline
              onClick={() => setIsNotificationActive(!isNotification) as any}
              className="text-blue-500 text-xl"
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
