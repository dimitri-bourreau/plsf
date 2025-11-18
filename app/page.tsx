"use client";

import { WordInput } from "@/components/word-input.component";
import { SearchResults } from "@/components/search-results.component";
import { useState } from "react";
import { VideoData } from "@/features/video/types/video-data.type";
import { searchWord } from "@/actions/search-word.action";

export default function Home() {
  const [videoData, setVideoData] = useState<VideoData[]>([]);

  const handleSearch = async (word: string): Promise<void> => {
    const searchResults = await searchWord(word);
    return void setVideoData(searchResults);
  };

  return (
    <section className="flex flex-col gap-4 items-center">
      {videoData && <SearchResults results={videoData} />}

      <WordInput searchForWord={handleSearch} />
    </section>
  );
}
