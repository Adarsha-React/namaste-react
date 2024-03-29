import { RESTAURANT_CDN_LINK } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  //Object destructuring in JS
  console.log(resData);
  const { name, cuisines, avgRating, cloudinaryImageId } = resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="restaurant-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-image"
        alt="res-image"
        src={RESTAURANT_CDN_LINK + cloudinaryImageId}
      />

      <div className="res-details">
        <h3>{name}</h3>
        <p className="res-cuisines">{cuisines.join(", ")}</p>
        <h5>{avgRating} stars</h5>
        <h5>{deliveryTime} Minutes</h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
