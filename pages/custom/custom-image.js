import Image from "next/image";
import React from "react";
import zero_img from "public/0.jpg";
import second_img from "public/2.jpg";
function CustomImageLoadingPage() {
  return (
    <div>
      <h2>Custom Image Loading Page</h2>
      <Image
        src={zero_img}
        placeholder="blur"
        alt="zero_img"
        width="350"
        height="600"
      ></Image>
      <Image
        src={zero_img}
        placeholder="empty"
        alt="zero_img"
        width="350"
        height="600"
      ></Image>
      {[1, 2, 3, 4, 5].map((item) => (
        <div key={item}>
          <Image
            src={`/${item}.jpg`}
            alt={item}
            width="250"
            height="400"
          ></Image>
        </div>
      ))}
    </div>
  );
}

export default CustomImageLoadingPage;
