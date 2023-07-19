import Link from "next/link";
import { urlFor } from "../../lib/client";
import Image from "next/image";

export interface Product {
  image: string[];
  name: string;
  price: number;
  slug: {
    current: string;
  };
}

type ProductProps = {
  product: any;
};

export default function Product({ product }: ProductProps) {
  const { image, name, price, slug } = product;

  return (
    <div>
      <Link href={`/store/product/${slug.current}`}>
        <div className="product-card">
          <Image
            src={urlFor(image && image[0])}
            alt={`Image of '${name}`}
            width={550}
            height={550}
            className="product-image"
          />
          <p className="product-name min-w-[200px]sm:w-[300px] w-[200px]">
            {name}
          </p>
          <p className="product-price">{price}€</p>
        </div>
      </Link>
    </div>
  );
}
