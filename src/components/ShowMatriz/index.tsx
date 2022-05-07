import { MatrizModel } from "../../models/matriz"
import { Container, InputMatriz, } from "./styles"

interface ShowMatrizProps {
  matriz: MatrizModel
}

export function ShowMatriz(props: ShowMatrizProps) {
  return (
    <Container>
      {props.matriz.matriz.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((column, columnIndex) => (
              <li key={columnIndex}>
                <InputMatriz
                  isCombination={(props.matriz.combination + columnIndex) >= props.matriz.matriz[0].length}
                  type='text'
                  defaultValue={column}
                  disabled
                />
              </li>
            ))}
          </ol>
        </li>
      ))}
    </Container>
  )
}
