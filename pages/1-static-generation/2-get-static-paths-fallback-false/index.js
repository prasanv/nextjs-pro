import Image from "next/image";
import Link from "next/link";
import React from "react";
import pic1 from "../../../public/getStaticPaths.fallback.false.1.png";
import pic2 from "../../../public/getStaticPaths.fallback.false.2.png";

function Posts({ posts }) {
  return (
    <div>
      <Image src={pic1} alt="pic1" width={700} height={350}></Image>
      <Image src={pic1} alt="pic1" width={700} height={350}></Image>
      <h2>getStaticPaths - fallback:false</h2>
      <p>try routes beyond 100 to check the behavior</p>
      {posts.map((item) => (
        <div key={item.id}>
          <Link
            href={`/1-static-generation/2-get-static-paths-fallback-false/${item.id}`}
            passHref
          >
            <h4>
              {item.id}.{item.title}
            </h4>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Posts;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
}
