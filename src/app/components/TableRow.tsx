import React, { FC } from "react";
import { ICompany } from "../types";
import StatusLabel, { Status } from "./StatusLabel";

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

interface IProps {
  rowData: ICompany;
}

const TableRow: FC<IProps> = ({ rowData }) => {
  const { category, company, status, promotion, country, joined_date } =
    rowData;

  return (
    <tr>
      <td className="pb-5 text-sm font-light text-gray-900">{category}</td>
      <td className="pb-5 text-sm font-light text-gray-900">{company}</td>
      <td className="pb-5 text-sm font-light text-gray-900">
        <StatusLabel status={Status.Active}>Active</StatusLabel>{" "}
      </td>
      <td className="pb-5 text-sm font-light font-medium text-center text-green-700">
        {promotion}
      </td>
      <td className="pb-5 text-sm font-light text-center text-gray-900">
        {country}
      </td>
      <td className="pb-5 text-sm font-light text-center text-gray-900">
        {joined_date}
      </td>
    </tr>
  );
};

export default TableRow;
