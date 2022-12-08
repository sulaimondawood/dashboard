import Product from "../data/product4.jpg";
const Daily = () => {
  return (
    <div className="bg-white p-5 rounded-lg">
      <div className="flex justify-between mb-4 items-center">
        <p className="text-xl font-medium">Daily Activities</p>
        <p className="text-3xl text-gray-500 ">...</p>
      </div>
      <div className="w-full h-auto">
        <img className="h-auto w-full object-cover" src={Product.src} alt="" />
      </div>
      <div>
        <p className="text-xl font-medium pt-2">React 18 coming soon!</p>
        <p className="text-gray-500">By Dawood Sulaimon</p>
        <p className="text-sm text-gray-500 pt-4">
          This will be the small description for the news you have shown here.
          There could be some great info.
        </p>
        <button className="bg-blue-400 p-3 rounded-md mt-4 text-white ">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Daily;
