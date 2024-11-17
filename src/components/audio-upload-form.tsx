"use client";
import { useRef } from "react";

const AudioUpload = () => {
  const audioRef = useRef<HTMLInputElement>(null);
  const handleAudioUpload = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    const audioFiles = audio?.files;
    if (!audioFiles) return;
    const audioFile = audioFiles[0];
    if (!audioFile) return;
    const { name, size, type } = audioFile;
    const res = await fetch("/api/put-to-s3", {
      method: "POST",
      headers: {
        ContentType: "application/json",
      },
      body: JSON.stringify({ name, size, type }),
    });
    const { preSignedUrl } = await res.json();
    console.log({ preSignedUrl });
    const uploadResponse = await fetch(preSignedUrl, {
      method: "PUT",
      body: audioFile,
    });
    if (!uploadResponse.ok) {
      throw new Error("Failed to upload the audio file");
    }

    const responseBody = await uploadResponse.json();
    console.log("Upload response:", responseBody);
  };
  return (
    <div>
      <input ref={audioRef} type="file" accept="audio/*" />
      <button onClick={handleAudioUpload}>Upload</button>
    </div>
  );
};
export default AudioUpload;
