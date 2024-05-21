import React from "react";
import { Button } from "@/components/ui/button";
import NewsletterCardList from "./components/newsletterCardList";
import Link from "next/link";

function Newsletters() {
  return (
    <>
      <div className="py-7 pl-8">
        <Link href="/newsletters/new">
            <Button>Add newsletter</Button>
        </Link>
      </div>
      <NewsletterCardList />
    </>
  );
}

export default Newsletters;
