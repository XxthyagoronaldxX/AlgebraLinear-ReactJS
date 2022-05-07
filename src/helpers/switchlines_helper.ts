import { MatrizModel } from "../models/matriz"

export function switchLines(matrizEntity: MatrizModel, line1: number, line2: number) {
    let matriz = matrizEntity.matriz

    for (let j = 0;j < matrizEntity.matriz[0].length;j++) {
        let aux = matriz[line1][j];
        matriz[line1][j] = matriz[line2][j];
        matriz[line2][j] = aux;
    }

    return MatrizModel.create(matriz)
}
