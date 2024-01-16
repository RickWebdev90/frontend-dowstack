import React from "react";

const ProgressBar = ({ balance, goal }) => {
  const percentage = (balance / goal) * 100;
  return (
    <div
      style={{
        width: "100%",
        border: "1px solid black",
        borderRadius: "25px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${percentage}%`,
          height: "3.25vh",
          backgroundColor: "#4caf50",
        }}
      ></div>
    </div>
  );
};
export default ProgressBar;
