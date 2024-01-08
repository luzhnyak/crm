import React from "react";
import StatusLabel, { Status } from "../../components/StatusLabel";

const page = () => {
  return (
    <div>
      <h1>Companies</h1>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>NotActive</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
    </div>
  );
};

export default page;
