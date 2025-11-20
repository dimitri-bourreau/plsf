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
