import { AiFillCloseCircle, AiOutlineCloseCircle } from "react-icons/ai";
import Avatar from "../data/avatar.jpg";
import Avatar2 from "../data/avatar2.jpg";
import Avatar3 from "../data/avatar3.png";
import Avatar4 from "../data/avatar4.jpg";

const Message = () => {
  return (
    <article className="bg-white rounded-lg w-[350px] z-50 p-8 absolute right-0 top-12 shadow-md">
      <div className="flex justify-between items-center ">
        <p className="text-xl font-semibold">Messages </p>
        <AiOutlineCloseCircle className="text-gray-400 text-2xl" />
      </div>

      <div className="flex flex-col gap-4 mt-10">
        <div className="flex gap-3 ">
          <img className="w-10 h-10 rounded-full " src={Avatar.src} alt="" />
          <div>
            <p className="text-lg font-semibold">Dawood Joined the team</p>
            <p className="text-gray-400">Congratulate him</p>
          </div>
        </div>
        <div className="flex gap-3 ">
          <img className="w-10 h-10 rounded-full " src={Avatar2.src} alt="" />
          <div>
            <p className="text-lg font-semibold">New message recieved</p>
            <p className="text-gray-400">Kabir sent you a message</p>
          </div>
        </div>
        <div className="flex gap-3 ">
          <img className="w-10 h-10 rounded-full " src={Avatar3.src} alt="" />
          <div>
            <p className="text-lg font-semibold">Segun Sent you Some funds</p>
            <p className="text-gray-400">Click to accept funds</p>
          </div>
        </div>
        <div className="flex gap-3 ">
          <img className="w-10 h-10 rounded-full " src={Avatar4.src} alt="" />
          <div>
            <p className="text-lg font-semibold">
              Cornerstone commited a new update
            </p>
            <p className="text-gray-400">Check to review</p>
          </div>
        </div>
      </div>
      <button className="text-lg bg-blue-500 text-white w-full mt-6 p-3 rounded-md">
        See all messages
      </button>
    </article>
  );
};

export default Message;
