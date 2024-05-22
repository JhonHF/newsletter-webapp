"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Newsletter } from "@/app/api/newsletter/types";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  deleteNewsletter,
  getAllNewsletter,
} from "@/app/actions/services.actions";
import { useToast } from "@/components/ui/use-toast";

function NewsletterCardList() {
  const [newsletters, setNewsletters] = useState<Newsletter[]>([]);
  const { toast } = useToast();

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

  const handleDeleteNewsLetters = useCallback(async (id: number) => {
    try {
      const res = await deleteNewsletter(id);
      if (!res.ok) {
        throw new Error();
      }

      handleNewsletters()

    } catch (error) {
      console.log(error);

      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem deleting this newsletter.",
      });
    }
  }, [handleNewsletters, toast]);

  useEffect(() => {
    handleNewsletters();
  }, [handleNewsletters]);

  const parseDate = useCallback((date: string) => {
    const rawDate = new Date(date);

    return rawDate.toLocaleString();
  }, []);

  return (
    <section className="flex px-16">
      {newsletters.map((data) => (
        <Card key={data.id}>
          <CardHeader>
            <CardTitle>{data.name}</CardTitle>

            <CardDescription>
              Created at: {parseDate(data.create_at)}
            </CardDescription>
          </CardHeader>

          <CardFooter className="flex justify-between">
            <Button
              variant="destructive"
              onClick={() => handleDeleteNewsLetters(data.id)}
            >
              Delete
            </Button>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
}

export default NewsletterCardList;
