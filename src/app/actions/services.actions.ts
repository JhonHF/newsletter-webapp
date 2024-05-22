"use server";
import { headers } from "next/headers";
import { NewsletterFields } from "../newsletters/new/types";

export async function getAllNewsletter() {
  const host = headers().get("host");

  const res = await fetch(`http://${host}/api/newsletter`);

  return {
    ok: res.ok,
    data: await res.json(),
  };
}

export async function deleteNewsletter(id: number) {
  const host = headers().get("host");

  const res = await fetch(`http://${host}/api/newsletter/${id}`, {
    method: "DELETE",
  });

  return {
    ok: res.ok,
    data: await res.json(),
  };
}

export async function createSubscription(data: NewsletterFields) {
  const host = headers().get("host");

  const res = await fetch(`http://${host}/api/subscription`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return {
    ok: res.ok,
    data: await res.json(),
  };
}

export async function createEmail(data: FormData) {
  const host = headers().get("host");

  return await fetch(`http://${host}/api/email`, {
    method: "POST",
    body: data,
  });
}
