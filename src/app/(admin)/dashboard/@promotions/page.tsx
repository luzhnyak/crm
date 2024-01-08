import React from "react";

const page = () => {
  return (
    <div className="rounded bg-gray-100 w-full h-full">
      <p className="p-5 text-xl text-gray-900 font-medium">Promotions</p>
      <div>
        <table className="table-auto w-full border-separate border-spacing-0">
          <thead>
            <tr>
              <th className="py-2 px-5 text-xs font-normal first-of-type:rounded-l-sm last-of-type:rounded-r-sm text-left [&:nth-child(3n+1)]:text-white [&:nth-child(3n+1)]:bg-gray-900 [&:nth-child(3n+2)]:text-gray-900 [&:nth-child(3n+2)]:bg-purple-200 [&:nth-child(3n+3)]:text-gray-900 [&:nth-child(3n+3)]:bg-lime-200">
                Company
              </th>
              <th className="py-2 px-5 text-xs font-normal first-of-type:rounded-l-sm last-of-type:rounded-r-sm text-left [&:nth-child(3n+1)]:text-white [&:nth-child(3n+1)]:bg-gray-900 [&:nth-child(3n+2)]:text-gray-900 [&:nth-child(3n+2)]:bg-purple-200 [&:nth-child(3n+3)]:text-gray-900 [&:nth-child(3n+3)]:bg-lime-200">
                Name
              </th>
              <th className="py-2 px-5 text-xs font-normal first-of-type:rounded-l-sm last-of-type:rounded-r-sm text-center [&:nth-child(3n+1)]:text-white [&:nth-child(3n+1)]:bg-gray-900 [&:nth-child(3n+2)]:text-gray-900 [&:nth-child(3n+2)]:bg-purple-200 [&:nth-child(3n+3)]:text-gray-900 [&:nth-child(3n+3)]:bg-lime-200">
                %
              </th>
            </tr>
          </thead>
          <tbody className="[&>tr:nth-child(2n)]:bg-gray-100 [&>tr:nth-child(2n+1)]:bg-white">
            <tr>
              <td className="py-2 px-5 text-sm border-gray-100 border-r first-of-type:border-l text-left">
                Company 1
              </td>
              <td className="py-2 px-5 text-sm border-gray-100 border-r first-of-type:border-l text-left">
                Promotion 1
              </td>
              <td className="py-2 px-5 text-sm border-gray-100 border-r first-of-type:border-l text-center">
                -5%
              </td>
            </tr>
            <tr>
              <td className="py-2 px-5 text-sm border-gray-100 border-r first-of-type:border-l text-left">
                Company 2
              </td>
              <td className="py-2 px-5 text-sm border-gray-100 border-r first-of-type:border-l text-left">
                Promotion 2
              </td>
              <td className="py-2 px-5 text-sm border-gray-100 border-r first-of-type:border-l text-center">
                -15%
              </td>
            </tr>
            <tr>
              <td className="py-2 px-5 text-sm border-gray-100 border-r first-of-type:border-l text-left">
                Company 3
              </td>
              <td className="py-2 px-5 text-sm border-gray-100 border-r first-of-type:border-l text-left">
                Promotion 3
              </td>
              <td className="py-2 px-5 text-sm border-gray-100 border-r first-of-type:border-l text-center">
                -10%
              </td>
            </tr>
            <tr>
              <td className="py-2 px-5 text-sm border-gray-100 border-r first-of-type:border-l text-left">
                Company 4
              </td>
              <td className="py-2 px-5 text-sm border-gray-100 border-r first-of-type:border-l text-left">
                Promotion 4
              </td>
              <td className="py-2 px-5 text-sm border-gray-100 border-r first-of-type:border-l text-center">
                -30%
              </td>
            </tr>
            <tr>
              <td className="py-2 px-5 text-sm border-gray-100 border-r first-of-type:border-l text-left">
                Company 5
              </td>
              <td className="py-2 px-5 text-sm border-gray-100 border-r first-of-type:border-l text-left">
                Promotion 5
              </td>
              <td className="py-2 px-5 text-sm border-gray-100 border-r first-of-type:border-l text-center">
                -25%
              </td>
            </tr>
            <tr>
              <td className="py-2 px-5 text-sm border-gray-100 border-r first-of-type:border-l text-left">
                Company 1
              </td>
              <td className="py-2 px-5 text-sm border-gray-100 border-r first-of-type:border-l text-left">
                Promotion 6
              </td>
              <td className="py-2 px-5 text-sm border-gray-100 border-r first-of-type:border-l text-center">
                -50%
              </td>
            </tr>
            <tr>
              <td className="py-2 px-5 text-sm border-gray-100 border-r first-of-type:border-l text-left">
                Company 1
              </td>
              <td className="py-2 px-5 text-sm border-gray-100 border-r first-of-type:border-l text-left">
                X
              </td>
              <td className="py-2 px-5 text-sm border-gray-100 border-r first-of-type:border-l text-center">
                -40%
              </td>
            </tr>
            <tr>
              <td className="py-2 px-5 text-sm border-gray-100 border-r first-of-type:border-l text-left">
                Company 1
              </td>
              <td className="py-2 px-5 text-sm border-gray-100 border-r first-of-type:border-l text-left">
                X2
              </td>
              <td className="py-2 px-5 text-sm border-gray-100 border-r first-of-type:border-l text-center">
                -10%
              </td>
            </tr>
            <tr>
              <td className="py-2 px-5 text-sm border-gray-100 border-r first-of-type:border-l text-left">
                Company 1
              </td>
              <td className="py-2 px-5 text-sm border-gray-100 border-r first-of-type:border-l text-left">
                X3
              </td>
              <td className="py-2 px-5 text-sm border-gray-100 border-r first-of-type:border-l text-center">
                -20%
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
