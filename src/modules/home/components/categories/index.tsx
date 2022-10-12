import Image from "next/image";

const Categories = (props) => {


  return (
    <div className="py-16 ">
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
            
              <Image
                src="/bottoms.jpg"
                width={200}
                layout={"responsive"}
                height={200}
                priority={true}
                quality={50}
                alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
                className="inset-0 rounded-2xl"
                draggable="false"
              />
            
            
            <Image
                src="/bottoms.jpg"
                width={200}
                height={200}
                layout={"responsive"}
                priority={true}
                quality={50}
                alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
                className="absolute inset-0 rounded-2xl"
                draggable="false"
              />
            
            
            <Image
                src="/tops.jpg"
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
              
            <Image
                src="/tops.jpg"
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
            
            <Image
                src="/tops.jpg"
                width={200}
                height={200}
                layout={"intrinsic"}
                priority={true}
                quality={50}
                objectFit="cover"
                alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
                className="absolute inset-0 rounded-2xl"
                draggable="false"
              />
            
            <Image
                src="/tops.jpg"
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
            </div>
          </div>
        </div>

  );
};

export default Categories;
