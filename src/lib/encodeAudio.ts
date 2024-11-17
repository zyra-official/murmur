import { spawn } from "child_process";
import { mkdir, rm } from "fs/promises";
import path from "path";

export async function encodeAudio({
  filePath,
  filename,
}: {
  filePath: string;
  filename: string;
}) {
  const timestamp = Date.now();
  const outputDir = path.join(
    "/home/kb/Documents/projects/zyra/murmur",
    `${timestamp}-output`,
  );
  const outputFile = path.join(outputDir, `${filename}.m3u8`);

  try {
    // Step 1: Create the output directory
    await mkdir(outputDir, { recursive: true });
    console.log(`Created output directory at: ${outputDir}`);

    // Step 2: Start FFmpeg process to encode the audio
    const ffmpeg = spawn("ffmpeg", [
      "-i",
      filePath, // Input file
      "-vn", // No video
      "-c:a",
      "aac", // Audio codec
      "-b:a",
      "128k", // Audio bitrate
      "-f",
      "hls", // HLS format
      "-hls_time",
      "20", // Segment duration
      "-hls_playlist_type",
      "vod", // Video-on-demand playlist
      outputFile, // Output file path
    ]);

    // Step 3: Return a promise that resolves or rejects based on the FFmpeg process result
    await new Promise((resolve, reject) => {
      ffmpeg.stdout.on("data", (data) => {
        console.log(`FFmpeg stdout: ${data}`);
      });

      ffmpeg.stderr.on("data", (data) => {
        console.error(`FFmpeg stderr: ${data}`);
      });

      ffmpeg.on("close", (code) => {
        if (code === 0) {
          console.log(`Encoding complete: ${outputFile}`);
          resolve(true);
        } else {
          reject(new Error(`FFmpeg process failed with code ${code}`));
        }
      });
    });

    // Step 4: Return the output file path upon success
    return outputFile;
  } catch (err) {
    // Clean up in case of failure
    console.error("Error during encoding:", err);
    try {
      await rm(outputDir, { recursive: true, force: true }); // Cleanup
      console.log("Cleaned up temporary files.");
    } catch (cleanupError) {
      console.error("Error during cleanup:", cleanupError);
    }

    return false; // Return false on failure
  }
}
