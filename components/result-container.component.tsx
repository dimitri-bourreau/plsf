import { ReactNode } from "react";
import clsx from "clsx";

interface ResultsContainerProps {
  children?: ReactNode;
  isPending?: boolean;
  inputIsEmpty: boolean;
}

export const ResultsContainer = ({
  children,
  inputIsEmpty,
  isPending = false,
}: ResultsContainerProps) => (
  <section
    className={clsx(
      "p-2 w-full h-64 flex flex-col gap-4 bg-white/40 rounded transition-all overflow-auto",
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
