import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface PageErrorContextProps {
  error?: string;
  setError: Dispatch<SetStateAction<string | undefined>>;
}

const PageErrorContext = createContext<PageErrorContextProps>({
  setError: () => {},
});

export const usePageError = (): PageErrorContextProps => {
  const { error, setError } = useContext(PageErrorContext);

  return { error, setError };
};

export function PageErrorContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [error, setError] = useState<string | undefined>();

  return (
    <PageErrorContext.Provider value={{ error, setError }}>
      {children}
    </PageErrorContext.Provider>
  );
}
