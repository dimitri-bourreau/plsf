import { ReactNode } from "react";
import clsx from "clsx";

interface ResultsContainerProps {
  children?: ReactNode;
  inputIsEmpty: boolean;
  isPending: boolean;
}

export const ResultsContainer = ({
  children,
  inputIsEmpty,
  isPending,
}: ResultsContainerProps) => (
  <section
    className={clsx(
      "p-2 w-full flex flex-col justify-between items-center transition-all overflow-auto",
      {
        "opacity-0": inputIsEmpty,
        "opacity-100": !inputIsEmpty,
      },
      {
        "bg-white-500/80 animate-pulse w-[480px] h-[360px]":
          isPending && !inputIsEmpty,
      },
    )}
  >
    {children}
  </section>
);
