import Image from "next/image";
import Link from "next/link";
import React from "react";
import pic1 from "../../../public/getStaticPaths.fallback.true.1.png";
import pic2 from "../../../public/getStaticPaths.fallback.true.1.png";

function Albums({ posts }) {
  return (
    <div>
      <Image src={pic1} alt="pic1" width={700} height={350}></Image>
      <Image src={pic2} alt="pic2" width={700} height={350}></Image>
      <h2>getStaticPaths - fallback:true</h2>
      <p>try routes beyond 100 to check the behavior</p>
      {posts.map((item) => (
        <Link
          key={item.id}
          href={`/1-static-generation/3-get-static-paths-fallback-true/${item.id}`}
          passHref
        >
          <h4>
            {item.id}.{item.title}
          </h4>
        </Link>
      ))}
    </div>
  );
}

export default Albums;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  const data = await res.json();

  return {
    props: {
      posts: data, // try changing the data and check the network logs and .next build folder
      // posts: data.slice(0, 3), // try changing the data and check the network logs and .next build folder
    },
  };
}
