import Head from "next/head";
import React from "react";

function CustomHeadComponent() {
  return (
    <>
      <Head>
        <title>Custom Head Page</title>
        <meta name="description" content="Custom Head Example Page" />
      </Head>
      <div style={{ height: "500px" }}>
        <h2>Custom Head Component Page</h2>
        <p>Check the head tag inside browser Elements section</p>
      </div>
    </>
  );
}

export default CustomHeadComponent;
