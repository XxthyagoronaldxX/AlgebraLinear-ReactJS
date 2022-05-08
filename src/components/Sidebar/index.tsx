import { FormEvent, useState } from "react"
import { useMatriz } from "../../hooks/useMatriz"
import { Container } from "./styles"

export function Sidebar() {
  const [row, setRow] = useState(3)
  const [column, setColumn] = useState(3)
  const [combination, setCombination] = useState(1)
  const { generateMatriz } = useMatriz()

  function handleGenerateMatrizSubmit(event: FormEvent) {
    event.preventDefault()

    generateMatriz(row, column, combination)
  }

  return (
    <Container>
      <header>
        <h1>Matriz</h1>
        <h1>Scaling</h1>
      </header>
      <form onSubmit={handleGenerateMatrizSubmit}>
        <label htmlFor="row">
          Linha
          <input
            type="number"
            id='row'
            value={row}
            max='8'
            min='3'
            onChange={event => setRow(Number(event.target.value))}
          />
        </label>

        <label htmlFor="column">
          Coluna
          <input
            type="number"
            id='column'
            value={column}
            max='8'
            min='3'
            onChange={event => {
              if (Number(event.target.value) - 2 < combination) {
                event.target.value = column.toString()
              }
              setColumn(Number(event.target.value))
            }}
          />
        </label>

        <label htmlFor='combination'>
          Combinações
          <input
            type="number"
            id='combination'
            max='6'
            min='1'
            value={combination}
            onChange={event => {
              if (Number(event.target.value) + 2 > column) {
                event.target.value = combination.toString()
              }
              setCombination(Number(event.target.value))
            }}
          />
        </label>

        <button type="submit">Gerar</button>
      </form>
      <p>By Tckubirim</p>
    </Container>
  )
}
