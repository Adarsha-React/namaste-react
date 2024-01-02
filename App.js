import React from "react";
import ReactDOM from "react-dom/client";
import { listOfRestaurants, RESTAURANT_CDN_LINK } from "./constants";

const Title = () => {
  return (
    <div className="logo">
      <h1>Food-App</h1>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

//const styleCard = { backgroundColor: "#f0f0f0" };

const RestaurantCard = ({ resData }) => {
  return (
    <div className="restaurant-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-image"
        alt="res-image"
        src={RESTAURANT_CDN_LINK + resData?.info?.cloudinaryImageId}
      />

      <div className="res-details">
        <h3>{resData?.info?.name}</h3>
        <h5 className="res-cuisines">{resData?.info?.cuisines.join(", ")}</h5>
        <h5>{resData?.info?.avgRating} stars</h5>
        <h5>{resData?.info?.sla?.deliveryTime} Minutes</h5>
      </div>
    </div>
  );
};

const Body = () => {
  console.log(listOfRestaurants);
  return (
    <div className="body">
      <div className="search-container">
        <input type="text" placeholder="Seach" />
        <button className="search-btn">Search</button>
      </div>
      <div className="restaurant-container">
        {/* Passing the props to a components */}
        {/* try to use Swiggy data and pass it here for one or more cards- use array and map method */}
        {listOfRestaurants?.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant?.info?.id} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
