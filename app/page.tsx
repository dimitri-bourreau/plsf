"use client";

import { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState<string | null>(null);

  return (
    <section className="flex flex-col gap-4 items-center">
      <p>{inputValue}</p>
      <input
        placeholder="Ajouter un mot"
        className="bg-white/20 px-4 py-2 rounded text-center hover:bg-white/50 hover:cursor-pointer"
        onChange={({ target }) => {
          setInputValue(target.value);
        }}
      />
    </section>
  );
}
