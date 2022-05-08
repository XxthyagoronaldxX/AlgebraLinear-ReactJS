import { isDecimal } from "./isdecimal_helper"

function fractionDividedFraction(value1: string, value2: string) {
  let value1Split = value1.split("/")
  let value1Dividendo = parseInt(value1Split[0])
  let value1Divisor = parseInt(value1Split[1])

  let value2Split = value2.split("/")
  let value2Dividendo = parseInt(value2Split[0])
  let value2Divisor = parseInt(value2Split[1])

  let dividendo = value1Dividendo * value2Divisor
  let divisor = value2Dividendo * value1Divisor

  return [dividendo, divisor]
}

function fractionDividedK(value1: string, value2: number) {
  let value1Split = value1.split("/")
  let value1Dividendo = parseInt(value1Split[0])
  let value1Divisor = parseInt(value1Split[1])

  let dividendo = value1Dividendo
  let divisor = value1Divisor * value2

  return [dividendo, divisor]
}

function kDividedFraction(value1: number, value2: string) {
  let value2Split = value2.split("/")
  let value2Dividendo = parseInt(value2Split[0])
  let value2Divisor = parseInt(value2Split[1])

  let dividendo = value2Divisor * value1
  let divisor = value2Dividendo

  return [dividendo, divisor]
}

function kDividedK(value1: number, value2: number) {
  let dividendo = value1
  let divisor = value2

  return [dividendo, divisor]
}

function division(value1: number | string, value2: number | string) {
  let result: number[] = []

  if (typeof (value1) == "string" && typeof (value2) == "string") {
    result = fractionDividedFraction(value1, value2)
  } else if (typeof (value1) == "string" && typeof (value2) == "number") {
    result = fractionDividedK(value1, value2)
  } else if (typeof (value2) == "string" && typeof (value1) == "number") {
    result = kDividedFraction(value1, value2)
  } else if (typeof (value2) == "number" && typeof (value1) == "number") {
    result = kDividedK(value1, value2)
  }

  let dividendo = result[0]
  let divisor = result[1]

  return (isDecimal(dividendo / divisor))
    ? `${dividendo}/${divisor}`
    : dividendo / divisor
}

export {
  division
}
