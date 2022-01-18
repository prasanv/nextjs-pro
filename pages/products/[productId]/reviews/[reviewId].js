import React from "react";
import { useRouter } from "next/router";

const ReviewIdPages = () => {
  const router = useRouter();

  console.log({ router });
  return (
    <h3>
      {" "}
      Nested Dynamic Routes - Product Id - {router.query.productId} - Review Id
      - {router.query.reviewId}
    </h3>
  );
};

export default ReviewIdPages;
