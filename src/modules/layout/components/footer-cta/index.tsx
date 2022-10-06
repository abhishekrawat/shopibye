import UnderlineLink from "@modules/common/components/underline-link";
import Image from "next/image";

const FooterCTA = () => {
  return (
    <div
      className="overflow-hidden bg-fixed bg-black bg-center bg-no-repeat bg-cover py-28 bg-gradient-to-r from-purple-500 to-pink-500"
    >
      <div className="mx-auto content-container">
        <div
          className="px-12 pt-12 bg-black pb-9 md:max-w-xl bg-opacity-80 rounded-4xl"
          
        >
          <p className="mb-7 font-sans max-w-max px-3 py-1.5 text-sm text-white font-semibold uppercase border border-gray-700 rounded-md">
            Business
          </p>
          <h2 className="mb-4 text-6xl font-bold leading-tight text-white md:text-7xl font-heading tracking-px-n">
            How to handle your good employee for the business.
          </h2>
          <p className="text-lg font-medium leading-normal text-gray-400 mb-11">
            Lorem ipsum dolor sit amet, to the consectr adipiscing elit.
            Volutpat tempor to the condim entum vitae vel purus.
          </p>
          <a
            className="inline-flex flex-wrap items-center text-white hover:text-gray-200"
            href="#"
          >
            <span className="mr-2 font-semibold leading-normal">
              Read Full Article
            </span>
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 3.75L16.25 9M16.25 9L11 14.25M16.25 9L2.75 9"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterCTA;
