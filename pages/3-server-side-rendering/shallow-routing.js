import React, { useState } from "react";
import { useRouter } from "next/router";

function EventsFiltering({ appliancesList }) {
  const [appliances, setAppliances] = useState(appliancesList);
  const router = useRouter();

  const filterFetcher = async (filterValue) => {
    const queryString = filterValue === "clear" ? "" : `?brand=${filterValue}`;
    const res = await fetch(`http://localhost:2020/appliances${queryString}`);
    const data = await res.json();
    setAppliances(data);
    router.push(
      `/3-server-side-rendering/shallow-routing${queryString}`,
      undefined,
      { shallow: true }
    );
  };

  const filterHandler = (e) => {
    filterFetcher(e.target.value);
  };

  return (
    <div>
      <h2>Filters with Shallow Routing</h2>
      Filter by Brand :{" "}
      <button value="IKEA" onClick={(e) => filterHandler(e)}>
        IKEA
      </button>
      <button value="Admiral" onClick={(e) => filterHandler(e)}>
        Admiral
      </button>
      <button value="Blue Star" onClick={(e) => filterHandler(e)}>
        Blue Star
      </button>
      <button value="clear" onClick={(e) => filterHandler(e)}>
        Clear
      </button>
      {appliances.map((item, index) => {
        return (
          <div key={index}>
            <h4>
              {index}.{item.equipment} by {item.brand}
            </h4>
          </div>
        );
      })}
    </div>
  );
}

export default EventsFiltering;

export async function getServerSideProps(context) {
  const queryString = !context.query.brand
    ? ""
    : `?brand=${context.query.brand}`;
  const res = await fetch(`http://localhost:2020/appliances${queryString}`);
  const data = await res.json();

  return {
    props: {
      appliancesList: data,
    },
  };
}
