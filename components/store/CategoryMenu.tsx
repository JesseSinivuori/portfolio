import { useEffect, useState } from "react";
import { useStateContext } from "../../context/StateContext";
import styles from "../../styles/style";

type CategoryMenuProps = {
  products: any;
};

export default function CategoryMenu({ products }: CategoryMenuProps) {
  const { category, setCategory, setUseCategoryFilter } = useStateContext();

  const handleChangeCategory = (categoryName: string) => {
    setCategory(categoryName);
    if (categoryName !== "All") {
      setUseCategoryFilter(true);
    } else {
      setUseCategoryFilter(false);
    }
  };

  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    if (products) {
      const filteredCategories = products.reduce((acc: string[], item: any) => {
        if (item.category && !acc.includes(item.category)) {
          acc.sort((a, b) => a.localeCompare(b));
          return [...acc, item.category];
        }
        return acc;
      }, []);
      setCategories(["All", ...filteredCategories]);
    }
  }, [products]);

  return (
    <div
      className={`${styles.flexCenter} mt-8 flex-col transition-all duration-300`}
    >
      <div
        className={`
        m-2 flex h-[200px] min-w-[240px] flex-wrap justify-center
        overflow-auto py-8 text-white xs:h-full xs:w-full`}
      >
        {categories.map((item) => (
          <button
            type="button"
            className={`m-2 mx-2 rounded-xl border border-primary px-4
          py-2 transition-all duration-100
          ${
            category === item
              ? " bg-white text-primary"
              : "bg-primary hover:border-white hover:text-white"
          }`}
            key={item}
            onClick={() => handleChangeCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
