import React from "react";

const page = () => {
  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-3">
        <div className="rounded styles_gradient__aOak5 p-7 bg-purple-200 text-gray-900 text-left">
          <p className="text-left before:w-4 before:h-0.5 before:rounded text-xs mb-5 before:inline-block before:mr-2 before:align-middle before:bg-gray-900">
            Total promotions
          </p>
          <p className="text-6xl font-semibold">410</p>
        </div>
      </div>
      <div className="col-span-3">
        <div className="rounded styles_gradient__aOak5 p-7 bg-purple-200 text-gray-900 text-left">
          <p className="text-left before:w-4 before:h-0.5 before:rounded text-xs mb-5 before:inline-block before:mr-2 before:align-middle before:bg-gray-900">
            Total categories
          </p>
          <p className="text-6xl font-semibold">8</p>
        </div>
      </div>
      <div className="col-span-3">
        <div className="rounded styles_gradient__aOak5 p-7 bg-purple-200 text-gray-900 text-left">
          <p className="text-left before:w-4 before:h-0.5 before:rounded text-xs mb-5 before:inline-block before:mr-2 before:align-middle before:bg-gray-900">
            New companies
          </p>
          <p className="text-6xl font-semibold">28</p>
        </div>
      </div>
      <div className="col-span-3">
        <div className="rounded styles_gradient__aOak5 p-7 bg-purple-200 text-gray-900 text-left">
          <p className="text-left before:w-4 before:h-0.5 before:rounded text-xs mb-5 before:inline-block before:mr-2 before:align-middle before:bg-gray-900">
            Total active companies
          </p>
          <p className="text-6xl font-semibold">670</p>
        </div>
      </div>
    </div>
  );
};

export default page;
