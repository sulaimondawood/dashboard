import type { NextPage } from "next";
import Head from "next/head";
import { BarChart } from "recharts";
import LineChart from "../components/LineChart";
import Nav from "../components/Nav";
import StackedBar from "../components/StackedBar";
import { earningData } from "../data/dummy";
import BarChat from "../components/BarChart";
import PieChart from "../components/PieChart";
import RecentTrans from "../components/RecentTrans";
import Overview from "../components/Overview";
import Weekly from "../components/Weekly";
import Medical from "../components/Medical";
import Daily from "../components/Daily";
import { useRouter } from "next/router";
const Home: NextPage = () => {
  const router = useRouter();
  // console.log(router);

  return (
    <div>
      <Head>
        <title>Dashboard -- Dawood</title>
        <meta name="description" content="Generated by create next app" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="font-pop w-screen lg:w-[calc(100vw-288px)]   lg:ml-64">
        <Nav />
        <div className=" px-4 lg:px-10 ">
          <div className="grid gap-4 grid-cols lg:grid-cols-4 lg:px-20  mt-20 ">
            {earningData.map((data, index) => {
              return (
                <div
                  key={index}
                  className="flex rounded-xl flex-col bg-white gap-4 py-8 px-6   lg:w-60"
                >
                  <div
                    className="text-3xl lg:text-2xl w-fit rounded-full p-5 lg:p-4"
                    style={{
                      color: data.iconColor,
                      backgroundColor: data.iconBg,
                    }}
                  >
                    {data.icon}
                  </div>
                  <div className="flex items-center gap-4 ">
                    <p className="text-2xl lg:text-lg">{data.amount}</p>
                    <p
                      className={`text-md lg:text-sm text-red-500 ${data.pcColor}`}
                    >
                      {data.percentage}
                    </p>
                  </div>
                  <p className="text-gray-400 text-3xl">{data.title}</p>
                </div>
              );
            })}
          </div>

          {/* Charts */}
        </div>
        <div className="w-fit mx-4 p-5 lg:mx-auto  rounded-md my-10 bg-white">
          <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-2">
            <div className="flex flex-col">
              <p className="text-xl mb-10 capitalize font-medium">
                Revenue Updates
              </p>
              <div className="flex flex-col lg:pl-10 gap-8">
                <div className="flex flex-col gap-1">
                  <h1 className="font-medium text-3xl">
                    $93,438
                    <span className="text-green-100 bg-green-400 rounded-full p-2 text-sm">
                      20%
                    </span>
                  </h1>
                  <p className="text-gray-400 text-sm">Budget</p>
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="font-medium text-3xl">$48,487</h1>
                  <p className="text-gray-400 text-sm">Expense</p>
                </div>
                <LineChart />
                <p className="bg-blue-500 self-start rounded-md px-4 py-2 text-blue-100">
                  Download Report
                </p>
              </div>
            </div>

            <div className="hidden lg:block lg:bg-gray-200 lg:w-[1px] lg:h-80"></div>
            <div>
              <StackedBar />
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="grid lg:grid-cols-fixed gap-10 px-4 lg:px-14 ">
          <RecentTrans />
          <Overview />
        </div>

        {/* Details footer? */}
        <div className="grid lg:grid-cols-3 px-4 lg:px-14 gap-4 my-10">
          <Weekly />
          <Medical />
          <Daily />
        </div>
      </main>
    </div>
  );
};

export default Home;
