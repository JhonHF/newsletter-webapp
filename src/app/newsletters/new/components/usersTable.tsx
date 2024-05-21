import React from "react";
import { FieldArrayWithId, UseFieldArrayRemove } from "react-hook-form";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { NewsletterFields } from "../types";

interface Props {
  fields: FieldArrayWithId<NewsletterFields, "users", "id">[];
  remove: UseFieldArrayRemove;
}

function UsersTable({ fields, remove }: Props) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {fields.map((field, index) => (
          <TableRow key={field.id}>
            <TableCell>{field.name}</TableCell>
            <TableCell>{field.email}</TableCell>
            <TableCell>
              <Button type="button" onClick={() => remove(index)}>
                remove
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default UsersTable;
