import React from "react";
import { useRouter } from "next/router";

const ProductId = () => {
  const router = useRouter();

  return <h3>Dynamic Routes - Product Id - {useRouter().query.productId} </h3>;
};

export default ProductId;
