import { CategoryMenu, HeroBanner, Products } from "../../components/store";
import { client } from "../../lib/client";
import Footer from "../../components/portfolio/Footer";

export default function Home({ products, bannerData }: any) {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Menu</h2>
        <p></p>
        <CategoryMenu products={products} />
      </div>

      <Products products={products} />

      {/**<FooterBanner footerBanner={bannerData && bannerData[0]} />**/}
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
