import React, { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

const index: React.FC<WrapperProps> = ({ children }) => {
  const style = {
    border: "2px solid black",
    padding: "16px",
  };
  return <div style={style}>{children}</div>;
};

export default index;
