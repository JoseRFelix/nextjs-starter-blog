import Document, { Head, Main, NextScript, Html } from "next/document";
import { TypographyStyle } from "react-typography";

import typography from "utils/typography";
import { getSiteMetaData } from "utils/helpers";

export default class MyDocument extends Document {
  render() {
    const siteMetadata = getSiteMetaData();

    return (
      <Html lang={siteMetadata.language}>
        <Head>
          <TypographyStyle typography={typography} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
