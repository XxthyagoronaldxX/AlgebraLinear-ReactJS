import { Container } from "./styles"

export function Description() {
  return (
    <Container>
      <p><b>Linha: </b> informa a quantidade de linhas da matriz a ser gerada.</p>
      <p><b>Coluna: </b> informa a quantidade colunas da matriz a ser gerada.</p>
      <p><b>Combinações: </b> informa a quantidade de valores que serão combinados com as equações lineares.</p>
    </Container>
  )
}
