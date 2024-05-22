import { api } from "@/lib/utils";
import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const decoder = new TextDecoder("utf-8");
    const body = req.body as ReadableStream;
    const { value } = await body.getReader().read();

    const { data } = await api.post<{ count: number }>(
      "/subscription",
      decoder.decode(value),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return Response.json(data);
  } catch (error) {
    console.log(error);

    return res.send(error);
  }
}
