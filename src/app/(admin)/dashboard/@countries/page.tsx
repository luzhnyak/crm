import React from "react";

const page = () => {
  return (
    <div className="rounded bg-gray-100 w-full h-full">
      <p className="p-5 text-xl text-gray-900 font-medium">
        Countries of companies
      </p>
      <div>
        <div className="flex items-end pb-5 px-5 gap-2">
          <div>
            <p className="text-sm text-gray-900 font-medium before:inline-block before:w-2 before:h-2 before:rounded-full before:align-middle before:mr-2 before:bg-purple-200">
              Canada - 2
            </p>
            <p className="text-sm text-gray-900 font-medium before:inline-block before:w-2 before:h-2 before:rounded-full before:align-middle before:mr-2 before:bg-purple-200">
              USA - 1
            </p>
            <p className="text-sm text-gray-900 font-medium before:inline-block before:w-2 before:h-2 before:rounded-full before:align-middle before:mr-2 before:bg-purple-200">
              Italia - 1
            </p>
            <p className="text-sm text-gray-900 font-medium before:inline-block before:w-2 before:h-2 before:rounded-full before:align-middle before:mr-2 before:bg-purple-200">
              Ukraine - 1
            </p>
            <p className="text-sm text-gray-900 font-medium before:inline-block before:w-2 before:h-2 before:rounded-full before:align-middle before:mr-2 before:bg-purple-200">
              Spain - 1
            </p>
          </div>
          <img
            alt="world"
            loading="lazy"
            width="395"
            height="262"
            decoding="async"
            data-nimg="1"
            src="/images/world.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
