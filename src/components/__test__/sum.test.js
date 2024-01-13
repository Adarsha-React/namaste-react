/**
 * test function will be used to test
 * it takes two parameter
 * 1st: description of the test
 * 2nd: main logic to test inside the function
 */

import { sum } from "../sum";

test("Sum function should return sum of two numbers", () => {
  const result = sum(3, 4);

  //Assertion - we expect something to be passed
  expect(result).toBe(7);
});
