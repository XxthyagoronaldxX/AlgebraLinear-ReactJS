import { MatrizModel } from "../models/matriz"

export function switchLines(matrizModel: MatrizModel, line1: number, line2: number) {
    let matrizModelAux = MatrizModel.clone(matrizModel)
    let matriz = matrizModelAux.matriz

    for (let j = 0;j < matrizModel.getColumn();j++) {
        let aux = matriz[line1][j];
        matriz[line1][j] = matriz[line2][j];
        matriz[line2][j] = aux;
    }

    return matrizModelAux
}
