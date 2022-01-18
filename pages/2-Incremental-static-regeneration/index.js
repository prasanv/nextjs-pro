import Link from "next/link";
import React from "react";

function Products({ products }) {
  return (
    <div>
      <h3>Incremental Static Regeneration</h3>
      <u>
        <h4>Important Notes:</h4>
      </u>
      <i>
        <li>Turn on the json-server</li>
        <li>
          For Product Items 1-3 are links, click on the product item to
          navigate.
        </li>
        <li>
          On refreshing from the product list page, all 1-3 product item pages
          are regenerated for every ISR.
        </li>
        <li>
          For Product Items 4-6 are div, use the URL bar to navigate to the item
          page.
        </li>
        <li>
          On refreshing from the product list page, all 4-6 product item pages
          are NOT regenerated for every ISR.
        </li>
        <li>
          Try changing the fallback: false/true/`blocking` and check the console
          and network.
        </li>
      </i>
      {products.map((item) =>
        item.id < 4 ? (
          <Link
            key={item.id}
            href={`/2-Incremental-static-regeneration/${item.id}`}
            passHref
          >
            <h3>
              {item.title} - Price: ${item.price}
            </h3>
          </Link>
        ) : (
          <div key={item.id}>
            <h3>
              {item.title} - Price: ${item.price}
            </h3>
          </div>
        )
      )}
    </div>
  );
}

export default Products;

export async function getStaticProps() {
  const res = await fetch("http://localhost:2020/products");
  const data = await res.json();

  console.log("Generating/Regenerating Product List");
  return {
    props: {
      products: data,
    },
    revalidate: 10,
  };
}
