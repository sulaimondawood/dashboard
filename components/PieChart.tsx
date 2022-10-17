import { Pie, PieChart } from "recharts";
import { pieChartData } from "../data/dummy";
const PieChat = () => {
  return (
    <div className="flex justify-between">
      <div>
        <p className="text-xl">$43,246</p>
        <p className="text-gray-300">Yearly sales</p>
      </div>
    </div>
  );
};

export default PieChat;
