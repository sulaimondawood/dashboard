import { links } from "../data/dummy";

const Aside = () => {
  console.log(links);

  return (
    <aside className="fixed w-72 overflow-auto bg-white shadow-2xl p-6  h-screen shadow-black-50">
      <h1 className="text-2xl mb-10 font-bold">
        Dash <span className="text-blue-700">Board</span>
      </h1>

      {/* Ecommmercer */}
      <div className="flex flex-col gap-6">
        {links.map((link, index) => {
          return (
            <div key={index} className="flex flex-col gap-4">
              <p className="text-gray-400 uppercase text-lg">{link.title}</p>
              <div className="flex flex-col text-gray-700 gap-6 ">
                {link.links.map((link) => {
                  return (
                    <div className="flex gap-2 text-lg">
                      <div>{link.icon}</div>

                      <p>{link.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Aside;
