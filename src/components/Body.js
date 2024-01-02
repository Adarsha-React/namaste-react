import RestaurantCard from "./RestaurantCard";
import { resLists } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resLists);

  return (
    <div className="body">
      <div className="search-container">
        <input type="text" placeholder="Seach" />
        <button className="search-btn">Search</button>
      </div>

      <div>
        <button
          onClick={() => {
            const filteredRestaurants = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4.3
            );

            setListOfRestaurants(filteredRestaurants);
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants?.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant?.info?.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
