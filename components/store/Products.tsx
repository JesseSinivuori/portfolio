import { Suspense } from "react";
import { useStateContext } from "../../context/StateContext";
import Product from "./Product";
import Loading from "../helpers/loading";

type ProductsProps = {
  products: any;
};

export default function Products({ products }: ProductsProps) {
  const { category, useCategoryFilter } = useStateContext();

  const filteredProducts = useCategoryFilter
    ? products.filter((item: any) => item.category === category)
    : products;

  return (
    <Suspense fallback={<Loading />}>
      <div className={`products-container`}>
        <div className={`flex flex-wrap items-start justify-center`}>
          {filteredProducts.map((item: any) => (
            <div className="m-[10px]" key={item._id}>
              <Product product={item} />
            </div>
          ))}
        </div>
      </div>
    </Suspense>
  );
}
