import React, { FC, PropsWithChildren, ReactNode } from "react";
import { ICompany } from "../types";
import TableRow from "./TableRow";

interface IProps {
  children: ReactNode;
  data: ICompany[];
}

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
        {
          <TableRow
            category="category"
            company="company"
            status="status"
            promotion="promotion"
            country="country"
            joined_date="joined_date"
          ></TableRow>
        }
      </tbody>
    </table>
  );
};

export default Table;
