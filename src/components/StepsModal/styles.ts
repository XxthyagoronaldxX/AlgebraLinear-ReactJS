import styled from "styled-components";
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding: 1rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface StepProps {
  isResult?: boolean
}

export const Step = styled.div<StepProps>`
  display: flex;
  flex-direction: ${props => props.isResult ? 'column' : ''};
  align-items: center;
  justify-content: ${props => props.isResult ? 'center' : 'space-between'};
  padding: 0.6rem;
  width: 96%;
  border-radius: 0.3rem;

  background: ${
    props => props.isResult
    ? 'linear-gradient(to right, rgba(138, 217, 100, 0.44), rgba(76, 189, 126, 0.4))'
    : 'rgba(148, 197, 204, 0.44)'
  };
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8.3px);
  -webkit-backdrop-filter: blur(8.3px);
  border: 1px solid rgba(148, 197, 204, 0.16);

  h1 {
    color: ${darken(0.77, '#FFFF')};
  }

  h2 {
    width: 15rem;
    color: var(--text-dark);
    font-size: 0.8rem;
    text-align: center;
  }

  img {
    width: 2rem;
    height: 3rem;
    margin: 0 2rem;
  }

  & + div {
    margin-top: 2rem;
  }
`;
