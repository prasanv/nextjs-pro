import Link from "next/link";
import React from "react";

function ItemsList({ data }) {
  return (
    <div>
      <h2>getServerSideProps Example</h2>
      {data.map((item) => (
        <div key={item.id}>
          <Link href={`/3-server-side-rendering/${item.brand}`} passHref>
            <h3>
              <a>
                {item.id}.{item.brand}
              </a>
            </h3>
          </Link>
          <p>{item.equipment}</p>
        </div>
      ))}
    </div>
  );
}

export default ItemsList;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:2020/appliances");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
