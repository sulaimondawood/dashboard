import type { NextPage } from "next";
import Head from "next/head";
import Aside from "../components/Aside";
import Main from "../components/Main";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dashboard -- Dawood</title>
        <meta name="description" content="Generated by create next app" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="">
        <Aside />
        <Main />
      </main>
    </div>
  );
};

export default Home;
