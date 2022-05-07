import { MatrizModel } from "../models/matriz"
import { simplifyFraction } from "../usecases/simplify_fraction"

export function simplifyResults(matrizEntity: MatrizModel, kCombination: number) {
    let matriz = matrizEntity.matriz

    for (let i = 0;i < matrizEntity.matriz.length;i++) {
      for (let c = matrizEntity.matriz[0].length-kCombination;c < matrizEntity.matriz[0].length;c++) {
        if (typeof(matriz[i][c]) == "string") {
          let split = matriz[i][c].toString().split('/')
          let dividendo = parseInt(split[0])
          let divisor = parseInt(split[1])

          matriz[i][c] = simplifyFraction(dividendo, divisor)
        }
      }
    }

    return MatrizModel.create(matriz)
}
