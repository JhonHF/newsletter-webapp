import { api } from "@/lib/utils";
import { NextApiRequest } from "next";

export async function DELETE(req: NextApiRequest, { params }: { params: { id: string}}) {
    try {
      const { data } = await api.delete("/newsletter", {
        params: {
          id: params.id,
        },
      });
  
      return Response.json(data);
    } catch (error) {
      console.log(error);
      throw error
    }
  }
  