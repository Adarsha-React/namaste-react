import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSeachText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9234947&lng=77.6851069&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listOfRestaurants?.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search-filter-container">
        <div className="search-container">
          <input
            type="text"
            placeholder="Seach"
            value={searchText}
            onChange={(e) => {
              setSeachText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter(
                (restaurant) =>
                  restaurant?.info?.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>

        <div className="filter-container">
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
      </div>
      <div className="restaurant-container">
        {filteredRestaurants?.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurant/" + restaurant?.info?.id}
          >
            <RestaurantCard resData={restaurant} key={restaurant?.info?.id} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
