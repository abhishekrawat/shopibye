import ArrowRight from "@modules/common/icons/arrow-right"
import Link from "next/link"

type UnderlineLinkProps = {
  href: string
  children?: React.ReactNode
}

const UnderlineLink = ({ href, children }: UnderlineLinkProps) => {
  return (
    <div className="flex items-start">
      <Link href={href}>
        <a className="px-8 py-4 mb-2 mr-2 font-bold text-center text-white rounded-full text-md bg-gradient-to-r from-purple-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
          <span className="text-white">{children}</span>
          {/* <ArrowRight
            size={20}
            className="transition-all duration-200 white group-hover:ml-2"
          /> */}
        </a>
      </Link>
    </div>
  )
}

export default UnderlineLink
