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
import { Button } from "@/components/ui/button";
import { createSubscription } from "@/app/actions/services.actions";

function NewsletterForm() {
  const form = useForm<NewsletterFields>();

  const handlesubmit = async (values: NewsletterFields) => {
    try {
      const { data, ok } = await createSubscription(values);
      console.log(data, ok);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handlesubmit)}>
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

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </section>
  );
}

export default NewsletterForm;
