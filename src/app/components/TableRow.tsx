import React, { FC } from "react";
import { ICompany } from "../types";
import StatusLabel, { Status } from "./StatusLabel";

const TableRow: FC<ICompany> = ({
  category,
  company,
  status,
  promotion,
  country,
  joined_date,
}) => {
  return (
    <tr>
      <td className="pb-5 text-sm font-light text-gray-900">{category}</td>
      <td className="pb-5 text-sm font-light text-gray-900">{company}</td>
      <td className="pb-5 text-sm font-light text-gray-900">
        <StatusLabel status={Status.Active}>Active</StatusLabel>{" "}
      </td>
      <td className="pb-5 text-sm font-light text-gray-900">{promotion}</td>
      <td className="pb-5 text-sm font-light text-gray-900">{country}</td>
      <td className="pb-5 text-sm font-light text-gray-900">{joined_date}</td>
    </tr>
  );
};

export default TableRow;
