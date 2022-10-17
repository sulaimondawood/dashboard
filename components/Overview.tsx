import { dropdownData } from "../data/dummy";

const Overview = () => {
  return (
    <div>
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
    </div>
  );
};

export default Overview;
