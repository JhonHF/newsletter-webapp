import React, { useState } from "react";
import { UseFieldArrayAppend } from "react-hook-form";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { NewsletterFields, User } from "../types";

interface Props {
  append: UseFieldArrayAppend<NewsletterFields, "users">;
}

function UsersFormCard({ append }: Props) {
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add subscriptor to this newsletter</CardTitle>
      </CardHeader>

      <CardContent>
        <FormItem>
          <FormLabel>Name</FormLabel>
          <FormControl>
            <Input
              onChange={(e) =>
                setUser((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </FormControl>
        </FormItem>

        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input
              onChange={(e) =>
                setUser((prev) => ({ ...prev, email: e.target.value }))
              }
              type="email"
            />
          </FormControl>
        </FormItem>
      </CardContent>

      <CardFooter>
        <Button type="button" onClick={() => append(user)}>
          Add
        </Button>
      </CardFooter>
    </Card>
  );
}

export default UsersFormCard;
