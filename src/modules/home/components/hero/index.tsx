import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[50vh] w-full relative">
      <div className="absolute bottom-0 z-10 flex flex-col justify-center mb-4 text-center text-black inset-x-4 grow small:text-left small:justify-end small:items-start small:p-32">
        <h1 className="p-3 mb-4 text-4xl font-bold bg-white rounded drop-shadow-md shadow-black">
          Summer styles are finally here
        </h1>
        <p className="p-3 rounded text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black bg-white">
          This year, our new summer collection will shelter you from the harsh
          elements of a world that doesn&apos;t care if you live or die.
        </p>
        <UnderlineLink href="/store">Explore products</UnderlineLink>
      </div>
      <Image
        src="/hero.jpg"
        layout="fill"
        loading="eager"
        priority={true}
        quality={50}
        objectFit="cover"
        alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
        className="absolute inset-0"
        draggable="false"
      />
    </div>
  )
}

export default Hero
