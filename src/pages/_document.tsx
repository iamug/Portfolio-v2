import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="Portfolio site for Aguziendu Ugochukwu Software Engineer" />
          <meta name="author" content="Aguziendu Ugochukwu, ugochukwu.dev, iamug.github.io/Portfolio-v2, ugochukwu.dev" />
          <meta
            name="keywords"
            content="Aguziendu Ugochukwu Portfolio Web Designer developer Uzodinma Website software engineer Hire"
          />
          <meta property="og:title" content="Aguziendu Ugochukwu - Software Engineer" key="title" />
          <title>Aguziendu Ugochukwu - Software Engineer </title>
        </Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" />
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
