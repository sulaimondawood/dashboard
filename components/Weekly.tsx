import { weeklyStats } from "../data/dummy";
import AreaCT from "./AreaCT";

const Weekly = () => {
  return (
    <div className="bg-white p-5 rounded-lg">
      <div className="flex justify-between items-center">
        <p className="text-lg lg:text-xl font-medium">Weekly Stats</p>
        <p className="text-3xl text-gray-500 ">...</p>
      </div>
      {weeklyStats.map((stat, index) => {
        const { icon, amount, title, desc, iconBg, pcColor } = stat;
        return (
          <div key={index} className="flex mt-6 flex-col gap-4">
            <div className="flex justify-between">
              <div className="flex gap-2">
                <div
                  style={{ backgroundColor: iconBg }}
                  className="text-xl p-3 self-start rounded-lg "
                >
                  {icon}
                </div>
                <div>
                  <p className="text-lg font-medium">{title}</p>
                  <p className="text-sm text-gray-400">{desc}</p>
                </div>
              </div>
              <p className="">{amount}</p>
            </div>
          </div>
        );
      })}
      <div className="pt-2">
        <AreaCT />
      </div>
    </div>
  );
};

export default Weekly;
