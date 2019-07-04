import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet, createGlobalStyle } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({ enhanceApp: App => props => sheet.collectStyles(<App {...props} />) });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            { initialProps.styles }
            { sheet.getStyleElement() }
          </>
        )
      }
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head/>
        <body>
          <GlobalStyles/>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

const GlobalStyles = createGlobalStyle`
  /* apply a natural box layout model to all elements, but allowing components to change */
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    width: 100%;
    height: 100%;
    font-size: 16px;
    font-family: Roboto, sans-serif;

    --main-bg-colour: #1A1A1A;
    --secondary-bg-colour: #E0E0E0;
    --font-colour: #DEDEDE;
    --font-colour-dark: #353535;
    --brand-blue: #397FCB;
    
    --font-size-xl: 5rem;
    --font-size-l: 2rem;
    --font-size-m: 1.5rem;
    --font-size-s: 1.2rem;
    --font-size-xs: .5rem;

    --header-bar-height: 4rem;
    --footer-height: 4rem;

    background-color: var(--main-bg-colour);
    color: var(--font-colour);
  }

  body {
    width: 100%;
    height: 100%;
    margin: 0;
    scroll-snap-type: y mandatory;
  }

  #__next {
    width: 100%;
    height: 100%;
  }

  @media only screen 
    /* and (min-device-width: 375px)  */
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2) {
    html {
        font-size: 8px;
    }
  }
`;

export default MyDocument;