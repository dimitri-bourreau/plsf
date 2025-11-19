import { VideoData } from "@/features/video/types/video-data.type";
import clsx from "clsx";

interface SearchResultsProps {
  results: VideoData[];
  isPending: boolean;
}

export const SearchResults = ({ results, isPending }: SearchResultsProps) => {
  if (results.length === 0) {
    return <></>;
  }

  return (
    <section>
      {results.map((videoData) => (
        <p
          key={`${videoData.id}-${videoData.word}`}
          className={clsx(isPending && "bg-red-500")}
        >
          {videoData.word}
        </p>
      ))}
    </section>
  );
};
