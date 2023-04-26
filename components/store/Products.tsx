import { useStateContext } from "../../context/StateContext";
import { Product } from "../index";

type ProductsProps = {
  products: any;
};

export default function Products({ products }: ProductsProps) {
  const { category, useCategoryFilter } = useStateContext();

  const filteredProducts = useCategoryFilter
    ? products.filter((item: any) => item.category === category)
    : products;

  return (
    <div className={`products-container`}>
      <div className={`flex flex-wrap items-start justify-center`}>
        {filteredProducts.map((item: any) => (
          <div className="m-[10px]" key={item._id}>
            <Product product={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
