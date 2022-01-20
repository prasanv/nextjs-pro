import React from "react";
import { useRouter } from "next/router";

const ProductId = () => {
  return <h3>Dynamic Routes - Product Id - {useRouter().query.productId} </h3>;
};

export default ProductId;
