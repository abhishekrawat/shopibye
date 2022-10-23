import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data";
import UnderlineLink from "@modules/common/components/underline-link";
import ProductPreview from "@modules/products/components/product-preview";
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview";
import Link from "next/link";
import Image from "next/image";

const Highlights = (props) => {
  return (
    <div className=" content-container pt-28">
      <div className="grid gap-2 md:grid-cols-2">
        <a className="justify-center h-full" href="#">
          <div className="relative h-full overflow-hidden rounded">
            <Image
              width={100}
              height={40}
              layout="responsive"
              className="object-cover h-full transition duration-1000 ease-in-out transform md:w-full hover:scale-105"
              src="/p1.png"
              alt=""
            />
          </div>
        </a>

        <a className="justify-center h-full" href="#">
          <div className="relative h-full overflow-hidden rounded">
            <Image
              layout="responsive"
              width={100}
              height={40}
              className="object-cover h-full transition duration-1000 ease-in-out transform md:w-full hover:scale-105"
              src="/p2.png"
              alt=""
            />
          </div>
        </a>

        <a className="justify-center h-full" href="#">
          <div className="relative h-full overflow-hidden rounded">
            <Image
              layout="responsive"
              width={100}
              height={40}
              className="object-cover h-full transition duration-1000 ease-in-out transform md:w-full hover:scale-105"
              src="/p3.png"
              alt=""
            />
          </div>
        </a>

        <a className="justify-center h-full" href="#">
          <div className="relative h-full overflow-hidden rounded">
            <Image
              layout="responsive"
              width={100}
              height={40}
              className="object-cover h-full transition duration-1000 ease-in-out transform md:w-full hover:scale-105"
              src="/p4.png"
              alt=""
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Highlights;
