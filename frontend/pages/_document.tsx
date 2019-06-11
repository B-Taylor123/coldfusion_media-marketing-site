import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <style>{`
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
              --font-size-s: 1rem;
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
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;