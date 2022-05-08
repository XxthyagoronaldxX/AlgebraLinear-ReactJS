import { mmc } from "../../src/helpers/mmc_helper"

describe("=== MMC ===", () => {
  test("MMC - Simple test", () => {
    let result  = mmc(10, 50)

    expect(result).toBe(50)
  })
  test("MMC - Intermediary test", () => {
    let result = mmc(37, 145)

    expect(result).toBe(5365)
  })
  test("MMC - Complex test", () => {
    let result = mmc(780, 1000)

    expect(result).toBe(39000)
  })
})
