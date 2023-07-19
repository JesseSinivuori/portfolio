import {
  CategoryMenu,
  HeroBanner,
  Products,
  Footer,
} from "../../components/index";
import { client } from "../../lib/client";
import Head from "next/head";

export default function Home({ products, bannerData }: any) {
  return (
    <>
      <Head key={"jesseskitchen"}>
        <title>{"Jesse's Kitchen"}</title>
      </Head>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
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

export const getStaticProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};
