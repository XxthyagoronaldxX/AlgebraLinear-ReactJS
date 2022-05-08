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

      isNull(): boolean {
        let isNull = true

        for (let i = 0;i < this.getRow(); i++) {
          for (let j = 0;j < this.getColumn();j++) {
            if (this.matriz[i][j] !== 0) isNull = false
          }
        }

        return isNull
      }
    } as MatrizModel, matrizModel)

    return newMatrizModel
  }

  isNull(): boolean {
    let isNull = true

    for (let i = 0;i < this.getRow(); i++) {
      for (let j = 0;j < this.getColumn();j++) {
        if (this.matriz[i][j] !== 0) isNull = false
      }
    }

    return isNull
  }

  getRow(): number {
    return this.matriz.length
  }

  getColumn(): number {
    return this.matriz[0].length
  }
}
