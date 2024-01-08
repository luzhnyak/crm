import React, { FC, ReactNode } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

interface IProps {
  title: string;
  children: ReactNode;
}

const layout: FC<IProps> = ({ title, children }) => {
  return (
    <>
      <Sidebar />
      <div className="ml-60">
        <Header>{title}</Header>
        {children}
      </div>
    </>
  );
};

export default layout;
