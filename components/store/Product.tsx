import Link from "next/link";
import { urlFor } from "../../lib/client";
import Image from "next/image";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useStateContext } from "../../context/StateContext";

type ProductProps = {
  product: any;
};

export default function Product({
  product: { image, name, slug, price },
}: ProductProps) {
  return (
    <div className="">
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