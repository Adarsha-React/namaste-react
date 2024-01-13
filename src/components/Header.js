import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <div className="logo">
      <h1>Namaste-Food🙏</h1>
    </div>
  );
};

const Header = () => {
  const [isLogin, setIsLogin] = useState(true);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  // console.log("Header component");
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <Link to={"/cart"}>Cart - {cartItems.length}</Link>
          </li>
          {isLogin ? (
            <li>
              <button
                className="login-btn"
                onClick={() => {
                  setIsLogin(false);
                }}
              >
                Login
              </button>
            </li>
          ) : (
            <li>
              <button
                className="login-btn"
                onClick={() => {
                  setIsLogin(true);
                }}
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
