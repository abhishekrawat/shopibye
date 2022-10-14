import Image from "next/future/image";
import Link from "next/link"
// import Image from "next/image";


const Categories = (props) => {
  return (
    <div className="px-4 py-16 bg-white lg:content-container">
      <div className="flex items-center justify-between mb-8">
        <span className="text-2xl font-bold text-gray-600 ">{props.name}</span>
        <span className="text-lg font-normal text-gray-600 ">
          {/* View all */}
        </span>
      </div>
      <div className="">
        <div className="grid grid-cols-3 small:grid-cols-6 gap-x-4 gap-y-4">
          <a href="#">
            <Image
              src="/c1.jpg"
              width={200}
              layout={"raw"}
              height={200}
              priority={true}
              quality={50}
              alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
              className="inset-0 transition ease-in-out rounded-full hover:scale-110"
              draggable="false"
            />
            <span className="flex justify-center mt-2 text-xl font-bold text-gray-600">
              Tops
            </span>
          </a>

          <a href="#">
            <Image
              src="/c2.jpg"
              width={200}
              height={200}
              layout={"responsive"}
              priority={true}
              quality={50}
              alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
              className="inset-0 transition ease-in-out rounded-full hover:scale-110"
              draggable="false"
            />
            <span className="flex justify-center mt-2 text-xl font-bold text-gray-600">
              Bottoms
            </span>
          </a>

          <a href="#">
            <Image
              src="/c3.jpg"
              width={200}
              height={200}
              layout={"responsive"}
              priority={true}
              quality={50}
              alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
              className="inset-0 transition ease-in-out rounded-full hover:scale-110"
              draggable="false"
            />
            <span className="flex justify-center mt-2 text-xl font-bold text-gray-600">
              Outdoors
            </span>
          </a>
          <a href="#">
            <Image
              src="/c4.jpg"
              width={200}
              height={200}
              layout={"responsive"}
              priority={true}
              quality={50}
              alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
              className="inset-0 transition ease-in-out rounded-full hover:scale-110"
              draggable="false"
            />
            <span className="flex justify-center mt-2 text-xl font-bold text-gray-600">
              Tshirts
            </span>
          </a>
          <a href="#">
            <Image
              src="/c5.jpg"
              width={200}
              height={200}
              layout={"responsive"}
              priority={true}
              quality={50}
              alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
              className="inset-0 transition ease-in-out rounded-full hover:scale-110"
              draggable="false"
            />
            <span className="flex justify-center mt-2 text-xl font-bold text-gray-600">
              Dresses
            </span>
          </a>
          <a href="#">
            <Image
              src="/c6.jpg"
              width={200}
              height={200}
              layout={"responsive"}
              priority={true}
              quality={50}
              alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
              className="inset-0 transition ease-in-out rounded-full hover:scale-110"
              draggable="false"
            />
            <span className="flex justify-center mt-2 text-xl font-bold text-gray-600">
              Accessories
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Categories;
