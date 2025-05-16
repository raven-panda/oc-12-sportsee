import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { PageErrorContext } from "@/hook/PageErrorHooks.ts";

export interface PageErrorContextProps {
  error?: string;
  setError: Dispatch<SetStateAction<string | undefined>>;
}

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
