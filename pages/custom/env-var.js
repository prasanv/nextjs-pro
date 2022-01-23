import React from "react";

function EnvironmentVariables(props) {
  return (
    <div>
      <h3>Environment Variables</h3>
      <h4>
        - You cannot directly access the <u>process.env.VARIABLES</u> on the
        client side components
      </h4>
      <p>Example: process.env.DB_USERNAME: {process.env.DB_USERNAME}</p>
      <h4>
        - If needed you can pass <u>process.env.VARIABLES</u> from server side
        to client through props
      </h4>
      <p>Example: process.env.FEATURE_CONTROL_FLAG: {props.feature_flag}</p>
      <h4>
        - You can access <u>process.env.NEXT_PUBLIC_ANALYTICS_ID</u> on the
        client side
      </h4>
      <p>
        Example: process.env.NEXT_PUBLIC_ANALYTICS_ID :{" "}
        {process.env.NEXT_PUBLIC_ANALYTICS_ID}
      </p>
    </div>
  );
}

export default EnvironmentVariables;

export async function getServerSideProps() {
  const username = process.env.DB_USERNAME;
  const password = process.env.DB_PASSWORD;
  console.log({ username, password });
  const custom_feature = process.env.FEATURE_CONTROL_FLAG;
  return {
    props: {
      feature_flag: custom_feature,
    },
  };
}
