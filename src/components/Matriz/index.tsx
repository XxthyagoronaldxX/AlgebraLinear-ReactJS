import { useMatriz } from "../../hooks/useMatriz"
import { Container, InputMatriz, } from "./styles"

export function Matriz() {
  const { matriz, setValueMatriz } = useMatriz()

  return (
    <Container>
      {matriz.matriz.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((column, columnIndex) => (
              <li key={columnIndex}>
                <InputMatriz
                  isCombination={(matriz.combination + columnIndex) >= matriz.getColumn()}
                  type='text'
                  value={column}
                  onChange={event => {
                    event.preventDefault()
                    setValueMatriz(rowIndex, columnIndex, event.target.value)
                  }}
                />
              </li>
            ))}
          </ol>
        </li>
      ))}
    </Container>
  )
}
