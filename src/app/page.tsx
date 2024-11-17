import CategoryGrid from "@/components/categoryGrid";
import FeaturedContent from "@/components/featured-content";
import { FeaturedPlaylists } from "@/components/featured-playlists";
import { RecommendedTracks } from "@/components/recommended-track";

export default function Home() {
  return (
    <section className="overflow-hidden">
      <FeaturedContent />
      <FeaturedPlaylists />
      <CategoryGrid />
      <RecommendedTracks />
    </section>
  );
}
