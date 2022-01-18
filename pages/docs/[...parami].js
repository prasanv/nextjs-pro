import React from "react";
import { useRouter } from "next/router";

const CatchAllRoutes = () => {
  const router = useRouter();

  const { parami } = router.query;

  console.log({ parami });

  return (
    <div>
      <h3>CatchAllRoutes Example</h3>
      Routes -{" "}
      {parami?.map((item, index) => (
        <span key={index}>{"/ " + item + " "}</span>
      ))}
    </div>
  );
};

export default CatchAllRoutes;
