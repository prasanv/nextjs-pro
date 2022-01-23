import React from "react";
import CustomHeader from "@/layout/customHeader";
import CustomFooter from "@/layout/customFooter";

function CustomLayout() {
  return <div style={{ height: "500px" }}>Custom Layout Page</div>;
}

export default CustomLayout;

CustomLayout.getLayout = function getLayout(page) {
  return (
    <>
      <CustomHeader />
      {page}
      <CustomFooter />
    </>
  );
};
