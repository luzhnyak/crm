import React from "react";

const page = () => {
  return (
    <div className="rounded bg-gray-100 w-full h-full">
      <p className="p-5 text-xl text-gray-900 font-medium">
        Categories of companies
      </p>
      <div>
        <div className="grid grid-cols-12 gap-3 pb-5 px-5">
          <div className="col-span-3">
            <div className="rounded pt-3 px-3 bg-gray-900 odd:text-purple-200 even:text-lime-200 text-right">
              <p className="text-left before:w-4 before:h-0.5 before:rounded text-sm mb-1 text-zinc-50 before:block before:mb-2 before:bg-zinc-50">
                Category 1
              </p>
              <p className="text-6xl font-semibold">1</p>
            </div>
          </div>
          <div className="col-span-3">
            <div className="rounded pt-3 px-3 bg-gray-900 odd:text-purple-200 even:text-lime-200 text-right">
              <p className="text-left before:w-4 before:h-0.5 before:rounded text-sm mb-1 text-zinc-50 before:block before:mb-2 before:bg-zinc-50">
                Category 2
              </p>
              <p className="text-6xl font-semibold">1</p>
            </div>
          </div>
          <div className="col-span-3">
            <div className="rounded pt-3 px-3 bg-gray-900 odd:text-purple-200 even:text-lime-200 text-right">
              <p className="text-left before:w-4 before:h-0.5 before:rounded text-sm mb-1 text-zinc-50 before:block before:mb-2 before:bg-zinc-50">
                Category 3
              </p>
              <p className="text-6xl font-semibold">1</p>
            </div>
          </div>
          <div className="col-span-3">
            <div className="rounded pt-3 px-3 bg-gray-900 odd:text-purple-200 even:text-lime-200 text-right">
              <p className="text-left before:w-4 before:h-0.5 before:rounded text-sm mb-1 text-zinc-50 before:block before:mb-2 before:bg-zinc-50">
                Category 4
              </p>
              <p className="text-6xl font-semibold">1</p>
            </div>
          </div>
          <div className="col-span-3">
            <div className="rounded pt-3 px-3 bg-gray-900 odd:text-purple-200 even:text-lime-200 text-right">
              <p className="text-left before:w-4 before:h-0.5 before:rounded text-sm mb-1 text-zinc-50 before:block before:mb-2 before:bg-zinc-50">
                Category 5
              </p>
              <p className="text-6xl font-semibold">1</p>
            </div>
          </div>
          <div className="col-span-3">
            <div className="rounded pt-3 px-3 bg-gray-900 odd:text-purple-200 even:text-lime-200 text-right">
              <p className="text-left before:w-4 before:h-0.5 before:rounded text-sm mb-1 text-zinc-50 before:block before:mb-2 before:bg-zinc-50">
                Category 6
              </p>
              <p className="text-6xl font-semibold">1</p>
            </div>
          </div>
          <div className="col-span-3">
            <div className="rounded pt-3 px-3 bg-gray-900 odd:text-purple-200 even:text-lime-200 text-right">
              <p className="text-left before:w-4 before:h-0.5 before:rounded text-sm mb-1 text-zinc-50 before:block before:mb-2 before:bg-zinc-50">
                Category 7
              </p>
              <p className="text-6xl font-semibold">0</p>
            </div>
          </div>
          <div className="col-span-3">
            <div className="rounded pt-3 px-3 bg-gray-900 odd:text-purple-200 even:text-lime-200 text-right">
              <p className="text-left before:w-4 before:h-0.5 before:rounded text-sm mb-1 text-zinc-50 before:block before:mb-2 before:bg-zinc-50">
                Category 8
              </p>
              <p className="text-6xl font-semibold">0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
