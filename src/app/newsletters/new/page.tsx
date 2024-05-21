"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm } from "react-hook-form";
import { NewsletterFields } from "./types";
import UsersField from "./components/usersField";

function NewsletterForm() {
  const form = useForm<NewsletterFields>();

  return (
    <section>
      <Form {...form}>
        <form onSubmit={form.handleSubmit((v) => console.log(v))}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Newsletter name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <UsersField />
        </form>
      </Form>
    </section>
  );
}

export default NewsletterForm;
