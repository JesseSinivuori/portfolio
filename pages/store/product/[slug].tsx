import { client, urlFor } from "../../../lib/client";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { useEffect, useState } from "react";
import { useStateContext } from "../../../context/StateContext";
import Image from "next/image";
import { CategoryMenu, Products, Footer } from "../../../components/index";

export default function ProductDetails({ products, product }: any) {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart, setQty }: any =
    useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  };

  useEffect(() => {
    setQty(1);
    setIndex(0);
  }, [product, setQty]);

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <Image
              src={urlFor(image && image[index])}
              className="product-detail-image"
              alt={`Image of ' ${name}`}
              height={400}
              width={400}
            />
          </div>
          {image?.length > 1 && (
            <div className="small-images-container">
              {image?.map((item: any, i: number) => (
                <Image
                  width={200}
                  height={200}
                  key={item._id}
                  src={urlFor(item)}
                  className={
                    i === index ? "small-image selected-image" : "small-image"
                  }
                  alt={`Image of ' ${name}`}
                  onMouseEnter={() => setIndex(i)}
                />
              ))}
            </div>
          )}
        </div>
        <div className="product-detail-desc max-w-full flex-wrap xss:max-w-[410px]">
          <div className="flex justify-start">
            <h3
              className="relative mb-4 w-[110px] rounded-xl bg-[#5a7557]
                    p-1 font-extralight"
            >
              Free Delivery
            </h3>
          </div>
          <h1>{name}</h1>
          <div className="reviews">
            <div className="stars">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p></p>
          </div>
          <h4></h4>
          <p className="">{details}</p>
          <p className="price">{price}€</p>
          <div className="quantity flex-wrap justify-center xss:flex xss:justify-start">
            <div className="justify-start">
              <h3 className="">Quantity: </h3>
            </div>
            <div>
              <p className="quantity-desc w-[110px] xss:w-[140px] xs:w-[160px]">
                <span className="minus" onClick={decQty}>
                  <AiOutlineMinus />
                </span>
                <span className="num">{qty}</span>
                <span className="plus" onClick={incQty}>
                  <AiOutlinePlus />
                </span>
              </p>
            </div>
          </div>
          <div className="buttons ml-0 max-w-full xss:ml-[-15px]">
            <div className="flex items-center justify-center xss:justify-start">
              <div className="flex flex-wrap justify-center xss:justify-start xs:flex-nowrap">
                <button
                  type="button"
                  className="add-to-cart m-4"
                  onClick={() => onAdd(product, qty)}
                >
                  Add to Cart
                </button>
                <button
                  type="button"
                  className="buy-now m-4"
                  onClick={() => handleBuyNow()}
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="maylike-products-wrapper">
        <h2>Still hungry?</h2>
        <CategoryMenu products={products} />
        <Products products={products} />
      </div>
      <Footer />
    </div>
  );
}
export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product: any) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }: any) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);
  return {
    props: { products, product },
  };
};
