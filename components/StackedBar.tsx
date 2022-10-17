import { stackedChartData } from "../data/dummy";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";
const StackedBar = () => {
  return (
    <BarChart
      width={500}
      height={400}
      data={stackedChartData}
      margin={{ left: 10, right: 10 }}
      barGap={100}
    >
      <CartesianGrid vertical={false} />
      <Bar dataKey="Budget" stackId="stack" fill="gray" />
      <Bar dataKey="Expense" stackId="stack" fill="blue" />
      <Tooltip />
      <XAxis tickLine={false} axisLine={false} dataKey="name" />
      <YAxis tickLine={false} axisLine={false} />
      <Legend />
    </BarChart>
  );
};

export default StackedBar;
