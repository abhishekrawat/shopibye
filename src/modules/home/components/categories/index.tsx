import Image from "next/future/image";
import Link from "next/link";
import { chunk } from "lodash";
import {
  useFeaturedProductsQuery,
  useNavigationCollections,
} from "@lib/hooks/use-layout-data";

const Categories = (props) => {
  const { data: collections, isLoading: loadingCollections } =
    useNavigationCollections();

  return (
    <div className="px-4 py-16 bg-white lg:content-container">
      <div className="flex items-center justify-between mb-8">
        <span className="text-2xl font-bold text-gray-600 ">{props.name}</span>
      </div>
      <div >
        {collections &&
          chunk(collections, 6).map((chunk, index) => {
            return (
              <ul key={index}className="grid grid-cols-3 small:grid-cols-6 gap-x-4 gap-y-4">
                {chunk.map((collection) => {
                  return (
                    <div key={collection.id} className="pb-3">
                      <Link href={`/collections/${collection.id}`}>
                        <div>
                          <Image
                            src={`/${collection.title}.jpg`}
                            width={200}
                            layout={"raw"}
                            height={200}
                            priority={true}
                            quality={50}
                            className="inset-0 transition ease-in-out rounded-full hover:scale-110"
                            draggable="false"
                          />
                          <span className="flex justify-center mt-2 text-xl font-bold text-gray-600">
                            {collection.title}
                          </span>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </ul>
            );
          })}
      </div>
    </div>
  );
};

export default Categories;
