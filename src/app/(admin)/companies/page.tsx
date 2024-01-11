import React from "react";
import StatusLabel, { Status } from "../../components/StatusLabel";
import Header from "@/app/components/Header";
import Table from "@/app/components/Table";

const page = async () => {
  return (
    <>
      <Header>Companies</Header>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>NotActive</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
      <main>
        <div className="flex items-center gap-7 py-8 px-10">
          <div className="flex-1">
            <div className="relative w-96">
              <input
                type="text"
                className="text-sm flex-1 py-3 pl-3 pr-11 w-full h-11 rounded border border-gray-300 bg-gray-50"
              />
              <button type="button" className="absolute top-0 right-0 p-3">
                <img
                  alt="search icon"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  src="/icons/magnifying-glass.svg"
                />
              </button>
            </div>
          </div>
          <button className="py-2.5 px-5 bg-gray-900 text-zinc-50 text-base text-center font-medium rounded hover:bg-gray-800 active:bg-gray-950">
            Add company
          </button>
        </div>
        <div className="py-8 px-10 bg-gray-100">
          <Table />
        </div>
      </main>
    </>
  );
};

export default page;
