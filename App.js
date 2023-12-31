import React from "react";
import ReactDOM from "react-dom/client";

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

const RestaurantCard = (props) => {
  console.log(props);
  const { resName, cuisines } = props;
  return (
    <div className="restaurant-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-image"
        alt="res-image"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"
      />
      <h5></h5>
      <h6>{resName}</h6>
      <h6>{cuisines}</h6>
      <h6>4.4 stars</h6>
      <h6>38 minutes</h6>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input type="text" placeholder="Seach" />
        <button className="search-btn">Search</button>
      </div>
      <div className="restaurant-container">
        {/* Passing the props to a components */}
        <RestaurantCard resName="Burger King" cuisines="Burgers, American" />
        <RestaurantCard
          resName="Meghana Biryani"
          cuisines="South Indian, Fast Food"
        />
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
