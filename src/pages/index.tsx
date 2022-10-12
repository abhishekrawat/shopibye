import Head from "@modules/common/components/head"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import TopCat from "@modules/home/components/topcat"
import Categories from "@modules/home/components/categories"
import Layout from "@modules/layout/templates"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head
        title="Ciyona Home"
        description="Shop all available models only at the ACME. Worldwide Shipping. Secure Payment."
      />
      {/* <Hero /> */}
      
      <TopCat />
      <Categories name={"Shop by Categories"}/>
      

      
      <FeaturedProducts 
      name={"Trending Now"}/>
      <FeaturedProducts 
      name={"Latest Products"}/>
      
    
    </>
    
  )
}

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Home
