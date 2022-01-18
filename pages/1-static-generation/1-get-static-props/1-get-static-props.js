import Image from "next/image";
import React from "react";
import Users from "../../../src/components/1-static-generation/users";
import GetStaticProps_1 from "../../../public/getStaticProps.1.png";
import GetStaticProps_2 from "../../../public/getStaticProps.2.png";

function StaticGenerationExample({ users }) {
  return (
    <div>
      <Image
        src={GetStaticProps_1}
        alt="getStaticProps_1"
        width={700}
        height={300}
      ></Image>
      <Image
        src={GetStaticProps_2}
        alt="getStaticProps_2"
        width={700}
        height={300}
      ></Image>
      <h2>per-rendering example get-static-props</h2>
      {users.map((item, index) => (
        <Users item={item} key={index}></Users>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      users: data,
    },
  };
}

export default StaticGenerationExample;
