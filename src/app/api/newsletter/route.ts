import { api } from "@/lib/utils";
import { Newsletter } from "./types";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { data } = await api.get<Newsletter[]>("/newsletter");

    return Response.json(data);
  } catch (error) {
    console.log(error);
    return Response.json(error);
  }
}