import { MatrizModel } from "../models/matriz"
import { simplifyFraction } from "./simplify_fraction_helper"

export function simplifyResults(matrizModel: MatrizModel) {
  let matrizModelAux = MatrizModel.clone(matrizModel)
  let matriz = matrizModelAux.matriz

  for (let i = 0; i < matrizModelAux.getRow(); i++) {
    for (let c = matrizModelAux.getColumn() - matrizModel.combination; c < matrizModelAux.getColumn(); c++) {
      if (typeof (matriz[i][c]) == "string") {
        let split = matriz[i][c].toString().split("/")
        let dividendo = parseInt(split[0])
        let divisor = parseInt(split[1])

        matriz[i][c] = simplifyFraction(dividendo, divisor)
      }
    }
  }

  return MatrizModel.create(matriz)
}
