import { multiply } from "../../src/helpers/multiply_helper"

describe('=== Multiply ===', () => {
  test('Multiply - K to K', () => {
    expect(multiply(2, 2)).toBe(4)
  })
  test('Multiply - K to Fraction', () => {
    expect(multiply(2, '2/7')).toBe('4/7')
  })
  test('Multiply - Fraction to K', () => {
    expect(multiply('2/7', 2)).toBe('4/7')
  })
  test('Multiply - Fraction to Fraction', () => {
    expect(multiply('2/4', '4/5')).toBe('8/20')
  })
})
