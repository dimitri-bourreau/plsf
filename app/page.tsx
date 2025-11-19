"use client";

import { WordInput } from "@/components/word-input.component";
import { SearchResults } from "@/components/search-results.component";
import { useState, useTransition } from "react";
import { VideoData } from "@/features/video/types/video-data.type";
import { searchWord } from "@/actions/search-word.action";

export default function Home() {
  const [videoData, setVideoData] = useState<VideoData[]>([]);
  const [isPending, startTransition] = useTransition();

  const handleSearch = async (word: string): Promise<void> => {
    startTransition(async () => {
      const searchResults = await searchWord(word);
      setVideoData(searchResults);
    });
  };

  return (
    <section className="flex flex-col gap-4 items-center">
      <SearchResults results={videoData} isPending={isPending} />
      <WordInput searchForWord={handleSearch} />
    </section>
  );
}
