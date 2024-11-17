const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
const fs = require("node:fs/promises");
const { path } = require("node:path");
const ffmpeg = require("fluent-ffmpeg");

const S3_REGION = "ap-south-1";
const S3_ACCESS_KEY_ID = "AKIA4IUOCPRNGVH6LK4W";
const S3_SECRET_ACCESS_KEY = "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";
const s3Client = new S3Client({
  region: S3_REGION,
  credentials: {
    accessKeyId: S3_ACCESS_KEY_ID,
    secretAccessKey: S3_SECRET_ACCESS_KEY,
  },
});
//
const BUCKET_NAME = process.env.BUCKET_NAME;
const KEY = process.env.KEY;

async function init() {
  // download original video
  const command = new GetObjectCommand({
    Bucket: BUCKET_NAME,
    Key: KEY,
  });
  const result = await s3Client.send(command);
  const originalFilePath = `${Date.now()}-original-audio.wav`;
  await fs.writeFile(originalFilePath, result.Body);
  const originalAudioPath = path.resolve(originalFilePath);
  // start transcoder
  const outputDir = `transcoded-${originalAudioPath}`;
  await fs.mkdir(outputDir, { recursive: true });
  const outputPlaylist = path.join(outputDir, "output.m3u8");
  ffmpeg(originalAudioPath)
    .output(outputPlaylist)
    .audioCodec("aac")
    .audioBitrate("128k")
    .format("hls")
    .outputOptions(["-hls_playlist_type vod", "-hls-time 15"])
    .on("end", () => {
      //upload to s3 bucket murmur.output
      console.log("Encoding finished!");
    })
    .on("error", (err) => {
      console.error("Error during encoding:", err);
    })
    .run();
}

init();
