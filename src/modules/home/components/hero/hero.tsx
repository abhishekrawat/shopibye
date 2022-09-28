import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-yellow-50">
        <div className="container px-4 mx-auto">
      <div className="container mx-auto overflow-hidden">
        <div className="flex items-center justify-between px-4 py-5 bg-blueGray-50">
          <div className="w-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-auto mr-14">
                <a href="#">
                  <Image src="/grid.svg" height={60} width={30} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="w-auto">
            <div className="flex flex-wrap items-center">
              <div className="hidden w-auto lg:block">
                <ul className="flex items-center mr-16">
                  <li className="font-medium mr-9 hover:text-gray-700">
                    <a href="#">Features</a>
                  </li>
                  <li className="font-medium mr-9 hover:text-gray-700">
                    <a href="#">Solutions</a>
                  </li>
                  <li className="font-medium mr-9 hover:text-gray-700">
                    <a href="#">Resources</a>
                  </li>
                  <li className="font-medium hover:text-gray-700">
                    <a href="#">Pricing</a>
                  </li>
                </ul>
              </div>
              <div className="hidden w-auto lg:block">
                <div className="inline-block">
                  <button
                    className="w-full px-5 py-3 font-semibold text-white transition duration-200 ease-in-out bg-indigo-600 border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 hover:bg-indigo-700"
                    type="button"
                  >
                    Try 14 Days Free Trial
                  </button>
                </div>
              </div>
              <div className="w-auto lg:hidden">
                <a href="#">
                  <svg
                    className="text-indigo-600 navbar-burger"
                    width="51"
                    height="51"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="56"
                      height="56"
                      rx="28"
                      fill="currentColor"
                    ></rect>
                    <path
                      d="M37 32H19M37 24H19"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed top-0 bottom-0 left-0 z-50 hidden w-4/6 navbar-menu sm:max-w-xs">
          <div className="fixed inset-0 bg-gray-800 navbar-backdrop opacity-80"></div>
          <nav className="relative z-10 h-full pt-8 overflow-y-auto bg-white px-9">
            <div className="flex flex-wrap justify-between h-full">
              <div className="w-full">
                <div className="flex items-center justify-between -m-2">
                  <div className="w-auto p-2">
                    <a className="inline-block" href="#">
                    <Image src="/header.png" height={790} width={760}  alt="" />
                    </a>
                  </div>
                  <div className="w-auto p-2">
                    <a className="navbar-burger" href="#">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 18L18 6M6 6L18 18"
                          stroke="#111827"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center w-full py-16">
                <ul>
                  <li className="mb-12">
                    <a className="font-medium hover:text-gray-700" href="#">
                      Features
                    </a>
                  </li>
                  <li className="mb-12">
                    <a className="font-medium hover:text-gray-700" href="#">
                      Solutions
                    </a>
                  </li>
                  <li className="mb-12">
                    <a className="font-medium hover:text-gray-700" href="#">
                      Resources
                    </a>
                  </li>
                  <li>
                    <a className="font-medium hover:text-gray-700" href="#">
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-end w-full pb-8">
                <div className="flex flex-wrap">
                  <div className="w-full">
                    <div className="block">
                      <button
                        className="w-full px-5 py-3 font-semibold text-white transition duration-200 ease-in-out bg-indigo-600 border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 hover:bg-indigo-700"
                        type="button"
                      >
                        Try 14 Days Free Trial
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="pt-16 overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -m-8">
            <div className="w-full p-8 md:w-1/2">
              <div className="inline-block px-2 py-1 mb-6 font-semibold bg-green-100 rounded-full">
                <div className="flex flex-wrap items-center -m-1">
                  <div className="w-auto p-1">
                    <a className="text-sm" href="">
                      👋 We are hiring! View open roles
                    </a>
                  </div>
                  <div className="w-auto p-1">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.66667 3.41675L12.75 7.50008M12.75 7.50008L8.66667 11.5834M12.75 7.50008L2.25 7.50008"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <h1 className="mb-6 text-6xl font-bold leading-none md:text-8xl lg:text-10xl font-heading md:max-w-xl">
                Handcrafted with love
              </h1>
              <p className="text-lg font-medium text-gray-900 mb-11 md:max-w-md">
                Get the best-in-className group mentoring plans and professional
                benefits for your team
              </p>
              <div className="flex flex-wrap -m-2.5 mb-20">
                <div className="w-full md:w-auto p-2.5">
                  <div className="block">
                    <button
                      className="w-full px-6 py-4 font-semibold text-white transition duration-200 ease-in-out bg-indigo-600 border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 hover:bg-indigo-700"
                      type="button"
                    >
                      Join Free for 30 Days
                    </button>
                  </div>
                </div>
                <div className="w-full md:w-auto p-2.5">
                  <div className="block">
                    <button
                      className="w-full py-4 font-semibold transition duration-200 ease-in-out bg-transparent border border-gray-300 px-9 hover:border-gray-400 rounded-xl focus:ring focus:ring-gray-50 hover:bg-gray-100"
                      type="button"
                    >
                      <div className="flex flex-wrap items-center justify-center -m-1">
                        <div className="w-auto p-1">
                          <svg
                            width="19"
                            height="18"
                            viewBox="0 0 19 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.75 3.75C2.75 2.92157 3.42157 2.25 4.25 2.25H6.70943C7.03225 2.25 7.31886 2.45657 7.42094 2.76283L8.5443 6.13291C8.66233 6.48699 8.50203 6.87398 8.1682 7.0409L6.47525 7.88737C7.30194 9.72091 8.77909 11.1981 10.6126 12.0247L11.4591 10.3318C11.626 9.99796 12.013 9.83767 12.3671 9.9557L15.7372 11.0791C16.0434 11.1811 16.25 11.4677 16.25 11.7906V14.25C16.25 15.0784 15.5784 15.75 14.75 15.75H14C7.7868 15.75 2.75 10.7132 2.75 4.5V3.75Z"
                              stroke="black"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </div>
                        <div className="w-auto p-1">
                          <span>Book a call</span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              {/* <p className="mb-6 text-sm font-semibold text-gray-500 uppercase">
                Trusted and loved by 100+ tech first teams
              </p> */}
              {/* <div className="flex flex-wrap -m-3">
                <div className="w-auto p-3">
                  <Image src="/header.png" height={790} width={760}  alt="" />
                </div>
                <div className="w-auto p-3">
                  <Image src="/grid.svg" height={30} width={30} alt="" />
                </div>
                <div className="w-auto p-3">
                  <Image src="/grid.svg" height={30} width={30} alt="" />
                </div>
              </div> */}
            </div>
            <div className="hidden w-full p-8 lg:block md:w-1/2">
            <Image src="/header.png" height={790} width={760} alt="" />
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;
