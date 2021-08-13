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
          This is tenka heading 1 text
        </Text>
        <Text heading2 as="h2">
          This is tenka heading 2 text
        </Text>
        <Text heading3 as="h3">
          This is tenka heading 3 text
        </Text>
        <Text heading4 as="h4">
          This is tenka heading 4 text
        </Text>
        <Text heading5 as="h5">
          This is tenka heading 5 text
        </Text>
        <Text heading6 as="h6">
          This is tenka heading 6 text
        </Text>
        <Text xlarge as="p">
          This is tenka xlarge body text
        </Text>
        <Text large as="p">
          This is tenka large body text
        </Text>
        <Text as="p">This is tenka default body text</Text>
        <Text small as="p">
          This is tenka small body text
        </Text>
        <Text display1 as="p">
          This is tenka display1 body text
        </Text>
        <Text display2 as="p">
          This is tenka display2 body text
        </Text>
        <Text display3 as="p">
          This is tenka display3 body text
        </Text>
      </main>
    </div>
  );
};

export default Home;
