import { isDecimal } from "../helpers/isdecimal_helper"

export function simplifyFraction(dividendo: number, divisor: number): string {
  if (dividendo === divisor) return "1"

  let dividendoAux = dividendo
  let divisorAux = divisor

  let loop = true

  while (loop) {
    if (!isDecimal(dividendoAux / 2) && !isDecimal(divisorAux / 2)) {
      dividendoAux /= 2
      divisorAux /= 2
    } else if (!isDecimal(dividendoAux / 3) && !isDecimal(divisorAux / 3)) {
      dividendoAux /= 3
      divisorAux /= 3
    } else if (!isDecimal(dividendoAux / 5) && !isDecimal(divisorAux / 5)) {
      dividendoAux /= 5
      divisorAux /= 5
    } else if (!isDecimal(dividendoAux / 7) && !isDecimal(divisorAux / 7)) {
      dividendoAux /= 7
      divisorAux /= 7
    } else {
      return `${dividendoAux}/${divisorAux}`
    }
  }

  return "1"
}
