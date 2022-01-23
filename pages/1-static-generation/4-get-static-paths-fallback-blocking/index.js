import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import pic1 from "public/getStaticPaths.fallback.blocking.1.png";
import pic2 from "public/getStaticPaths.fallback.blocking.2.png";

function Comments({ data }) {
  const [comments, setComments] = useState([]);

  useEffect(() => setComments([...data]), [data]);

  return (
    <div>
      <Image src={pic1} alt="pic1" width={700} height={300}></Image>
      <Image src={pic2} alt="pic2" width={700} height={250}></Image>
      <h2>getStaticPaths - fallback:blocking</h2>
      <p>try routes beyond 500 to check the behavior</p>
      {comments?.map((item) => {
        return (
          <Link
            key={item.id}
            href={`/1-static-generation/4-get-static-paths-fallback-blocking/${item.id}`}
            passHref
          >
            <h4>
              {item.id}.{item.name}
            </h4>
          </Link>
        );
      })}
    </div>
  );
}

export default Comments;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await res.json();

  return {
    props: {
      data: data.slice(0, 100),
    },
  };
}
