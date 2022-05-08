import { subtract } from "../../src/helpers/subtract_helper"

describe("=== Subtract ===", () => {
  test("Subtract - K to K", () => {
    expect(subtract(2, 2)).toBe(0)
  })
  test("Subtract - K to Fraction", () => {
    expect(subtract(2, "2/7")).toBe("12/7")
  })
  test("Subtract - Fraction to K", () => {
    expect(subtract("2/7", 2)).toBe("-12/7")
  })
  test("Subtract - Fraction to Fraction", () => {
    expect(subtract("2/4", "4/5")).toBe("-6/20")
  })
})
