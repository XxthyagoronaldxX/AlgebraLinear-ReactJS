import { useMatriz } from "../../hooks/useMatriz"
import { useScaling } from "../../hooks/useScaling"
import { Description } from "../Description"
import { Matriz } from "../Matriz"
import { Container } from "./styles"

interface ContentProps {
  handleOpenScalingModal: () => void
}

export function Content(props: ContentProps) {
  const { handleScalingMatriz } = useScaling()
  const { matriz, generateMatriz } = useMatriz()

  return (
    <Container>
      <header>
        <Matriz />
        <div className="buttons">
          <button
            className="confirm-button"
            onClick={event => {
              handleScalingMatriz(matriz)
              props.handleOpenScalingModal()
            }}
          >
            Confirmar
          </button>
          <button
            className="reset-button"
            onClick={event => {
              generateMatriz(matriz.getRow(), matriz.getColumn(), matriz.combination)
            }}
          >
            Resetar
          </button>
        </div>
      </header>
      <Description />
    </Container>
  )
}
