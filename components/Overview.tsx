import {
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { dropdownData } from "../data/dummy";
import { lineChartData } from "../data/dummy";
const color = ["red", "green", "blue"];

const Overview = () => {
  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex items-center mb-10 justify-between">
        <p className="text-lg font-medium">Sales Overview</p>
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

      <ResponsiveContainer width="100%" aspect={1.5}>
        <LineChart data={lineChartData[0]}>
          {lineChartData.map((item, index) => {
            return <Line key={index} strokeWidth={2} data={item} dataKey="y" />;
          })}

          {/* {series.map((s) => (
            <Line dataKey="value" data={s.data} name={s.name} key={s.name} />
          ))} */}
          <XAxis dataKey="x" allowDuplicatedCategory={false} />
          <YAxis axisLine={false} tickLine={false} />
          <CartesianGrid vertical={false} />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Overview;
