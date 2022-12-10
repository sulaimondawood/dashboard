// import { useState } from "preact/compat";
import { createContext, useState } from "react";
const Provider = () => {
  const [state, setState] = useState(false);
  const dataProvider = createContext({});
  return (
    <dataProvider.Provider value={{ state, setState }}></dataProvider.Provider>
  );
};

export default Provider;
