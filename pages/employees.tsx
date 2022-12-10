import { NextPage } from "next";
import Nav from "../components/Nav";
import { employeesData } from "../data/dummy";
const Employees: NextPage = () => {
  return (
    <div>
      <div className="lg:w-[calc(100vw-288px)] mx-2   lg:ml-64  rounded-lg">
        {/* <Nav /> */}
        <div className="bg-white lg:w-[80%] mt-20 px-10 rounded-lg container">
          <h1 className="text-3xl font-semibold py-10"> Employees Data</h1>
          <table className="w-full">
            <thead>
              <tr className=" border">
                <th className="  text-center font-sm text-gray-400 font-normal py-4">
                  Employee
                </th>
                <th className="  text-center font-xs text-gray-400 font-normal py-4">
                  Designation
                </th>
                <th className="text-center font-sm text-gray-400 font-normal py-4">
                  Country
                </th>
                <th className="text-center font-sm text-gray-400 font-normal py-4">
                  Hire Date
                </th>
                <th className="text-center font-sm text-gray-400 font-normal py-4">
                  Reports to
                </th>
                <th className="text-center font-sm text-gray-400 font-normal py-4">
                  Employee ID
                </th>
              </tr>
            </thead>
            <tbody>
              {employeesData.map((item) => {
                const {
                  EmployeeID,
                  Name,
                  Title,
                  HireDate,
                  Country,
                  ReportsTo,
                  EmployeeImage,
                } = item;

                // const image = ProductImage.src;

                return (
                  <tr className=" border">
                    <td className="text-xs lg:text-base text-center flex gap-3 items-center p-4">
                      <img
                        className="w-10 rounded-full h-10"
                        src={EmployeeImage.src}
                        alt=""
                      />
                      {Name}
                    </td>
                    <td className="text-xs lg:text-base text-center p-4">
                      {Title}
                    </td>
                    <td className="text-xs lg:text-base text-center p-4">
                      {Country}
                    </td>
                    <td className="text-center p-4 text-xs lg:text-base">
                      {HireDate}
                    </td>
                    <td className="text-xs lg:text-base  text-center p-4">
                      {ReportsTo}
                    </td>
                    <td className="text-center p-4 text-xs lg:text-base">
                      {EmployeeID}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Employees;
