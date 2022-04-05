import { FilterMenu, Products } from "../../components/index";

export const ProductPage = () => {
  return (
    <div className="product-page-container">
      <FilterMenu />
      <Products />
    </div>
  );
};
