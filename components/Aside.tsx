import { links } from "../data/dummy";
import { useRouter } from "next/router";
import Link from "next/link";
import { FiStar, FiEdit, FiCrosshair } from "react-icons/fi";

import { AiOutlineBars, AiOutlineSetting } from "react-icons/ai";

const Aside = ({ toggle, setToggle }: { toggle: boolean; setToggle: any }) => {
  const router = useRouter();

  return (
    <aside
      style={{ display: toggle ? "block" : "hidden" }}
      className="fixed md:w-[90%] hidden lg:block   lg:w-72 overflow-y-auto scrollbar-hide bg-white shadow-2xl p-6  shadow-black-50 h-full"
    >
      <h1 className="text-2xl mb-10 font-bold">
        <span className="text-blue-400">Dawood</span>
      </h1>
      <AiOutlineSetting className="text-white text-5xl bg-blue-400 p-1  z-50 fixed bottom-6 right-4 rounded-full" />

      {/* Ecommmercer */}
      <div className="flex flex-col sm:gap-10 gap-6 ">
        {links.map((link, index) => {
          return (
            <div key={index} className="flex flex-col gap-4">
              <p className="text-gray-400 uppercase text-lg">{link.title}</p>
              <div className="flex flex-col text-gray-700 gap-6 ">
                {link.links.map((link, index) => {
                  return (
                    <Link
                      href={link.path}
                      key={index}
                      style={{}}
                      className={
                        router.route === link.path
                          ? `flex items-center p-2 hover:bg-gray-100 hover:rounded text-blue-100  gap-4 text-md bg-blue-400`
                          : `flex items-center p-2 hover:bg-gray-100 hover:rounded  gap-4 text-md`
                      }
                    >
                      <div
                        className={
                          router.route === link.path
                            ? `flex items-center p-2 hover:bg-gray-100 hover:rounded hover:text-gray-400 text-blue-100  gap-4 text-md bg-blue-400`
                            : `flex items-center p-2 hover:bg-gray-100 hover:rounded  gap-4 text-md`
                        }
                      >
                        <div>{link.icon}</div>

                        <p className="capitalize">{link.name}</p>
                      </div>
                    </Link>
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
