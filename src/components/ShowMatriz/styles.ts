import styled from "styled-components"

export const Container = styled.ol`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  overflow-x: auto;

  ol {
    display: flex;
    flex-direction: row;
    list-style: none;
    border-radius: 10rem;
    overflow: hidden;
  }
`

interface InputMatrizProps {
  isCombination?: boolean
}

export const InputMatriz = styled.input<InputMatrizProps>`
  width: 4.3rem;
  height: 2rem;

  background-color: ${(props) =>
    props.isCombination ? "var(--text-highlight)" : "var(--input)"};
  color: ${(props) =>
    props.isCombination ? "var(--text-dark)" : "var(--background)"};

  text-align: center;
  font-size: 0.65rem;
  font-weight: bold;

  border: 1px solid var(--background);
`
