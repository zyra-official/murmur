import { Audio } from "@/models/audios";

export const POST = async (req: Request) => {
  const body = await req.json();
  const newAudio = new Audio(body);
  await newAudio.save();
  return new Response("success");
};
