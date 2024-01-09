import { useState } from "react";
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

  console.log("Header component");
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <Link to={"/cart"}>Cart</Link>
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
