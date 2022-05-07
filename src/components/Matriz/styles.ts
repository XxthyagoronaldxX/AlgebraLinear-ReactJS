import styled from "styled-components";

export const Container = styled.ol`
  border-radius: 0.25rem;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  list-style: none;

  ol {
    display: flex;
    flex-direction: row;
    list-style: none;
  }
`;

interface InputMatrizProps {
  isCombination?: boolean
}

export const InputMatriz = styled.input<InputMatrizProps>`
  width: 4rem;
  height: 2rem;

  background-color: ${(props) => props.isCombination ? 'var(--text-highlight)' : 'var(--input)'};
  color: ${ (props) => props.isCombination ? 'var(--text-dark)' : 'var(--background)'};

  text-align: center;
  font-weight: bold;

  border: 1px solid var(--background);
`;
