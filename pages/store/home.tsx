import { client } from "../../lib/client";
import Head from "next/head";
import { Suspense, lazy } from "react";
import Loading from "../../components/helpers/loading";

const CategoryMenu = lazy(() => import("../../components/store/CategoryMenu"));
const HeroBanner = lazy(() => import("../../components/store/HeroBanner"));
const Products = lazy(() => import("../../components/store/Products"));
const Footer = lazy(() => import("../../components/portfolio/Footer"));

export default function Home({ products, bannerData }: any) {
  return (
    <>
      <Head key={"jesseskitchen"}>
        <title>{"Jesse's Kitchen"}</title>
      </Head>
      {!bannerData ? (
        <Loading />
      ) : (
        <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      )}
      <div className="products-heading">
        <h2>Menu</h2>
        <p></p>
        <CategoryMenu products={products} />
      </div>
      <Products products={products} />
      <Footer />
    </>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};
