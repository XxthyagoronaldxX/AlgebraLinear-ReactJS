import { createContext, ReactNode, useContext, useState } from "react"
import { MatrizModel } from "../models/matriz"
import { scaling } from "../usecases/scaling"

interface Step {
  matrizBefore: MatrizModel,
  done: string,
  matrizAfter: MatrizModel,
}

interface ScalingContextData {
  steps: Step[]
  handleScalingMatriz: (matriz: MatrizModel) => void
}

interface ScalingProviderProps {
  children: ReactNode
}

const ScalingContext = createContext<ScalingContextData>({} as ScalingContextData)

export function ScalingProvider(props: ScalingProviderProps) {
  const [steps, setSteps] = useState<Step[]>([])

  function handleScalingMatriz(matriz: MatrizModel) {
    let matrizAux = MatrizModel.clone(matriz)

    const result = scaling(matrizAux, matrizAux.combination)

    setSteps(result.steps)
  }

  return (
    <ScalingContext.Provider value={{ steps, handleScalingMatriz }}>
      {props.children}
    </ScalingContext.Provider>
  )
}

export function useScaling() {
  const context = useContext(ScalingContext)

  return context
}
