import { Sign } from "@/features/video/types/sign.type";
import { ResultsContainer } from "@/components/result-container.component";

interface SearchResultsProps {
  sign: Sign | undefined;
  isPending: boolean;
  inputIsEmpty: boolean;
}

export const SearchResults = ({
  sign,
  isPending,
  inputIsEmpty,
}: SearchResultsProps) => (
  <ResultsContainer inputIsEmpty={inputIsEmpty} isPending={isPending}>
    {!sign ? (
      <p>Elix n&apos;a pas trouvé de signe. 🙇</p>
    ) : (
      <video
        key={sign.videoUrl}
        width="480"
        height="360"
        preload="auto"
        poster={sign.videoPosterUrl || undefined}
        className="rounded"
        autoPlay
        controls
        loop
      >
        <source src={sign.videoUrl} type="video/mp4" />
      </video>
    )}
  </ResultsContainer>
);
