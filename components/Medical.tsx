import { medicalproBranding } from "../data/dummy";
const Medical = () => {
  return (
    <div className="bg-white rounded-lg p-5">
      <div className="flex justify-between items-center">
        <p className="text-xl font-medium">MedicalPro Branding</p>
        <p className="text-3xl text-gray-300">...</p>
      </div>
      <p className="text-sm text-red-500  mt-4 rounded-xl">20 NOV, 2022</p>
      <div className="flex gap-4 mt-4 border-b border-gray-300">
        {medicalproBranding.data.map((data, index) => {
          const { title, desc } = data;
          return (
            <div key={index} className="border-r px-3 border-gray-300">
              <p className="text-gray-500 pb-2 ">{title}</p>
              <p className="text-xs font-semibold">{desc}</p>
            </div>
          );
        })}
      </div>

      <div>
        <p className="text-lg my-4 font-medium">Teams</p>
        <div className="flex gap-4 pb-2 border-b border-gray-300">
          {medicalproBranding.teams.map((team, index) => {
            const { name, color } = team;
            return (
              <div key={index} className="">
                <p
                  style={{ backgroundColor: color }}
                  className=" rounded-lg p-1 text-xs text-red-800 "
                >
                  {name}
                </p>
              </div>
            );
          })}
        </div>
        <p className="text-lg my-4 font-medium">Leaders</p>
        <div className="flex gap-4">
          {medicalproBranding.leaders.map((item: any) => {
            const { image } = item;
            // console.log(image);

            return (
              <img src={image.src} alt="" className="rounded-full w-12 h-12" />
            );
            // return <h1>Dawood</h1>;
          })}
        </div>

        <hr className="border-1 border-gray-200 mt-8" />
        <div className="flex justify-between  mt-4">
          <button className="bg-blue-500 text-white p-4 rounded-xl">Add</button>
          <p className="text-gray-400 text-sm">36 Recent Transactions</p>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Medical;
