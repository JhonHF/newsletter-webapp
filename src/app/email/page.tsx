"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { createEmail, getAllNewsletter } from "../actions/services.actions";
import { Button } from "@/components/ui/button";
import { Newsletter } from "../api/newsletter/types";

function EmailForm() {
  const [newsletters, setNewsletters] = useState<Newsletter[]>([]);
  const form = useForm<EmailFields>();
  const { toast } = useToast();

  const { register } = form;

  const handleNewsletters = useCallback(async () => {
    try {
      const res = await getAllNewsletter();

      if (!res.ok) {
        throw new Error();
      }

      setNewsletters(res.data);
    } catch (error) {
      console.log(error);

      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem getting newsletter list.",
      });

      setNewsletters([]);
    }
  }, [toast]);

  useEffect(() => {
    handleNewsletters();
  }, [handleNewsletters]);

  const handleSubmit = async (values: EmailFields) => {
    try {
      const formData = new FormData();
      formData.append("attachment", values.attachment[0]);
      formData.append("newsletter", values.newsletter);

       await createEmail(formData);

    } catch (error) {
     console.log(error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <FormField
          control={form.control}
          name="newsletter"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Newsletter</FormLabel>

              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a newsletter" />
                  </SelectTrigger>
                </FormControl>

                <SelectContent>
                  {newsletters.map((newsletter) => (
                    <SelectItem
                      key={newsletter.id}
                      value={String(newsletter.id)}
                    >
                      {newsletter.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormItem>
          <FormLabel>File attachment</FormLabel>
          <FormControl>
            <Input type="file" {...register("attachment")} />
          </FormControl>
          <FormMessage />
        </FormItem>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export default EmailForm;
