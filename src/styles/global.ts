import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } 

  :root {
    --White: #fff;
    --Black: #1c1f26;

    --gray-100: #eaeef6;
    --gray-300: #a8a8b3;
    --gray-800: #363f5f;
    --gray-900: #121214;

    --yellow-500: #eba417;
    --cyan-500: #61dafb;
    --blue: #3e9ff7;
    --purple: #9e78fe;
    --text-title: #363f5f;
    --text-body: #4a5568;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%; // 15px}
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%; // 14px}
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: ${(props) => props.theme.colors.backgroundColor};
    font-family: 'Roboto', sans-serif;
    width: 100%;
    height: 100vh;
    color: ${(props) => props.theme.colors.text};
  }

  body,
  input,
  textarea,
  select,
  button {
    font: 400 1rem 'Roboto', san-serif;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
