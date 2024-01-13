import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "./cartSlice";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  console.log(resId);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();

    setResInfo(json.data);
  };

  const dispatch = useDispatch();
  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItems = (item) => {
    dispatch(removeItem(item));
  };

  if (resInfo === null) return <h3>Loading menu...</h3>; //Early Return

  console.log(resInfo);

  const { name, city, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h3>{city}</h3>
      <h3>Menu</h3>
      <ul>
        {itemCards?.map((item) => (
          <div key={item?.card?.info?.id}>
            <li>
              {item?.card?.info?.name} -
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
              <button className="cart-btn" onClick={() => handleAddItems(item)}>
                Add
              </button>
              <button
                className="cart-btn"
                onClick={() => handleRemoveItems(item)}
              >
                Remove
              </button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
