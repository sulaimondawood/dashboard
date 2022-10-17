import { dropdownData } from "../data/dummy";
import { recentTransactions } from "../data/dummy";
const RecentTrans = () => {
  return (
    <div className="bg-white  p-6">
      <div className="flex items-center mb-10 justify-between">
        <p className="text-xl font-semibold">Recent Transactions</p>
        <select className="border-2 p-4 rounded-lg outline-none" name="" id="">
          {dropdownData.map((option) => {
            const { Time, Id }: { Time: string; Id: string } = option;
            return (
              <option key={Id} value={Time}>
                {Time}
              </option>
            );
          })}
        </select>
      </div>
      <div className="flex flex-col gap-6">
        {recentTransactions.map((recent) => {
          const {
            icon,
            amount,
            percentage,
            desc,
            title,
            iconColor,
            iconBg,
            pcColor,
          } = recent;
          return (
            <div className="flex justify-between ">
              <div className="flex gap-4">
                <p
                  style={{ color: iconColor, backgroundColor: iconBg }}
                  className={`text-2xl p-4 rounded-xl self-start`}
                >
                  {icon}
                </p>
                <div className="flex flex-col gap-1">
                  <p className="text-lg font-semibold">{title}</p>
                  <p className="text-gray-400 text-sm">{desc}</p>
                </div>
              </div>
              <p style={{ color: pcColor }} className="text-lg">
                {amount}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="mt-6" />
      <div className="flex justify-between  mt-4">
        <button className="bg-blue-500 text-white p-4 rounded-xl">Add</button>
        <p className="text-gray-400 text-sm">36 Recent Transactions</p>
      </div>
    </div>
  );
};

export default RecentTrans;
