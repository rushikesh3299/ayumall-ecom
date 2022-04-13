import { v4 as uuid } from "uuid";
export const Rating = ({ productRating }) => {
  const filledStar = Math.floor(productRating);
  const emptyStar = Math.floor(5 - productRating);
  const halfStar = Math.floor(5 - (filledStar + emptyStar));
  var starArray = [];

  for (let i = 0; i < filledStar; i++) {
    starArray.push(<i className="fas fa-star"></i>);
  }
  for (let i = 0; i < halfStar; i++) {
    starArray.push(<i className="fas fa-star-half-alt"></i>);
  }
  for (let i = 0; i < emptyStar; i++) {
    starArray.push(<i className="far fa-star"></i>);
  }

  return (
    <div className="product-card-rating-bar">
      {starArray.map((item) => (
        <span key={uuid()}>{item}</span>
      ))}
    </div>
  );
};
