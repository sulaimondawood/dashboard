// import { stackedChartData } from "../data/dummy";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";

import { useState, useEffect } from "react";

const stackedChartData = [
  { name: "Jan", Budget: 91.1, Expense: 111.1 },
  { name: "Feb", Budget: 117.3, Expense: 127.3 },
  { name: "Mar", Budget: 133.4, Expense: 150.6 },
  { name: "Apr", Budget: 89.9, Expense: 102.4 },
  { name: "May", Budget: 99.9, Expense: 122.4 },
  { name: "Jun", Budget: 149.9, Expense: 160 },
  { name: "July", Budget: 159.9, Expense: 180.6 },
];
const StackedBar: JSX.Element | any = () => {
  const [isSSR, setIsSSR] = useState(false);
  useEffect(() => {
    setIsSSR(true);
  }, []);

  return (
    isSSR && (
      <div>
        <BarChart
          width={300}
          height={400}
          data={stackedChartData}
          margin={{ left: -20 }}
          // barGap={100}
        >
          {/* <CartesianGrid vertical={false} /> */}
          <Bar type="monotone" dataKey="Budget" stackId="stack" fill="gray" />
          <Bar type="monotone" dataKey="Expense" stackId="stack" fill="blue" />
          <Tooltip />
          <XAxis tickLine={false} axisLine={false} dataKey="name" />
          <YAxis tickLine={false} axisLine={false} />
          {/* <Legend /> */}
        </BarChart>
      </div>
    )
  );
};

export default StackedBar;
