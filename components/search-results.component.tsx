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

      <ul className="flex flex-col gap-4 w-full h-full">
        {results.map((videoData, index) => {
          if (!videoData?.videoUrl) return undefined;
          return (
            <li
              key={`${JSON.stringify(videoData)}-${index}`}
              className="flex gap-4"
            >
              <video
                width="160"
                height="120"
                controls
                preload="auto"
                poster={videoData.videoPosterUrl || undefined}
              >
                <source src={videoData.videoUrl} type="video/mp4" />
              </video>
              <div>
                <button className="p-2 bg-[#36C5E0] cursor-pointer rounded text-white">
                  Ajouter {videoData.word} à la liste
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="h-10 w-full">x</div>
    </ResultsContainer>
  );
};
