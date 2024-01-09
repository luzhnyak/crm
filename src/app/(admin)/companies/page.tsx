import React from "react";
import StatusLabel, { Status } from "../../components/StatusLabel";
import Header from "@/app/components/Header";
import Country from "../../../models/country";
import Company from "../../../models/company";
import mongoose from "mongoose";

const MONGODB_URI =
  "mongodb+srv://luzhnyak:d4pwBIC7Q70BxyGa@luzhnyak.lhqrfpl.mongodb.net/crm?retryWrites=true&w=majority";

let client;

const DBConected = async () => {
  try {
    client = await mongoose.connect(MONGODB_URI);
    console.log("DB connected");
    // const c = await Country.find({});
    await Company.create({
      category: "category 1",
      company: "company 1",
      status: "Active",
      promotion: "String",
      country: "Ukraine",
      joined_date: new Date(),
    });

    const companies = await Company.find({});

    console.log(companies);
  } catch (error) {
    console.log("There was an error connection to the DB", error);
  }
};

DBConected();

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
          <table className="table-auto w-full border-separate border-spacing-y-2">
            <thead>
              <tr>
                <th className="pb-5 text-sm font-light text-gray-900">
                  Category
                </th>
                <th className="pb-5 text-sm font-light text-gray-900">
                  Company
                </th>
                <th className="pb-5 text-sm font-light text-gray-900">
                  Status
                </th>
                <th className="pb-5 text-sm font-light text-gray-900">
                  Promotion
                </th>
                <th className="pb-5 text-sm font-light text-gray-900">
                  Country
                </th>
                <th className="pb-5 text-sm font-light text-gray-900">
                  Joined date
                </th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </main>
    </>
  );
};

export default page;
