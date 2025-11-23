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

  const handleDeleteInputQuery = () => {
    setInputQuery("");
  };

  return (
    <div className="relative">
      <input
        name="word-query"
        placeholder="Chercher un mot"
        className="bg-white/20 px-4 py-2 rounded text-center hover:bg-white/50 hover:cursor-pointer"
        onChange={({ target }) => setInputQuery(target.value)}
        value={inputQuery}
        autoFocus
      />
      {inputQuery !== "" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          fill="currentColor"
          className="absolute w-5 h-5 top-2.5 right-2.5 text-gray-500 hover:cursor-pointer"
          onClick={handleDeleteInputQuery}
        >
          {/*Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc*/}
          <path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z" />
        </svg>
      )}
    </div>
  );
};
