import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

/**
 * 1st render the component into jsdom using render method
 * use "screen" - it is object - we can get the information about the elements which are used inside the component
 */
test("should load contact component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("should load button inside contact component", () => {
  render(<Contact />);

  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

/**
 * try to provide some randome text and find it.. it fails and shows you the rendered content into jsdom
 */

test("should load button inside contact component", () => {
  render(<Contact />);

  const button = screen.getByPlaceholderText("name");
  expect(button).toBeInTheDocument();
});

test("should load 2 input box on the contact component", () => {
  render(<Contact />);

  //Querying
  const inputBoxes = screen.getAllByRole("textbox");
  //   console.log(inputBoxes.length); // length of an array
  //   console.log(inputBoxes); // array of elements - virtual DOM, we can find the different React fiber nodes/react elements/

  //Assertion
  expect(inputBoxes.length).toBe(2);
  //expect(inputBoxes.length).not.toBe(3);
});

describe("Grouping all contact us components", () => {
  //we can keep all test case
  // we can write nesting describe("group of other test cases", ()=>{
  // })
});

/**
 * we can write "it" instead of "test" - this is also valid
 */
