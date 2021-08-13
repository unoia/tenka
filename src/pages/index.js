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
        <Text heading1 as="h1">
          Hello there, general tenka heading1 text
        </Text>
        <Text heading2 as="h2">
          Hello there, general tenka heading2 text
        </Text>
        <Text heading3 as="h3">
          Hello there, general tenka heading3 text
        </Text>
        <Text heading4 as="h4">
          Hello there, general tenka heading4 text
        </Text>
        <Text heading5 as="h5">
          Hello there, general tenka heading5 text
        </Text>
        <Text heading6 as="h6">
          Hello there, general tenka heading6 text
        </Text>
        <Text display1 accent as="p" truncate>
          This is tenka&apos;s display1 text and it is so big that you will need
          some clamping to multiple lines so you can shot it properly!
        </Text>
        <Text display2 as="p" truncate>
          This is tenka&apos;s display2 text and it is so big that you will need
          some clamping to multiple lines so you can shot it properly!
        </Text>
        <Text display3 info as="p" truncate={1}>
          This is tenka&apos;s display3 text and it is so big that you will need
          some clamping to multiple lines so you can shot it properly!
        </Text>
        <Text xlarge as="p">
          Use xlarge for a big body text, this one here is the example
        </Text>
        <Text large as="p">
          And here we have the large body text. It&apos;s nice, isn&apos;t it?
        </Text>
        <Text as="p">
          Here goes the medium body text and this one is the default
        </Text>
        <Text small as="p">
          While this text is very small and kinda hard to read, it&apos;s still
          here!
        </Text>
      </main>
    </div>
  );
};

export default Home;
