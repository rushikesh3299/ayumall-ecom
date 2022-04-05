import "./filterMenu.css";
export const FilterMenu = () => {
  return (
    <div className="filter-section">
      <div className="filter-section-close">
        <i className="fas fa-times"></i>
      </div>
      <div className="filter-title-bar">
        <span className="filter-title">Filter</span>
        <span className="clear-filter">Clear All</span>
      </div>
      <div className="filter-price">
        <div className="sort-title">SORT</div>
        <div className="sort-body">
          <label className="sort-div">
            <input type="radio" className="sort" name="sort_by_price" />
            Price High to Low
          </label>
          <label className="sort-div">
            <input type="radio" className="sort" name="sort_by_price" />
            Price Low to High
          </label>
        </div>
      </div>
      <div className="filter-categories">
        <div className="categories-title">Categories</div>
        <div className="categories-body">
          <label className="categories-div">
            <input type="checkbox" name="" id="" />
            Rasayana
          </label>
          <label className="categories-div">
            <input type="checkbox" name="" id="" />
            Avaleha
          </label>
          <label className="categories-div">
            <input type="checkbox" name="" id="" />
            Churna
          </label>
          <label className="categories-div">
            <input type="checkbox" name="" id="" />
            Vati
          </label>
        </div>
      </div>
      <div className="filter-brand">
        <div className="brand-title">Brand</div>
        <div className="brand-body">
          <label className="brand-div">
            <input type="checkbox" name="" id="" />
            Santulan
          </label>
          <label className="brand-div">
            <input type="checkbox" name="" id="" />
            Dabar
          </label>
          <label className="brand-div">
            <input type="checkbox" name="" id="" />
            Patanjali
          </label>
          <label className="brand-div">
            <input type="checkbox" name="" id="" />
            Dhootpapeshwar
          </label>
        </div>
      </div>
    </div>
  );
};
