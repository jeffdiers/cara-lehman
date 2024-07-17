"use client";

import { usePathname } from "next/navigation";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useRef,
} from "react";

const HistoryContext = createContext<string | undefined>(undefined);
export const useHistory = () => useContext(HistoryContext);

const HistoryProvider: React.FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const pathname = usePathname();
  const previousPathnameRef = useRef<string | undefined>();

  useEffect(() => {
    // Store the previous pathname
    const previousPathname = previousPathnameRef.current;
    // Update the ref to the current pathname for the next render
    previousPathnameRef.current = pathname;

    return () => {
      // Reset the ref to the previous pathname when the component unmounts or before the next effect runs
      previousPathnameRef.current = previousPathname;
    };
  }, [pathname]);

  return (
    <HistoryContext.Provider value={previousPathnameRef.current}>
      {children}
    </HistoryContext.Provider>
  );
};

export default HistoryProvider;
