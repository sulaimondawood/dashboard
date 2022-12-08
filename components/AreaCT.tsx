import {
  Area,
  AreaChart,
  ResponsiveContainer,
  XAxis,
  CartesianGrid,
  Tooltip,
  YAxis,
} from "recharts";

import { useState, useEffect } from "react";

const data = [
  {
    name: "Page A",
    monthly: 1000,
    pv: 2400,
  },
  {
    name: "Page B",
    monthly: 2800,
    pv: 1398,
  },
  {
    name: "Page C",
    monthly: 1800,
    pv: 9800,
  },
  {
    name: "Page D",
    monthly: 3800,
    pv: 3908,
  },
  {
    name: "Page E",
    monthly: 4090,
    pv: 4800,
  },
];

const AreaCT: JSX.Element | any = () => {
  const [isSSR, setIsSSR] = useState(false);
  useEffect(() => {
    setIsSSR(true);
  }, []);
  return (
    isSSR && (
      <AreaChart width={300} height={200} data={data}>
        <Tooltip />
        <Area
          type="monotone"
          dataKey="monthly"
          stroke="#1aff8c"
          strokeWidth={2}
          fill="#e6fff2"
        />
      </AreaChart>
    )
  );
};

export default AreaCT;
