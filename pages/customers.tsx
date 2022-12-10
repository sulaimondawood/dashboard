import React from "react";
import Nav from "../components/Nav";
import { customersData } from "../data/dummy";
const Customers = () => {
  return (
    <div>
      <div className="w-[calc(100vw-288px)] mx-4 lg:mx-0  lg:ml-64  rounded-lg">
        {/* <Nav /> */}

        <div className="bg-white w-fit lg:w-[80%]  mt-20 px-10 rounded-lg container">
          <h1 className="text-2xl lg:text-3xl font-semibold py-10">
            Customers Data
          </h1>
          <table className="w-full">
            <thead>
              <tr className=" border">
                <th className="  text-center font-sm text-gray-400 font-normal py-4">
                  Employee
                </th>
                <th className="  text-center font-xs text-gray-400 font-normal py-4">
                  Email
                </th>
                <th className="text-center font-sm text-gray-400 font-normal py-4">
                  Country
                </th>
                <th className="text-center font-sm text-gray-400 font-normal py-4">
                  Designation
                </th>
                <th className="text-center font-sm text-gray-400 font-normal py-4">
                  Budgets
                </th>
                <th className="text-center font-sm text-gray-400 font-normal py-4">
                  Weeks
                </th>
                <th className="text-center font-sm text-gray-400 font-normal py-4">
                  Employee ID
                </th>
                <th className="text-center font-sm text-gray-400 font-normal py-4">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {customersData.map((item) => {
                const {
                  CustomerID,
                  CustomerName,
                  CustomerEmail,
                  CustomerImage,
                  ProjectName,
                  Status,
                  StatusBg,
                  Weeks,
                  Budget,
                  Location,
                } = item;

                // const image = ProductImage.src;

                return (
                  <tr className=" border">
                    <td className=" text-xs lg:text-base text-center flex gap-3 items-center p-4">
                      <img
                        className="w-10 rounded-full h-10"
                        src={CustomerImage.src}
                        alt=""
                      />
                      {CustomerName}
                    </td>
                    <td className="text-xs lg:text-base  text-center p-4">
                      {CustomerEmail}
                    </td>
                    <td className=" text-xs lg:text-base text-center p-4">
                      {Location}
                    </td>
                    <td className=" text-xs lg:text-base text-center p-4">
                      {ProjectName}
                    </td>
                    <td className="text-center p-4  text-xs lg:text-base">
                      {Budget}
                    </td>
                    <td className="text-xs lg:text-base text-center p-4">
                      {Weeks}
                    </td>
                    <td className="text-center p-4 text-xs lg:text-base">
                      {CustomerID}
                    </td>
                    <td
                      style={{ color: StatusBg }}
                      className={`text-xs lg:text-base text-center font-bold p-1 mr-4 `}
                    >
                      {Status}
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

export default Customers;
