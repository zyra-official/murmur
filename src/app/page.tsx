import CategoryGrid from "@/components/categoryGrid";
import FeaturedContent from "@/components/featured-content";
import { FeaturedPlaylists } from "@/components/featured-playlists";
import { RecommendedTracks } from "@/components/recommended-track";


export default function Home() {
  // const audioRef = useRef<HTMLMediaElement | null>(null);
  // const audSrcRef = useRef<HTMLInputElement | null>(null);
  // const [audioSrcUrl, setAudioSrc] = useState(
  //   "https://raw.githubusercontent.com/livekb/rumrum/refs/heads/main/1/output.m3u8",
  // );
  // useEffect(() => {
  //   if (Hls.isSupported()) {
  //     const hls = new Hls();
  //     hls.loadSource(audioSrcUrl);
  //     // hls.loadSource(
  //     //   "https://utfs.io/f/jlfnSieV8I1WzFilCsTOUDCBG7L9xWYkthrwcsjEqT0Kegf6",
  //     // );
  //     if (!audioRef.current) return;
  //     hls.attachMedia(audioRef.current);
  //     hls.on(Hls.Events.MANIFEST_PARSED, () => {
  //       audioRef.current?.focus();
  //     });
  //   }
  // });

  return (
    <section className="overflow-hidden">
      <FeaturedContent />
      <FeaturedPlaylists />
      <CategoryGrid />
      <RecommendedTracks />
    </section>
  );
}
