import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("should render the header component", () => {
  /**
   * Header component has redux store and router links, we have to provide the same way.
   * Provider - for redux store
   * BrowserRouter for Link
   */
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  /**
   * If there are multiple buttons present then choose option 2
   */
  //   const loginButton = screen.getByRole("button"); //Option 1
  const loginButton = screen.getByRole("button", { name: "Login" }); //Option 2

  //   const loginButton = screen.getByText("Login");// this is 2nd option

  expect(loginButton).toBeInTheDocument();
});

test("should render the cart-0 in header component", () => {
  /**
   * Header component has redux store and router links, we have to provide the same way.
   * Provider - for redux store
   * BrowserRouter for Link
   */
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //   const cartItem = screen.getByText("Cart - 0");
  const cartItem = screen.getByText(/Cart/); //RegEx

  expect(cartItem).toBeInTheDocument();
});

test("should change to login to logout on Click header component", () => {
  /**
   * Header component has redux store and router links, we have to provide the same way.
   * Provider - for redux store
   * BrowserRouter for Link
   */
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton); ///Based on user click events

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  expect(logoutButton).toBeInTheDocument();
});
