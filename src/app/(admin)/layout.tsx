import React, { FC, ReactNode } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

interface IProps {
  children: ReactNode;
}

const layout: FC<IProps> = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div className="ml-60">{children}</div>
    </>
  );
};

export default layout;
