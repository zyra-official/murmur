import dbConnect from "@/lib/dbconnect";
import { Audio } from "@/models/audios";
export const GET = async () => {
  await dbConnect();
  const audios = await Audio.find();
  console.log(audios);
  return Response.json(audios);
};
