import Image from "next/image";

const Categories = (props) => {


  return (
    <div className="py-16 bg-blue-50 ">
      <div className="flex items-center justify-between mb-8 content-container">
          <span className="text-2xl font-bold text-gray-600 ">
            {props.name}
          </span>
          <span className="text-lg font-normal text-gray-600 ">
            {/* View all */}
          </span>

        </div>
        <div className=" content-container">
          <div className="grid grid-cols-3 small:grid-cols-6 gap-x-4 gap-y-8 ">
            <div>
              <Image
                src="/c1.jpg"
                width={200}
                layout={"responsive"}
                height={200}
                priority={true}
                quality={50}
                alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
                className="inset-0 rounded-2xl"
                draggable="false"
              />
              <span className="flex justify-center text-xl font-bold text-gray-600">Tops</span>
              </div>
            
            <div>
            <Image
                src="/c2.jpg"
                width={200}
                height={200}
                layout={"responsive"}
                priority={true}
                quality={50}
                alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
                className="absolute inset-0 rounded-2xl"
                draggable="false"
              />
              <span className="flex justify-center text-xl font-bold text-gray-600">Bottoms</span>
              </div>
            
            <div>
            <Image
                src="/c3.jpg"
                width={200}
                height={200}
                layout={"responsive"}
                priority={true}
                quality={50}
                objectFit="cover"
                alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
                className="absolute inset-0 rounded-2xl"
                draggable="false"
              />
              <span className="flex justify-center text-xl font-bold text-gray-600">Outdoors</span>
              </div>
              <div>
            <Image
                src="/c4.jpg"
                width={200}
                height={200}
                layout={"responsive"}
                priority={true}
                quality={50}
                objectFit="cover"
                alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
                className="absolute inset-0 rounded-2xl"
                draggable="false"
              />
              <span className="flex justify-center text-xl font-bold text-gray-600">Tshirts</span>
              </div>
            <div>
            <Image
                src="/c5.jpg"
                width={200}
                height={200}
                layout={"responsive"}
                priority={true}
                quality={50}
                objectFit="cover"
                alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
                className="absolute inset-0 rounded-2xl"
                draggable="false"
              />
              <span className="flex justify-center text-xl font-bold text-gray-600">Dresses</span>
              </div>
            <div>
            <Image
                src="/c6.jpg"
                width={200}
                height={200}
                layout={"responsive"}
                priority={true}
                quality={50}
                objectFit="cover"
                alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
                className="absolute inset-0 rounded-2xl"
                draggable="false"
              />
              <span className="flex justify-center text-xl font-bold text-gray-600">Accessories</span>
              </div>
            </div>
          </div>
        </div>

  );
};

export default Categories;
