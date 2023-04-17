import { useEffect, useState } from "react";
import { useStateContext } from "../../context/StateContext";
import styles from "../../styles/style";

type CategoryMenuProps = {
  products: any;
};

export default function CategoryMenu({ products }: CategoryMenuProps) {
  const { category, setCategory, setUseCategoryFilter } = useStateContext();

  const [toggleCategories, setToggleCategories] = useState(false);

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
      const newCategories = products.reduce((acc: string[], item: any) => {
        if (item.category && !acc.includes(item.category)) {
          acc.sort((a, b) => a.localeCompare(b));
          return [...acc, item.category];
        }
        return acc;
      }, []);
      setCategories(["All", ...newCategories]);
    }
  }, [products]);

  return (
    <div
      className={`${styles.flexCenter} mt-8 flex-col transition-all duration-300`}
    >
      <button
        className={`hidden bg-nav
        ${styles.flexCenter} rounded-xl p-4 text-white hover:bg-nav/50`}
        type="button"
        onClick={() => setToggleCategories((prev) => !prev)}
      >
        Categories
      </button>
      <div
        className={`
        m-2 flex h-[200px] min-w-[240px] flex-wrap justify-center
        overflow-y-scroll py-8 text-white xs:h-full xs:w-full`}
      >
        {categories.map((item) => (
          <button
            type="button"
            className={`m-2 mx-2 rounded-xl border border-primary py-2
          px-4 transition-all duration-100
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
