import { MatrizModel } from "../models/matriz"

export function insertValueMatriz(
  matriz: MatrizModel,
  row: number,
  column: number,
  value: number | string
): (string|number)[][] {
  return matriz.matriz.map((r, rowIndex) =>
    r.map((c, columnIndex) => {
      if (rowIndex === row && columnIndex === column) return value

      return c
    })
  )
}
