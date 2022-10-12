import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data";
import UnderlineLink from "@modules/common/components/underline-link";
import ProductPreview from "@modules/products/components/product-preview";
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview";

const TopCat = (props) => {
  const { data } = useFeaturedProductsQuery();

  return (
    <div className="mt-16 bg-gray-100">
      <div className="w-full px-4 mx-auto lg:max-w-screen-2xl">
        <div className="flex flex-wrap">
          <div className="w-full mb-1 lg:w-1/2 lg:mb-0">
            <div className="relative w-full h-64 mb-1 bg-center bg-no-repeat bg-cover bg-gradient-to-r from-cyan-500 to-blue-500">
              {/* <span className="inline-block px-2 py-1 mt-4 ml-4 text-xs font-bold text-red-500 bg-white border-2 border-red-500 rounded-full font-heading">
                -10%
              </span> */}
              <a className="absolute inset-0 flex items-end" href="#">
                <div className="pb-12 pl-12">
                  <h3 className="text-3xl font-bold text-white font-heading">
                    Women
                  </h3>
                  <p className="text-xl font-bold text-white font-heading">
                    {/* <span>$10.30</span> */}
                    {/* <span className="text-sm font-normal line-through">
                      11.99
                    </span> */}
                  </p>
                </div>
              </a>
            </div>
            <div className="relative w-full h-64 bg-center bg-no-repeat bg-cover bg-gradient-to-r from-sky-500 to-indigo-500">
              {/* <span className="inline-block px-2 py-1 mt-4 ml-4 text-xs font-bold text-red-500 bg-white border-2 border-red-500 rounded-full font-heading">
                -10%
              </span> */}
              <a className="absolute inset-0 flex items-end" href="#">
                <div className="pb-12 pl-12">
                  <h3 className="text-3xl font-bold text-white font-heading">
                    Men
                  </h3>
                  {/* <p className="text-xl font-bold text-white font-heading">
                    <span>$126.90</span>
                    <span className="text-sm font-normal line-through">
                      $139.90
                    </span>
                  </p> */}
                </div>
              </a>
            </div>
          </div>
          <div className="w-full lg:pl-1 lg:w-1/2">
            <div className="relative inline-block w-full mb-1 bg-no-repeat bg-cover h-96 lg:h-full bg-gradient-to-r from-purple-500 to-pink-500">
              {/* <span className="inline-block px-2 py-1 mt-4 ml-4 text-xs font-bold text-blue-500 uppercase bg-white border-2 border-blue-400 rounded-full font-heading">
                New
              </span> */}
              <div className="absolute bottom-0 left-0 pb-20 pl-12">
                <span className="text-xl font-bold text-orange-300 font-heading">
                  End of Season
                </span>
                <h3 className="mt-3 mb-2 text-3xl font-bold text-white font-heading">
                  Sale
                </h3>
                {/* <p className="mb-10 font-bold text-white font-heading">
                  $379.90
                </p>
                <a
                  className="inline-block px-8 py-4 font-bold text-white uppercase transition duration-200 bg-orange-300 rounded-md hover:bg-orange-400 font-heading"
                  href="#"
                >
                  Buy
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCat;