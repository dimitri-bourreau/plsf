import { VideoData } from "@/features/video/types/video-data.type";

interface SearchResultsProps {
  results: VideoData[];
}

export const SearchResults = ({ results }: SearchResultsProps) => {
  return (
    <section>
      {results.map((videoData) => (
        <p key={videoData.id}>{videoData.word}</p>
      ))}
    </section>
  );
};
