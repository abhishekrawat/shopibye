import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"
import Link from "next/link"

const FeaturedProducts = (props) => {
  const { data } = useFeaturedProductsQuery()
  return (
    <div className="py-4">
      <div className="py-4 content-container">
        <div className="flex items-center justify-between mb-8">
          <span className="text-2xl font-bold text-gray-600 ">
            {props.name}
          </span>
          <Link href={"#"} className="text-lg font-normal text-gray-600 ">
            View all
          </Link>

        </div>
        <ul className="grid grid-cols-2 small:grid-cols-4 gap-x-2 gap-y-8">
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
