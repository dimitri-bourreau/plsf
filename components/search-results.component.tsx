import { VideoData } from "@/features/video/types/video-data.type";
import { ResultsContainer } from "@/components/result-container.component";
import Link from "next/link";

interface SearchResultsProps {
  results: VideoData[];
  isPending: boolean;
  inputIsEmpty: boolean;
  word: string;
}

export const SearchResults = ({
  results,
  isPending,
  inputIsEmpty,
  word,
}: SearchResultsProps) => {
  return (
    <ResultsContainer inputIsEmpty={inputIsEmpty} isPending={isPending}>
      <h4>
        Signes trouvés pour <span className="font-bold italic">{word}</span> sur{" "}
        <Link
          className="text-blue-500 cursor-pointer underline"
          href="https://dico.elix-lsf.fr/"
        >
          Le Dico Elix
        </Link>{" "}
        🕵️‍♀️
      </h4>

      <ul className="flex flex-col items-center gap-2 w-full h-full">
        {results.map((videoData, index) => {
          if (!videoData?.videoUrl) return undefined;
          return (
            <li
              key={`${JSON.stringify(videoData)}-${index}`}
              className="flex flex-col gap-2 p-2  rounded relative"
            >
              <video
                width="480"
                height="360"
                controls
                preload="auto"
                poster={videoData.videoPosterUrl || undefined}
                className="rounded"
                autoPlay
              >
                <source src={videoData.videoUrl} type="video/mp4" />
              </video>
              <p className="absolute left-4 top-4">{videoData.word}</p>
            </li>
          );
        })}
      </ul>
    </ResultsContainer>
  );
};
