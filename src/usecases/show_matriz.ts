import { MatrizModel } from "../models/matriz"

export function showMatriz(matrizEntity: MatrizModel) {
  let text = "";

  for (let i = 0;matrizEntity.getRow() > i;i++) {
    text += '| ';
    for (let j = 0;matrizEntity.getColumn() > j;j++) {
      text += matrizEntity.matriz[i][j] + " ";
    }
    text += '|\n';
  }

  return text;
}
