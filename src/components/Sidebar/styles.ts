import styled from "styled-components";

export const Container = styled.nav`
  background: var(--background-sidebar);
  color: var(--text);

  width: 315px;
  height: 100%;
  padding: 2rem 5rem;

  border-bottom-right-radius: 2.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  header {
    height: 3rem;
    width: 13rem;

    h1 {
      font-size: 2rem;
    }

    h1:last-child {
      text-align: right;

      color: var(--text-highlight);
    }

    h1:first-child {
      text-align: left;
    }
  }

  form {
    text-align: center;
    width: 16rem;
    margin-bottom: 1.7rem;

    label {
      width: 100%;
      display: flex;
      flex-direction: column;

      & input {
        padding: 0.3rem;
        padding-left: 1.2rem;

        border: none;
        border-radius: 0.25rem;

        text-align: center;
      }
    }

    button {
      padding: 0.4rem 0;
      margin-top: 1rem;
      width: 100%;
      background-color: var(--button);
      border: none;
      font-size: 1rem;
      font-weight: 600;
      color: var(--text-light);
      border-radius: 0.25rem;

      transition: 0.2s filter;

      &:hover {
        filter: brightness(0.9)
      }
    }
  }

  p {
    font-size: 0.8rem;
    filter: brightness(0.8);
  }
`;
