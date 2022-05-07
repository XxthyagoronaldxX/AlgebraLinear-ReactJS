import { isDecimal } from "./isdecimal_helper"
import { mmc } from "./mmc_helper"

function fractionSumFraction(value1: string, value2: string) {
  let value1Split = value1.split('/')
  let value1Dividendo = parseInt(value1Split[0])
  let value1Divisor = parseInt(value1Split[1])

  let value2Split = value2.split('/')
  let value2Dividendo = parseInt(value2Split[0])
  let value2Divisor = parseInt(value2Split[1])

  let divisor = 0
  let dividendo = 0

  if (value1Divisor !== value2Divisor) {
    divisor = mmc(value1Divisor, value2Divisor)
    dividendo = value1Dividendo * (divisor/value1Divisor) + value2Dividendo * (divisor/value2Divisor)
  } else {
    divisor = value1Divisor
    dividendo = value1Dividendo + value2Dividendo
  }

  return [dividendo, divisor]
}

function fractionSumK(value1: string, value2: number) {
  let value1Split = value1.split('/')
  let value1Dividendo = parseInt(value1Split[0])
  let value1Divisor = parseInt(value1Split[1])

  let dividendo = value1Dividendo + (value1Divisor * value2)
  let divisor = value1Divisor

  return [dividendo, divisor]
}

function kSumFraction(value1: number, value2: string) {
  let value2Split = value2.split('/')
  let value2Dividendo = parseInt(value2Split[0])
  let value2Divisor = parseInt(value2Split[1])

  let dividendo = (value2Divisor * value1) + value2Dividendo
  let divisor = value2Divisor

  return [dividendo, divisor]
}

export function sum(value1: number | string, value2: number | string) {
  let result: number[] = [];

  if (typeof(value1) == "string" && typeof(value2) == "string") {
    result = fractionSumFraction(value1, value2)
  } else if (typeof(value1) == "string" && typeof(value2) == "number") {
    result = fractionSumK(value1, value2)
  } else if (typeof(value2) == "string" && typeof(value1) == "number") {
    result = kSumFraction(value1, value2)
  } else if (typeof(value2) == "number" && typeof(value1) == "number") {
    return value1 + value2
  }

  let dividendo = result[0]
  let divisor = result[1]

  return (isDecimal(dividendo/divisor))
  ? `${dividendo}/${divisor}`
  : dividendo/divisor
}
