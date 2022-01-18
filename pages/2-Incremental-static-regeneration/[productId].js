import React from "react";
import { useRouter } from "next/router";

function ProductId({ indProduct }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <h2>ISR Example</h2>
      <h4>{indProduct.title}</h4>
      <h5>Price: ${indProduct.price}</h5>
      <p>{indProduct.description}</p>
    </div>
  );
}

export default ProductId;

export async function getStaticPaths() {
  return {
    paths: [{ params: { productId: "1" } }],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(`http://localhost:2020/products/${params.productId}`);
  const data = await res.json();

  console.log(`ISR generating page - /product/${params.productId}`);

  return {
    props: {
      indProduct: data,
    },
    revalidate: 10,
  };
}
