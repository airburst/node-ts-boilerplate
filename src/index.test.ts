import { add } from "./index";

describe("Add", () => {
  it("correctly adds two numbers", () => {
    expect(add(2, 67)).toEqual(69);
  });
});
