import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export async function putObject(filename: string, contentType: string) {
  const { S3_REGION, S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY, S3_BUCKET_NAME } =
    process.env;
  console.log({
    S3_REGION,
    S3_ACCESS_KEY_ID,
    S3_SECRET_ACCESS_KEY,
    S3_BUCKET_NAME,
  });
  console.log(process.env);
  const s3Client = new S3Client({
    region: S3_REGION!,
    credentials: {
      accessKeyId: S3_ACCESS_KEY_ID!,
      secretAccessKey: S3_SECRET_ACCESS_KEY!,
    },
  });
  const command = new PutObjectCommand({
    Bucket: S3_BUCKET_NAME!,
    Key: `uploads/audios/${filename}`,
    ContentType: contentType,
  });
  const url = await getSignedUrl(s3Client, command);
  return url;
  console.log(url);
}
const preSignedUrl = await putObject(`${"name"}-${Date.now()}`, "audio/wav");
console.log(preSignedUrl);
