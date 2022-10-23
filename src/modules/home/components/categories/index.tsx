import Image from "next/future/image";

const Categories = (props) => {
  return (
    <div className="px-4 py-16 bg-white lg:content-container">
      <div className="flex items-center justify-between mb-8">
        <span className="text-2xl font-bold text-gray-600 ">{props.name}</span>
      </div>
      <div className="grid grid-cols-3 small:grid-cols-6 gap-x-4 gap-y-4">
        <a>
          <Image
            src={`/Tops.jpg`}
            width={200}
            layout={"raw"}
            height={200}
            priority={true}
            quality={50}
            className="inset-0 transition ease-in-out rounded-full hover:scale-110"
            draggable="false"
          />
          <span className="flex justify-center mt-2 text-xl font-bold text-gray-600">
            Tops
          </span>
        </a>

        <a>
          <Image
            src={`/Bottoms.jpg`}
            width={200}
            layout={"raw"}
            height={200}
            priority={true}
            quality={50}
            className="inset-0 transition ease-in-out rounded-full hover:scale-110"
            draggable="false"
          />
          <span className="flex justify-center mt-2 text-xl font-bold text-gray-600">
          Bottoms
          </span>
        </a>

        <a>
          <Image
            src={`/Dresses.jpg`}
            width={200}
            layout={"raw"}
            height={200}
            priority={true}
            quality={50}
            className="inset-0 transition ease-in-out rounded-full hover:scale-110"
            draggable="false"
          />
          <span className="flex justify-center mt-2 text-xl font-bold text-gray-600">
          Dresses
          </span>
        </a>

        <a>
          <Image
            src={`/Outdoors.jpg`}
            width={200}
            layout={"raw"}
            height={200}
            priority={true}
            quality={50}
            className="inset-0 transition ease-in-out rounded-full hover:scale-110"
            draggable="false"
          />
          <span className="flex justify-center mt-2 text-xl font-bold text-gray-600">
          Outdoors
          </span>
        </a>

        <a>
          <Image
            src={`/Tshirts.jpg`}
            width={200}
            layout={"raw"}
            height={200}
            priority={true}
            quality={50}
            className="inset-0 transition ease-in-out rounded-full hover:scale-110"
            draggable="false"
          />
          <span className="flex justify-center mt-2 text-xl font-bold text-gray-600">
          Tshirts
          </span>
        </a>

        <a>
          <Image
            src={`/Accessories.jpg`}
            width={200}
            layout={"raw"}
            height={200}
            priority={true}
            quality={50}
            className="inset-0 transition ease-in-out rounded-full hover:scale-110"
            draggable="false"
          />
          <span className="flex justify-center mt-2 text-xl font-bold text-gray-600">
          Accessories
          </span>
        </a>
      </div>
    </div>
  );
};

export default Categories;
