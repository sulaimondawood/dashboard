import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import React, { useState } from "react";
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

export const Provider = React.createContext("");
function MyApp({ Component, pageProps }: AppProps) {
  const [state, setState] = useState(false);
  return (
    <Layout>
      <Provider.Provider value={"Dawood"}>
        <Component {...pageProps} />
      </Provider.Provider>
    </Layout>
  );
}

export default MyApp;
