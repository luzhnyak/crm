import React, { FC, PropsWithChildren, ReactNode } from "react";
import { ICompany } from "../types";
import TableRow from "./TableRow";
import { Status } from "./StatusLabel";

interface IProps {
  children: ReactNode;
  data: ICompany[];
}

const data = [
  {
    category: "Products",
    company: "Costco Wholesale",
    status: Status.Active,
    promotion: "Yes",
    country: "USA",
    joined_date: "19.02.2023",
  },
  {
    category: "Products",
    company: "Costco Wholesale",
    status: Status.NotActive,
    promotion: "Yes",
    country: "USA",
    joined_date: "19.02.2023",
  },
];

const Table: FC = () => {
  return (
    <table className="table-auto w-full border-separate border-spacing-y-2">
      <thead>
        <tr>
          <th className="pb-5 text-sm font-light text-gray-900">Category</th>
          <th className="pb-5 text-sm font-light text-gray-900">Company</th>
          <th className="pb-5 text-sm font-light text-gray-900">Status</th>
          <th className="pb-5 text-sm font-light text-gray-900">Promotion</th>
          <th className="pb-5 text-sm font-light text-gray-900">Country</th>
          <th className="pb-5 text-sm font-light text-gray-900">Joined date</th>
        </tr>
      </thead>
      <tbody>
        {data.map((rowData) => {
          return <TableRow rowData={rowData}></TableRow>;
        })}
      </tbody>
    </table>
  );
};

export default Table;
