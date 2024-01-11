import { NextResponse } from "next/server";

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

    return companies;
  } catch (error) {
    console.log("There was an error connection to the DB", error);
    return [];
  }
};

export async function GET() {
  //   const res = await fetch("https://data.mongodb-api.com/...", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       "API-Key": process.env.DATA_API_KEY,
  //     },
  //   });
  const data = await DBConected();

  return NextResponse.json(data);
}
