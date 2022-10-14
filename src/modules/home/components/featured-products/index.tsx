import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import UnderlineLink from "@modules/common/components/underline-link"
import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"
import Link from "next/link"

const FeaturedProducts = (props) => {
  const { data } = useFeaturedProductsQuery()

  return (
    <div className="py-4">
      <div className="py-4 content-container">
        {/* <div className="flex flex-col items-center mb-16 text-center">
          <span className="mb-6 text-gray-600 text-base-regular">
            Latest products
          </span>
          <p className="max-w-lg mb-4 text-gray-900 text-2xl-regular">
            Our newest styles are here to help you look your best.
          </p>
          <UnderlineLink href="/store">Explore products</UnderlineLink>
        </div> */}
        <div className="flex items-center justify-between mb-8">
          <span className="text-2xl font-bold text-gray-600 ">
            {props.name}
          </span>
          <Link href={"#"} className="text-lg font-normal text-gray-600 ">
            View all
          </Link>

        </div>
        <ul className="grid grid-cols-2 small:grid-cols-4 gap-x-4 gap-y-8">
          {data
            ? data.map((product) => (
                <li key={product.id}>
                  <ProductPreview {...product} />
                </li>
              ))
            : Array.from(Array(4).keys()).map((i) => (
                <li key={i}>
                  <SkeletonProductPreview />
                </li>
              ))}
        </ul>
      </div>
    </div>
  )
}

export default FeaturedProducts
