import { encodeAudio } from "@/lib/encodeAudio";
import { writeFile } from "fs/promises";
export async function POST(req: Request) {
  const formData = await req.formData();
  const audio = formData.get("audio") as File;
  if (!audio) {
    return new Response(JSON.stringify({ error: "Missing audio file." }), {
      headers: { "Content-Type": "application/json" },
      status: 404,
    });
  }
  const filePath = `/home/kb/Documents/projects/zyra/murmur/uploads/${audio.name}`;
  try {
    await writeFile(filePath, new Uint8Array(await audio.arrayBuffer()));
    // Step 2: Send the response to the client
    const response = new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });

    // Step 3: Execute the encoding function after sending the response
    setImmediate(() => {
      // The encoding function runs asynchronously, after the response has been sent
      encodeAudio({ filePath, filename: audio.name });
    });

    return response;
  } catch (err) {
    return new Response(JSON.stringify({ success: false, msg: err }), {
      status: 500,
    });
  }
}
