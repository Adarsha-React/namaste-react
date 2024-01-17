import { render, screen } from "@testing-library/react";
import RestaurantCrad from "../../components/RestaurantCard";
import RES_MOCK_DATA from "../../components/mocks/resCardMocks.json";
import "@testing-library/jest-dom";

test("should render restaurant card component with props data", () => {
  render(<RestaurantCrad resData={RES_MOCK_DATA} />);

  const name = screen.getByText("abc");
  expect(name).toBeInTheDocument();
});
