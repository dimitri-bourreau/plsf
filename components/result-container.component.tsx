import { ReactNode } from "react";
import clsx from "clsx";

interface ResultsContainerProps {
  children?: ReactNode;
  inputIsEmpty: boolean;
}

export const ResultsContainer = ({
  children,
  inputIsEmpty,
}: ResultsContainerProps) => (
  <section
    className={clsx(
      "p-2 w-full flex flex-col justify-between items-center transition-all overflow-auto",
      {
        "opacity-0": inputIsEmpty,
        "opacity-100": !inputIsEmpty,
      },
    )}
  >
    {children}
  </section>
);
