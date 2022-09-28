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
        <a className="flex items-center px-4 py-2 transition-all duration-300 bg-red-700 border-b border-current rounded text-large-bold gap-x-4 group hover:pl-4 hover:pr-1">
          <span className="text-white">{children}</span>
          <ArrowRight
            size={20}
            className="transition-all duration-300 white group-hover:ml-2"
          />
        </a>
      </Link>
    </div>
  )
}

export default UnderlineLink