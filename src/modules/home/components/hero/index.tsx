import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[80vh] w-full relative">
      <div className="absolute bottom-0 z-10 flex flex-col items-center pb-0 mb-4 text-center text-white inset-x-4 grow ">
        <h1 className="p-3 mb-4 text-4xl font-bold rounded bg-white/20 drop-shadow-md shadow-black">
          Summer styles are finally here
        </h1>
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
