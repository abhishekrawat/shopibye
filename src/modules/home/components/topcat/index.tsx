import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data";
import Link from "next/link"
const TopCat = (props) => {
  const { data } = useFeaturedProductsQuery();

  return (
    <div className="mt-16 bg-white">
      <div className="px-4 mx-auto max-w-screen-3xl">
        <div className="flex flex-wrap">
          <div className="w-full mb-1 lg:w-1/2 lg:mb-0">
            <div className="relative w-full h-64 mb-1 bg-center bg-no-repeat bg-cover  bg-[url('/women.jpg')] ">
              <div className="absolute w-full h-64 bg-center bg-no-repeat bg-gradient-to-t from-black to-transparent "></div>
              <a className="absolute inset-0 flex items-end" href="#">
                <div className="pb-6 pl-6">
                  <h3 className="text-6xl font-bold text-transparent font-heading bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600">
                    Women
                  </h3>
                  <p className="text-xl font-bold text-white font-heading">
     
                  </p>
                </div>
              </a>
            </div>
            <div className="relative w-full h-64 bg-center bg-no-repeat bg-cover bg-[url('/men.jpg')]">
            <div className="absolute w-full h-64 bg-center bg-no-repeat bg-gradient-to-t from-black to-transparent "></div>
              
              <a className="absolute inset-0 flex items-end" href="#">
              <div className="pb-6 pl-6">
                  <h3 className="text-6xl font-bold text-transparent font-heading bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                    Men
                  </h3>
                
                </div>
              </a>
            </div>
          </div>
          <a href="#" className="w-full lg:pl-1 lg:w-1/2">
            <div className="relative inline-block w-full mb-1 bg-no-repeat bg-cover h-96 lg:h-full bg-[url('/sale.jpg')]">
            <div className="absolute w-full h-full bg-center bg-no-repeat bg-gradient-to-t from-black to-transparent "></div>
            
              <div className="absolute bottom-0 left-0 pb-4 pl-6">
              
                <span className="text-xl font-bold text-white font-heading">
                  End of Season
                </span>
                <h3 className="mt-0 mb-2 text-6xl font-bold text-transparent font-heading bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
                  Sale
                </h3>
                
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopCat;
