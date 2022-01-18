import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const Products = ({ productId = 100 }) => {
  const router = useRouter();
  console.log({ router });

  const orderStatusHandler = () => {
    router.push("/products/order-status");
  };

  const orderTrackerHandler = () => {
    router.replace("https://www.ups.com/track");
  };

  return (
    <div>
      <h3>Products Landing page</h3>
      <li>
        <Link href="/products/1">
          <a>Product 1</a>
        </Link>
      </li>
      <li>
        <Link href="/products/2">
          <a>Product 2</a>
        </Link>
      </li>
      <li>
        <Link href="/products/3" replace>
          <a>Product 3 - back button will take to home page</a>
        </Link>
      </li>
      <li>
        <Link href={`/products/${productId}`}>
          <a>Product - {productId}</a>
        </Link>
      </li>
      <p>
        <button type="button" onClick={orderStatusHandler}>
          Place Order
        </button>
      </p>
      <p>
        <button type="button" onClick={orderTrackerHandler}>
          Track Order
        </button>
      </p>
    </div>
  );
};

export default Products;
