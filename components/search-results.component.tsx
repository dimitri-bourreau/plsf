import { VideoData } from "@/features/video/types/video-data.type";
import clsx from "clsx";
import { ReactNode } from "react";

interface SearchResultsProps {
  results: VideoData[];
  isPending: boolean;
  inputIsEmpty: boolean;
}

export const SearchResults = ({
  results,
  isPending,
  inputIsEmpty,
}: SearchResultsProps) => {
  return (
    <Wrapper inputIsEmpty={inputIsEmpty} isPending={isPending}>
      {results.map((videoData) => (
        <p key={JSON.stringify(videoData)}>{videoData.word}</p>
      ))}
    </Wrapper>
  );
};

interface WrapperProps {
  children?: ReactNode;
  isPending?: boolean;
  inputIsEmpty: boolean;
}

const Wrapper = ({
  children,
  inputIsEmpty,
  isPending = false,
}: WrapperProps) => (
  <section
    className={clsx(
      "p-1 w-full h-64 flex items-center justify-center bg-white/90 rounded transition-all",
      {
        "animate-pulse": isPending,
      },
      {
        "opacity-0": inputIsEmpty,
        "opacity-100": !inputIsEmpty,
      },
    )}
  >
    {children}
  </section>
);
