"use client";
import Hls from "hls.js";
// import { useLayoutEffect, useRef, useState } from "react";
import { useLayoutEffect, useRef } from "react";
export default function Play() {
  const audioRef = useRef<HTMLMediaElement | null>(null);
  // const [audioSrcUrl, setAudioSrc] = useState(
  //   "https://raw.githubusercontent.com/livekb/rumrum/refs/heads/main/1/output.m3u8",
  // );
  useLayoutEffect(() => {
    if (Hls.isSupported()) {
      const hls = new Hls();
      // hls.loadSource(audioSrcUrl);
      hls.loadSource(
        "https://s3.ap-south-1.amazonaws.com/murmur.m3u8/thescienceofselflearning/output.m3u8",
      );
      if (!audioRef.current) return;
      hls.attachMedia(audioRef.current);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        audioRef.current?.focus();
        debugger;
      });
    }
  });
  return (
    <section className="overflow-hidden">
      <audio ref={audioRef} controls></audio>
    </section>
  );
}
