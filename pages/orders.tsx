import { StaticImageData } from "next/image";
import Nav from "../components/Nav";
import { ordersData } from "../data/dummy";
const Order = () => {
  return (
    <div className="lg:w-[calc(100vw-288px)] mx-4   lg:ml-72  rounded-lg">
      <Nav />

      <div className="bg-white  lg:w-[90%] mt-20 px-10 rounded-lg container">
        <h1 className="text-3xl font-semibold py-10"> Latest Orders</h1>
        <table className="w-full">
          <thead>
            <tr className=" border">
              <th className="  text-center font-sm text-gray-400 font-normal py-4">
                Image
              </th>
              <th className="  text-center font-xs text-gray-400 font-normal py-4">
                Item
              </th>
              <th className="text-center font-sm text-gray-400 font-normal py-4">
                Customer Name
              </th>
              <th className="text-center font-sm text-gray-400 font-normal py-4">
                Total Amount
              </th>
              <th className="text-center font-sm text-gray-400 font-normal py-4">
                Status
              </th>
              <th className="text-center font-sm text-gray-400 font-normal py-4">
                Order ID
              </th>
              <th className="text-center font-xs text-gray-400 font-normal py-4">
                Location
              </th>
            </tr>
          </thead>
          <tbody>
            {ordersData.map((item) => {
              const {
                CustomerName,
                Status,
                ProductImage,
                OrderItems,
                Location,
                TotalAmount,
                OrderID,
                StatusBg,
              } = item;

              // const image = ProductImage.src;
              console.log(ProductImage);

              return (
                <tr className=" border">
                  <td className="text-center p-4">
                    <img
                      className="lg:w-20 w-10 lg:h-20 rounded-full"
                      src={ProductImage.src}
                      alt=""
                    />
                  </td>
                  <td className="text-xs lg:text-base text-center p-4">
                    {" "}
                    {OrderItems}
                  </td>
                  <td className="text-xs lg:text-base text-center p-4">
                    {CustomerName}
                  </td>
                  <td className="text-xs lg:text-base text-center p-4">
                    {TotalAmount}
                  </td>
                  <td
                    style={{ color: StatusBg }}
                    className={` text-xs lg:text-base text-center h-fit  p-2 rounded-full vertical font-bold  `}
                  >
                    {Status}
                  </td>
                  <td className=" text-xs lg:text-base text-center p-4">
                    {OrderID}
                  </td>
                  <td className="text-center p-4  text-xs lg:text-base">
                    {Location}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
