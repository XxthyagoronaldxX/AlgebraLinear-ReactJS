import { isDecimal } from "../../src/helpers/isdecimal_helper"

describe("=== ISDECIMAL ===", () => {
  test("ISDECIMAL - Test k = 1.4", () => {
    let value = 1.4

    expect(isDecimal(value)).toBe(true)
  })
  test("ISDECIMAL - Test k = 2.0", () => {
    let value = 2.0

    expect(isDecimal(value)).toBe(false)
  })
  test("ISDECIMAL - Test k = 4", () => {
    let value = 4

    expect(isDecimal(value)).toBe(false)
  })
})
