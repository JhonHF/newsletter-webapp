import { api } from "@/lib/utils";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.formData();

  return await api.post("/email", data);
}
