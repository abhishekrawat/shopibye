import Head from "@modules/common/components/head";
import FeaturedProducts from "@modules/home/components/featured-products";
import TopCat from "@modules/home/components/topcat";
import Categories from "@modules/home/components/categories";
import Layout from "@modules/layout/templates";
import { ReactElement } from "react";
import { NextPageWithLayout } from "types/global";
import Highlight from "@modules/home/components/highlights";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head title="ShoppiBye" description="Your one stop fashion store" />
      <TopCat />
      <Categories name={"Shop by Categories"} />
      <FeaturedProducts name={"Trending Now"} />
      <FeaturedProducts name={"Latest Products"} />
      <Highlight />
    </>
  );
};

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Home;
