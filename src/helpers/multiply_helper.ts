import { isDecimal } from "./isdecimal_helper"

function fractionMultiplyFraction(value1: string, value2: string) {
  let value1Split = value1.split('/')
  let value1Dividendo = parseInt(value1Split[0])
  let value1Divisor = parseInt(value1Split[1])

  let value2Split = value2.split('/')
  let value2Dividendo = parseInt(value2Split[0])
  let value2Divisor = parseInt(value2Split[1])

  let dividendo = value1Dividendo * value2Dividendo
  let divisor = value1Divisor * value2Divisor

  return [dividendo, divisor]
}

function fractionMultiplyK(value1: string, value2: number) {
  let value1Split = value1.split('/')
  let value1Dividendo = parseInt(value1Split[0])
  let value1Divisor = parseInt(value1Split[1])

  let dividendo = value1Dividendo * value2
  let divisor = value1Divisor

  return [dividendo, divisor]
}

export function multiply(value1: number | string, value2: number | string): string | number {
  let result: number[] = []

  if (typeof(value1) == "string" && typeof(value2) == "string") {
    result = fractionMultiplyFraction(value1, value2)
  } else if (typeof(value1) == "string" && typeof(value2) == "number") {
    result = fractionMultiplyK(value1, value2)
  } else if (typeof(value2) == "string" && typeof(value1) == "number") {
    result = fractionMultiplyK(value2, value1)
  } else if (typeof(value1) != "string" && typeof(value2) != "string"){
    return value1 * value2
  }

  let dividendo = result[0]
  let divisor = result[1]

  return (isDecimal(dividendo/divisor))
  ? `${dividendo}/${divisor}`
  : dividendo/divisor
}
