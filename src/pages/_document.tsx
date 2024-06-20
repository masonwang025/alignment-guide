import { Html, Head, Main, NextScript } from 'next/document';

function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="AI Alignment Guide" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="/opengraph-image.jpg" />
        <meta property="og:url" content="https://alignment.guide" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Alignment Guide" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="/opengraph-image.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;