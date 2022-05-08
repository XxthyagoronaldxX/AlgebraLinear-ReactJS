import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #EEEEFA;
        --background-sidebar: #284B63;
        --background-steps: #94c5cc;

        --text: #D9D9D9;
        --text-light: #FFFFFF;
        --text-dark: #000;
        --text-highlight: #ffc914;

        --input: #838E83;

        --green: #35ff69;
        --red: #ed254e;

        --button: #1768AC;
        --border: #0ACDFF;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        @media(max-width: 1080px) {
            font-size: 93.75%;
        }

        @media(max-width: 760px) {
            font-size: 87.5%;
        }
    }

    body, textarea, input, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiesed;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
      cursor: not-allowed;
    }

    .react-modal-overlay {
      background-color: rgba(0, 0, 0, 0.9);
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;

      overflow-x: hidden;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    .react-modal-content {
      background: var(--background);
      width: 100%;
      height: 95%;
      border-radius: 1.5rem;
      margin: 4rem;
      overflow: hidden;
    }
`
