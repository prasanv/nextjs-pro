import React from "react";

function ItemListByBrand({ data, brand, category = null }) {
  return (
    <div>
      <h2>getServerSideProps with Dynamic Parameters</h2>
      {category ? (
        <h3>
          Showing Items by {brand} brand - {category} category
        </h3>
      ) : (
        <h3>Showing Items by {brand} brand </h3>
      )}
      {!data.length ? "Sorry no Items to display" : ""}
      {data.map((item) => (
        <div key={item.id}>
          <li>
            {item.equipment}-{item.category}
          </li>
        </div>
      ))}
    </div>
  );
}

export default ItemListByBrand;

export async function getServerSideProps(context) {
  // console.log(context);
  const { params, req, res, query } = context;
  console.log(req.headers.cookie);
  res.setHeader("Set-Cookie", ["name=prasan"]);

  if (!!query.category) {
    const url = `http://localhost:2020/appliances?brand=${params.SSRWithDynamicParam}&category=${query.category}`;
    const response = await fetch(url);
    const data = await response.json();

    return {
      props: {
        data,
        brand: params.SSRWithDynamicParam,
        category: query.category,
      },
    };
  } else {
    const url = `http://localhost:2020/appliances?brand=${params.SSRWithDynamicParam}`;
    const response = await fetch(url);
    const data = await response.json();

    return {
      props: {
        data,
        brand: params.SSRWithDynamicParam,
      },
    };
  }
}
