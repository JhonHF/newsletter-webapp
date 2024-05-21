import React, { useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { NewsletterFields, User } from "../types";

import UsersTable from "./usersTable";
import UsersFormCard from "./usersFormCard";

function UsersField() {
  const { control } = useFormContext<NewsletterFields>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "users",
  });

  return (
    <div className="grid grid-cols-2 py-5 gap-5">
      <UsersTable fields={fields} remove={remove} />
      <UsersFormCard append={append} />
    </div>
  );
}

export default UsersField;
