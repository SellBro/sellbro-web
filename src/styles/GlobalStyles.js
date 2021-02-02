import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    *, *:after, *:before, input[type="search"] {
        box-sizing: border-box;
    }

    #root , html, body {
        margin: 0;
    }

    ul, li, ol, dd, h1, h2,
    h3, h4, h5, h6, p {
        padding: 0;
        margin: 0;
    }

    [role="button"], button, input, select, textarea {
            outline: none;
        &:focus {
            outline: none;
        }
        &:disabled {
            opacity: 1;
        }
  }

`;
