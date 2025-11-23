"use client";

import { WordInput } from "@/components/word-input.component";
import { SearchResults } from "@/components/search-results.component";
import { useState, useTransition } from "react";
import { Sign } from "@/features/video/types/sign.type";
import { searchSign } from "@/actions/search-sign.action";

export default function Home() {
  const [sign, setSign] = useState<Sign | undefined>(undefined);
  const [inputQuery, setInputQuery] = useState<string>("");
  const [isPending, startTransition] = useTransition();

  const handleSearch = async (word: string): Promise<void> => {
    startTransition(async () => {
      const signFromElix = await searchSign(word);
      setSign(signFromElix);
      setInputQuery(word);
    });
  };

  return (
    <>
      <SearchResults
        sign={sign}
        isPending={isPending}
        inputIsEmpty={inputQuery === ""}
      />
      <WordInput searchForWord={handleSearch} />
    </>
  );
}
