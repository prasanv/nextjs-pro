import Head from "next/head";
import React from "react";

function DynamicHeadPage({ title, description, data }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div style={{ height: "500px" }}>
        <h3>Custom Head Component Page</h3>
        <p>Check the head tag inside browser Elements section</p>
        <p>Dish Name: {data?.dish}</p>
        <p>Ingredients: {data?.ingredient}</p>
      </div>
    </>
  );
}

export default DynamicHeadPage;

export async function getServerSideProps() {
  const res = await fetch("https://random-data-api.com/api/food/random_food");
  const data = await res.json();

  return {
    props: {
      title: data.dish,
      description: `Made from ${data.ingredient}`,
      data,
    },
  };
}
