"use server";
import { Newsletter } from "@/app/api/newsletter/types";
import { headers } from "next/headers";

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
