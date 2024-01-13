import { useDispatch } from "react-redux";
import { clearCart } from "./cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
