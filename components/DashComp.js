import React from "react";
import LeftNavDashboard from "./LeftNavDashboard";
import RightContent from "./RightContent";

const DashComp = ({ children }) => {
  return (
    <>
      <LeftNavDashboard />
      <RightContent> {children} </RightContent>
    </>
  );
};

export default DashComp;
