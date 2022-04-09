import { useProduct } from "../../context/product-context";
import "./filterMenu.css";

export const FilterMenu = () => {
  const {
    productState,
    productDispatch,
    showFilterMobileNav,
    setShowFilterMobileNav,
  } = useProduct();

  return (
    <div
      className={
        showFilterMobileNav
          ? "filter-section filter-section-display"
          : "filter-section"
      }
    >
      <div
        className="filter-section-close"
        onClick={() => setShowFilterMobileNav(false)}
      >
        <i className="fas fa-times"></i>
      </div>
      <div className="filter-title-bar">
        <span className="filter-title">Filter</span>
        <span
          className="filter-clear"
          onClick={() => productDispatch({ type: "CLEAR_ALL" })}
        >
          Clear All
        </span>
      </div>
      <div className="filter-price">
        <div className="sort-title">SORT</div>
        <div className="sort-body">
          <label className="sort-div">
            <input
              type="radio"
              className="sort"
              name="sort_by_price"
              checked={productState.sortBy === "HIGH_TO_LOW" ? true : false}
              onChange={() =>
                productDispatch({ type: "SORT", payload: "HIGH_TO_LOW" })
              }
            />
            Price High to Low
          </label>
          <label className="sort-div">
            <input
              type="radio"
              className="sort"
              name="sort_by_price"
              checked={productState.sortBy === "LOW_TO_HIGH" ? true : false}
              onChange={() =>
                productDispatch({ type: "SORT", payload: "LOW_TO_HIGH" })
              }
            />
            Price Low to High
          </label>
        </div>
      </div>
      <div className="filter-categories">
        <div className="categories-title">Categories</div>
        <div className="categories-body">
          <label className="categories-div">
            <input
              type="checkbox"
              name=""
              id=""
              checked={productState.showCategory.includes("Rasayana")}
              onChange={() =>
                productDispatch({ type: "CATEGORIZE", payload: "Rasayana" })
              }
            />
            Rasayana
          </label>
          <label className="categories-div">
            <input
              type="checkbox"
              name=""
              id=""
              checked={productState.showCategory.includes("Avaleha")}
              onChange={() =>
                productDispatch({ type: "CATEGORIZE", payload: "Avaleha" })
              }
            />
            Avaleha
          </label>
          <label className="categories-div">
            <input
              type="checkbox"
              name=""
              id=""
              checked={productState.showCategory.includes("Churna")}
              onChange={() =>
                productDispatch({ type: "CATEGORIZE", payload: "Churna" })
              }
            />
            Churna
          </label>
          <label className="categories-div">
            <input
              type="checkbox"
              name=""
              id=""
              checked={productState.showCategory.includes("Vati")}
              onChange={() =>
                productDispatch({ type: "CATEGORIZE", payload: "Vati" })
              }
            />
            Vati
          </label>
        </div>
      </div>
      <div className="filter-rating">
        <div className="rating-title">Ratings</div>
        <div className="rating-body">
          <label>
            <input
              type="range"
              min="0"
              max="5"
              step="1"
              value={productState.showRating}
              onChange={(e) =>
                productDispatch({ type: "RATE", payload: e.target.value })
              }
            />
          </label>
        </div>
      </div>
    </div>
  );
};
