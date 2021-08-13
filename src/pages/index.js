import React from "react";
// import type { NextPage } from 'next'
import Head from "next/head";

import { Text } from "../components";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Tenka</title>
        <meta name="description" content="Build your project faster" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Text heading1 as="h1" truncate={2}>
          This is tenka heading 1 text This is tenka heading 1 text This is
          tenka heading 1 text This is tenka heading 1 text This is tenka
          heading 1 text This is tenka heading 1 text This is tenka heading 1
          text
        </Text>
        <Text heading2 as="h2" truncate={2}>
          This is tenka heading 1 text This is tenka heading 1 text This is
          tenka heading 1 text This is tenka heading 1 text This is tenka
          heading 1 text This is tenka heading 1 text This is tenka heading 1
          text
        </Text>
        <Text heading3 as="h3" truncate={2}>
          This is tenka heading 1 text This is tenka heading 1 text This is
          tenka heading 1 text This is tenka heading 1 text This is tenka
          heading 1 text This is tenka heading 1 text This is tenka heading 1
          text
        </Text>
        <Text heading4 as="h4" truncate={2}>
          This is tenka heading 1 text This is tenka heading 1 text This is
          tenka heading 1 text This is tenka heading 1 text This is tenka
          heading 1 text This is tenka heading 1 text This is tenka heading 1
          text
        </Text>
        <Text heading5 as="h5" truncate={2}>
          This is tenka heading 1 text This is tenka heading 1 text This is
          tenka heading 1 text This is tenka heading 1 text This is tenka
          heading 1 text This is tenka heading 1 text This is tenka heading 1
          text
        </Text>
        <Text heading6 as="h6" truncate={2}>
          This is tenka heading 1 text This is tenka heading 1 text This is
          tenka heading 1 text This is tenka heading 1 text This is tenka
          heading 1 text This is tenka heading 1 text This is tenka heading 1
          text
        </Text>
        <Text xlarge as="p" truncate={2}>
          This is tenka heading 1 text This is tenka heading 1 text This is
          tenka heading 1 text This is tenka heading 1 text This is tenka
          heading 1 text This is tenka heading 1 text This is tenka heading 1
          text
        </Text>
        <Text large as="p" truncate={2}>
          This is tenka heading 1 text This is tenka heading 1 text This is
          tenka heading 1 text This is tenka heading 1 text This is tenka
          heading 1 text This is tenka heading 1 text This is tenka heading 1
          text
        </Text>
        <Text as="p" truncate={2}>
          This is tenka heading 1 text This is tenka heading 1 text This is
          tenka heading 1 text This is tenka heading 1 text This is tenka
          heading 1 text This is tenka heading 1 text This is tenka heading 1
          text
        </Text>
        <Text small as="p" truncate={2}>
          This is tenka heading 1 text This is tenka heading 1 text This is
          tenka heading 1 text This is tenka heading 1 text This is tenka
          heading 1 text This is tenka heading 1 text This is tenka heading 1
          text
        </Text>
        <Text display1 accent as="p" truncate>
          This is tenka's display1 text and it is so big that you will need some
          clamping to multiple lines so you can shot it properly!
        </Text>
        <Text display2 as="p" truncate>
          This is tenka heading 1 text This is tenka heading 1 text This is
          tenka heading 1 text This is tenka heading 1 text This is tenka
          heading 1 text This is tenka heading 1 text This is tenka heading 1
          text
        </Text>
        <Text display3 info as="p" truncate={1}>
          Thys is tenka jump display3 text and it is big and you can see how it
          is clamped into a double button text and see how the bottom text is
          going here!
        </Text>
      </main>
    </div>
  );
};

export default Home;
