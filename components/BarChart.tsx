import { BarChart, Bar, XAxis } from "recharts";

const data = [
  { name: "Jan", data: 10 },
  { name: "Feb", data: 15 },
  { name: "Mat", data: 20 },
  { name: "Apr", data: 30 },
  { name: "May", data: 40 },
  { name: "Jun", data: 50 },
];
const BarChat = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between ">
        <p className="text-2xl text-white">Earnings</p>
        <p className="text-2xl font-semibold text-white">$63,488.78</p>
      </div>
      <BarChart width={450} data={data} height={300} barSize={100}>
        <Bar dataKey="data" fill="#eee" />
        {/* <XAxis hide /> */}
      </BarChart>
    </div>
  );
};

export default BarChat;
