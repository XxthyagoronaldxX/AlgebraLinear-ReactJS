import { division } from "../../src/helpers/division_helper"
describe("=== Division ===", () => {
  test("Division - K to K", () => {
    expect(division(2, 2)).toBe(1)
  })
  test("Division - K to Fraction", () => {
    expect(division(2, "2/7")).toBe(7)
  })
  test("Division - Fraction to K", () => {
    expect(division("2/7", 2)).toBe("2/14")
  })
  test("Division - Fraction to Fraction", () => {
    expect(division("2/4", "4/5")).toBe("10/16")
  })
})
