import jQuery from "jquery"

export class MatrizModel {
  public matriz: (number | string)[][]
  public combination: number

  private constructor(matriz: (number | string)[][], combination: number) {
    this.matriz = matriz
    this.combination = combination
  }

  static create(matriz: (number | string)[][] = [[]], combination: number = 0): MatrizModel {
    return new MatrizModel(matriz, combination)
  }

  static clone(matrizModel: MatrizModel): MatrizModel {
    let newMatrizModel = jQuery.extend(true, {
      getRow(): number {
        return this.matriz.length
      },

      getColumn(): number {
        return this.matriz[0].length
      },
    } as MatrizModel, matrizModel)

    return newMatrizModel
  }

  getRow(): number {
    return this.matriz.length
  }

  getColumn(): number {
    return this.matriz[0].length
  }
}
