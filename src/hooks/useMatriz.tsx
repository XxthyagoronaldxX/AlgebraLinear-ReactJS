import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { insertValueMatriz } from "../helpers/insert_value_matriz"
import { MatrizModel } from "../models/matriz"

interface MatrizContextData {
  matriz: MatrizModel
  generateMatriz: (row: number, column: number, combination: number) => void
  setValueMatriz: (row: number, column: number, value: string) => void
}

interface MatrizProviderProps {
  children: ReactNode
}

const MatrizContext = createContext<MatrizContextData>({} as MatrizContextData)

export function MatrizProvider(props: MatrizProviderProps) {
  const [ matriz, setMatriz ] = useState<MatrizModel>(MatrizModel.create())

  useEffect(() => {
    generateMatriz(3, 3, 1)
  }, [])

  function generateMatriz(row: number, column: number, combination: number) {
    const matriz = Array(row).fill(Array(column).fill(0))

    setMatriz(MatrizModel.create(matriz, combination))
  }

  function setValueMatriz(row: number, column: number, value: string) {
    const result = isNaN(Number(value)) ? value : Number(value)

    let matrizAux = insertValueMatriz(matriz, row, column, result)

    setMatriz(MatrizModel.create(matrizAux, matriz.combination))
  }

  return (
    <MatrizContext.Provider value={{ matriz, generateMatriz, setValueMatriz }}>
      {props.children}
    </MatrizContext.Provider>
  )
}

export function useMatriz() {
  const context = useContext(MatrizContext)

  return context
}
