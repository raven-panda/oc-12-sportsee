import { createContext, useContext } from "react";
import { PageErrorContextProps } from "@/components/context/PageErrorContext.tsx";

export const PageErrorContext = createContext<PageErrorContextProps>({
  setError: () => {},
});

export const usePageError = (): PageErrorContextProps => {
  const { error, setError } = useContext(PageErrorContext);

  return { error, setError };
};
