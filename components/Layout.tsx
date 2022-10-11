import Aside from "./Aside";

interface INode {
  children: React.ReactNode;
}
const Layout = ({ children }: INode) => {
  return (
    <div className="flex">
      <Aside />
      {children}
    </div>
  );
};

export default Layout;
