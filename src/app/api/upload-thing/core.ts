import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const auth = (req: Request) => ({ id: "fakeid" }); //fake auth func

export const ourFileRouter = {
  hlsFile: f({
    m3u8: {
      maxFileSize: "1MB",
      maxFileCount: 1,
    },
    ts: {
      maxFileSize: "1MB",
    },
  }).onUploadComplete(async ({ metadata, file }) => {
    console.log("uploadComplete", { metadata }, { file });
  }),
} satisfies FileRouter;
