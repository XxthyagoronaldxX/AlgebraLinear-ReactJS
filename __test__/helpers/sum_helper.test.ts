import { sum } from "../../src/helpers/sum_helper"

describe("=== Sum ===", () => {
  test("Sum - K to K", () => {
    expect(sum(2, 2)).toBe(4)
  })
  test("Sum - K to Fraction", () => {
    expect(sum(2, "2/7")).toBe("16/7")
  })
  test("Sum - Fraction to K", () => {
    expect(sum("2/7", -2)).toBe("-12/7")
  })
  test("Sum - Fraction to Fraction", () => {
    expect(sum("2/4", "4/5")).toBe("26/20")
  })
})
