"use client";

import { useDeferredValue, useEffect, useState } from "react";
import { useDebounce } from "@/hooks/use-debounce.hook";

interface WordInputProps {
  searchForWord: (word: string) => Promise<void>;
}

export const WordInput = ({ searchForWord }: WordInputProps) => {
  const [inputQuery, setInputQuery] = useState("");
  const debouncedInputQuery = useDebounce(inputQuery);
  const deferredInputQuery = useDeferredValue(debouncedInputQuery);

  useEffect(() => {
    void searchForWord(deferredInputQuery);
  }, [deferredInputQuery, searchForWord]);

  return (
    <input
      name="word-query"
      placeholder="Ajouter un mot"
      className="bg-white/20 px-4 py-2 rounded text-center hover:bg-white/50 hover:cursor-pointer"
      onChange={({ target }) => setInputQuery(target.value)}
      autoFocus
    />
  );
};
