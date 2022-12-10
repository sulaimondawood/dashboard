import Aside from "./Aside";
import Nav from "./Nav";
import { useState } from "react";
interface INode {
  children: React.ReactNode;
}
const Layout = ({ children }: INode) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex">
      <Aside toggle={toggle} setToggle={setToggle} />
      <div className="flex flex-col">
        <Nav toggle={toggle} setToggle={setToggle} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
